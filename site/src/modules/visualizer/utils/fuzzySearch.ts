import Fuse from 'fuse.js';

export const fuzzySearch = (queryString: string, context: string, isFuzzy: boolean = true) => {
  // const context =
  //   "The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%. BYD";
  // const queryString = "the rest of the top 5 companies";
  if (!isFuzzy) {
    // use direct match to find all matches, case insensitive
    const regex = new RegExp(`\\b${queryString}\\b`, 'gi');
    const matches = Array.from(context.matchAll(regex), (match) => {
      const startIndex = match.index;
      const endIndex = startIndex + match[0].length;
      return [startIndex, endIndex];
    });
    return matches;
  }

  const options = {
    shouldSort: true,
    includeMatches: true,
    includeScore: true,
    threshold: 0.6,
    findAllMatches: true,
    ignoreLocation: true,
    keys: ['text'],
    // tokenize: true,
    // tokenSeparator: /[\s.,;:!?]+/
  };

  const fuse = new Fuse([{ text: context }], options);
  const result = fuse.search(queryString);

  const proposalIndicesList = result.flatMap(
    (item) => item.matches?.map((match) => match.indices.map((index) => [index[0], index[1]])) || []
  );

  if (proposalIndicesList.length === 0) {
    return [];
  } else {
    const queryStringLength = queryString.length;
    // use the best match
    const proposedMatchLength = proposalIndicesList[0].map((item) => item[1] - item[0]);
    const proposedMatchDiff = proposedMatchLength.map((item) => Math.abs(item - queryStringLength));
    // console.log(proposedMatchDiff);
    // find a diff that is the closest to 0, if equal, return both, get the indices
    const minDiff = Math.min(...proposedMatchDiff);
    const bestMatchIndices = proposedMatchDiff.reduce((acc, curr, index) => {
      if (curr === minDiff) {
        acc.push(proposalIndicesList[0][index]);
      }
      return acc;
    }, [] as number[][]);
    return bestMatchIndices;
  }
};
