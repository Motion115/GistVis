import {
  StructuredOutputParser,
  RegexParser,
  CombiningOutputParser
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

const runAnomaly = async (model, textContent, index) => {
  const answerParser = StructuredOutputParser.fromNamesAndDescriptions({
    id: "unique id of text block",
    text: "original text provided by the user",
  });
  const typeParser = new RegexParser(/Type: (anomaly|)/, ["type"], "noType");
  const parser = new CombiningOutputParser(answerParser, typeParser);

  const anochain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        You are a professional text preprocessing assistant specializing in text visualization. Please provide a well-structured response to the user's chunk of the text strictly according to rules,  The user's goal is to generate corresponding charts based on your response. To achieve this, please check if the text provided by the user contains anomaly relationships. If included, type is comparison; if not included, type is null.\n
        Anomalies are usually data points that are significantly different from expected patterns, deviating from a general trend of growth or decline.(eg1: "Rocky Raccoon has the most unique words given the other songs from the Beatles" , eg2:"the recorded voltage suddenly spiked to 1000 volts, far exceeding the anticipated range")
        \n{format_instructions}\n{index}\n{paragraph}
        `),
    model,
    parser,
  ]);

  const response = await anochain.invoke({
    format_instructions: parser.getFormatInstructions(),
    index: "id:" + index,
    paragraph: "User:" + textContent,
  });
  // console.dir(response);

  return response;
};

export default runAnomaly;