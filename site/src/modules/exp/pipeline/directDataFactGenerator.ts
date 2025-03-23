import { ChatOpenAI } from '@langchain/openai';
import { DataSpec } from 'gist-wsv';

export const generateDirectDataSpecs = async (
  model: ChatOpenAI,
  text: string
): Promise<DataSpec[]> => {
  const prompt = `Analyze the following text, and extract all data-related facts in CSV format. Each CSV table should represent a data category.

Please follow this format:
<table>
entitySpace: category of entities
feature/entity, entity_1, entity_2, ..., entity_k
feature_1, value_11, value12,...,value_1k
feature_2, value_21, value22,...,value_2k
..,
feature_n, value_n1, value_n2,...,value_nk
</table>

For each data category:
1. Use the table tag as a separator.
2. The first line should be "entitySpace: space_name", using space_name as the space property.
3. The second line is the header describing each dimension.
4. The following lines are data rows.
5. Separate columns with commas.
6. If a value is missing, use null.
7. All values must be numeric; do not use any text (e.g., percentages, currency symbols, etc).

Example:
text: the sellers1 sold 100 units, sellers2 sold 200 units and sellers3 sold 300 units while the revenue was 500, 600, and 700 respectively, and seller2 increased 100 units from last year.

<table>
entitySpace: sellers
feature/entity, seller1, seller2, seller3
profit, 100, 200, 300
rank, 3, 2, 1
revenue, 500, 600, 700
increase, null, 100, null
</table>

Note:
1. Feature can be a measurement of breakdowns, suitable for y-labels of a chart like Sales, Market Share, Growth Rate, but not the meanningless statistics like date, id, month, etc.
2. Feature can also be some abstract concepts like rank, difference compared with each other, etc.
3. Values in the same row must have the same unit and comparable meaning.

Below is the text to be analyzed:
${text}`;

  const response = await model.invoke(prompt);
  const output = response.content as string;
  console.log(output);

  const dataSpecs = convertStringToDataSpecs(output);

  return dataSpecs;
};

  
export const stringToNumber = (value: string): number | undefined => {
  const numValue = Number(value);
  return isNaN(numValue) ? undefined : numValue;
};

export const convertStringToDataSpecs = (text: string): DataSpec[] => {
  // Identify content inside triple backticks
  const codeRegex = /```([\s\S.\n_]*?)```/g;
  const codeMatches = [...text.matchAll(codeRegex)];
  // console.log("Code matches:", codeMatches);
  
  const codeText = codeMatches[0]?.[1] ?? text;
  
  // Identify table tag
  const tableRegex = /<table>([\s\S]*?)<\/table>/g;
  const matches = [...codeText.matchAll(tableRegex)];
  console.log("Matches:", matches);
  
  const dataSpecs: DataSpec[] = [];
  for (const match of matches) {
    // Split lines and filter out empty lines
    const lines = match[1].split('\n').map(l => l.trim()).filter(l => l);
    if (lines.length < 2) continue; // Requires at least a header and one data row
    
    // The first line is "entitySpace: space_name", extract space_name as the space property
    const spaceLine = lines[0];
    const spaceMatch = spaceLine.match(/entitySpace: (.*)/);
    if (!spaceMatch) continue;
    const space = spaceMatch[1].trim();
    console.log("Space:", space);
    
    // The second line is the header, comma-separated; columns from the second onward are breakdowns
    const headerLine = lines[1];
    const headers = headerLine.split(',').map(h => h.trim());
    const breakdowns = headers.slice(1);
    console.log("Breakdowns:", breakdowns);
    
    // Data rows start from the third line; the first column is the feature name
    const dataLines = lines.slice(2);
    const features = dataLines.map(line => {
      const parts = line.split(',').map(p => p.trim());
      return parts[0];
    });
    console.log("Features:", features);
    
    // Iterate over each breakdown's corresponding value
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      const dataLine = dataLines[i]; // Corresponding data row
      const values = dataLine.split(',').map(v => v.trim()).slice(1);
      
      for (let j = 0; j < breakdowns.length; j++) {
        if (j < values.length) {
          const value = stringToNumber(values[j]);
          if (value === undefined) continue;
          
          const spec = {
            space: space,
            breakdown: breakdowns[j],
            feature: feature,
            value: value
          } as DataSpec;
          dataSpecs.push(spec);
        }
      }
    }
  }
  return dataSpecs;
}