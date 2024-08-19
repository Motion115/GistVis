import React, { useState } from "react";
import { Row, Col, Button, Typography, Input, Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import generateGistVisMarkup from "../lm/llm";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { paragraphSpec } from "../visualizer/types";
import { useAtom } from "jotai";
import { processStageAtom } from "../globalState";
import Quill from "quill";
import Delta from "quill-delta";

const { Text } = Typography;
const { TextArea } = Input;

interface EditorProps {
  changeLlmArticle: React.Dispatch<React.SetStateAction<paragraphSpec[]>>;
}

const Editor = ({ changeLlmArticle }: EditorProps) => {
  // const myRef = useRef(null);
  // const [inputText, setInputText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [processStage, setProcessStage] = useAtom(processStageAtom);
  const changeUserInput = (userInput: string) => {
    setUserInput(userInput);
    setProcessStage(0);
  };
  const submitUserInput = () => {
    // const input = {userInput}.userInput
    generateGistVisMarkup(userInput, setProcessStage).then((message) => {
      // console.log(message);
      changeLlmArticle(message);
      setProcessStage(4);
    });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div style={{ height: "290px" }}>
            <ReactQuill
              theme="snow"
              style={{ height: "240px" }}
              value={userInput}
              onChange={changeUserInput}
            />
          </div>
          <Button onClick={() => submitUserInput()} style={{ width: "100%" }}>
            <Text style={{ fontSize: "16px", fontStyle: "italic", textAlign: "center"}}>
              <FontAwesomeIcon icon={faWandMagicSparkles} /> Generate GistVis
            </Text>
          </Button>
        </Col>

        {/* <Col span={2}>
          <Button
            shape="circle"
            size="large"
            onClick={() => submitInputchange(inputText)}
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </Button>
        </Col> */}
      </Row>
    </div>
  );
};

export default Editor;
