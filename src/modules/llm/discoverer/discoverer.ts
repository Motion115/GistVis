import {
  CustomListOutputParser,
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { gistKB } from "../visKB";
import { paragraphSpec, UnitSegmentSpec, GistvisSpec } from "../../visualizer/types";

const splitInsight = async (model: ChatOpenAI<ChatOpenAICallOptions>, paragraphList: string[]) => {
  const parser = new CustomListOutputParser({ separator: "<section>" });

  // easy support for added insight types, no prompt change required
  const typeCandidates = Object.keys(gistKB).join(", ");

  const divchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        Please separate the user-provided paragraphs into sections that group similar data and content (data insight), aiming for the shortest feasible lengths. 
        Each section should limit its visual elements to a maximum of one single type: ${typeCandidates}. 
        The objective is for the user to generate corresponding charts based on your output.

        The sections in your response should contain complete original text provided by user without any modification. Preserve original punctuation marks and line breaks.

        Please enclose the sections in <seciton></section> tags.

        \n{paragraph}`),
    model as any,
    parser,
  ]);

  const segmentationResult = await Promise.all(
    paragraphList.map(async (textContent) => {
      const response = await divchain.invoke({ paragraph: "User:" + textContent });
      return response
        .filter((paragraph) => paragraph.trim() !== "")
        .map((paragraph) => paragraph.replace("</section>", ""));
    })
  );

  const gistParagraphSpecList: paragraphSpec[] = segmentationResult.map(
    (item: string[], paragraphIdx: number) => ({
      paragraphIdx,
      paragraphContent: item.map((sentence: string, segmentIdx: number) => ({
        id: `p${paragraphIdx}s${segmentIdx}`,
        unitSegmentSpec: {
          insightType: "noType",
          segmentIdx,
          context: sentence.trim(),
        } as UnitSegmentSpec,
      } as GistvisSpec)),
    })
  );

  return gistParagraphSpecList;
};

export default splitInsight;