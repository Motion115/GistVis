import React, { useState, useEffect } from "react";
import { ChatOpenAI } from "@langchain/openai";
import { ConfigProvider, Layout, Typography, Button, Flex, Divider,Tooltip, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import THEME from "../style/theme";

const { Header, Content } = Layout;
const { Text } = Typography;

const LLMConfigurationPage = () => {
  const [envVariables, setEnvVariables] = useState<{ REACT_APP_LLM_URL_BASE?: string; REACT_APP_LLM_API_KEY?: string; REACT_APP_LLM_MODEL_NAME?: string }>({});
  const ENV_URL_STRING = "REACT_APP_LLM_URL_BASE";
  const ENV_KEY_STRING = "REACT_APP_LLM_API_KEY";
  const ENV_MODEL_STRING = "REACT_APP_LLM_MODEL_NAME";
  
  const [chatInput, setChatInput] = useState("");

  const [messages, setMessages] = useState<string[]>([]);
  const [langchainMessages, setLangchainMessages] = useState<string[]>([]);

  const FETCH_FLAG = 1;
  const LANGCHIAN_FLAG = 10;
  const [useFetch, setUseFetch] = useState(true);
  const [useLangchain, setUseLangchain] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [chatState, setChatState] = useState(0);

  const [modifyingConfig, setModifyingConfig] = useState(false);

  const hoveringBgColor = "rgba(131, 131, 131, 0.8)";
  const hoveringShadow = "0 0 15px rgba(60,60,60,1)";
  const [hoveringConfigLoadButton, setHoveringConfigLoadButton] = useState(false);
  const [hoveringConfigUrlInput,setHoveringConfigUrlInput] = useState(false);
  const [hoveringConfigKeyInput,setHoveringConfigKeyInput] = useState(false);
  const [hoveringConfigModelInput,setHoveringConfigModelInput] = useState(false);

  useEffect(() => {
    const storedEnvVariables = localStorage.getItem("envVariables");
    if (storedEnvVariables) {
      setEnvVariables(JSON.parse(storedEnvVariables));
    } else {
      setEnvVariables({
        REACT_APP_LLM_URL_BASE: process.env.REACT_APP_LLM_URL_BASE,
        REACT_APP_LLM_API_KEY: process.env.REACT_APP_LLM_API_KEY,
        REACT_APP_LLM_MODEL_NAME: process.env.REACT_APP_LLM_MODEL_NAME
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("envVariables", JSON.stringify(envVariables));
  }, [envVariables]);
  
  // return chat object from the dynamic envVariables
  const chat = ()=>{return envVariables.REACT_APP_LLM_API_KEY && envVariables.REACT_APP_LLM_MODEL_NAME ? new ChatOpenAI({
    modelName: envVariables.REACT_APP_LLM_MODEL_NAME,
    openAIApiKey: envVariables.REACT_APP_LLM_API_KEY,
    configuration: {
      apiKey: envVariables.REACT_APP_LLM_API_KEY,
      baseURL: envVariables.REACT_APP_LLM_URL_BASE
    },
  }) : null;}

  const handleSendMessage = async () => {
    if(chatInput.trim() == ""){
      return;
    }
    setWaiting(true);
    const inp = chatInput.trim();
    setChatInput("");
    const res = sendMessageToBoth(inp);
    const fetchRes = await res[0];
    const langchainRes = await res[1];
    setChatState(fetchRes + langchainRes);
    setWaiting(false);
  }
  const sendMessageToBoth = (inp:string) => {
    // send message to both fetch and langchain
    const fetchRes = handleSendFetchMessage(FETCH_FLAG,inp);
    const langchainRes = handleLangchainSendMessage(LANGCHIAN_FLAG,inp);
    return [fetchRes,langchainRes];
  }
  const handleSendFetchMessage = async (flag:number,inp:string) => {
    // return flag if success, -flag if failed, 0 if not using fetch
    if (!useFetch){return 0}
    const newMessages = [...messages, inp];
    setMessages(newMessages);
    // call LLM API to get AI reply
    if (!envVariables.REACT_APP_LLM_URL_BASE) {
      console.error("REACT_APP_LLM_URL_BASE is not defined");
      return -flag;
    }
    try {
      const url = envVariables.REACT_APP_LLM_URL_BASE + `/chat/completions`;
      console.log(`url=${url}`);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${envVariables.REACT_APP_LLM_API_KEY}`
        },
        body: JSON.stringify({
          model: envVariables.REACT_APP_LLM_MODEL_NAME,
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant."
            },
            {
              role: "user",
              content: inp
            }
          ]
        })
      });
      const data = await response.json();
      console.log(`response.json:`);
      console.log(data);
      const aiReply = data.choices[0].message.content.trim();
      setMessages([...newMessages, aiReply]);
      return flag;
    } catch (error) {
      console.error("Failed:", error);
      setMessages([...newMessages, "[ERROR] FAILED TO FETCH"]);
      return -flag;
    }
  };

  const handleLangchainSendMessage = async (flag:number,inp:string) => {
    // return flag if success, -flag if failed, 0 if not using langchain
    if (!useLangchain){return 0}
    if (!chat){return -flag}
    const newMessages = [...langchainMessages, inp];
    setLangchainMessages(newMessages);

    // call langchain API to get AI reply
    try {
      const response = await chat()?.invoke(inp);
      console.log("response gotten");
      if(response == null){
        throw new Error("response is null");
      }
      const aiReply = response.text.trim();
      setLangchainMessages([...newMessages, aiReply]);
      return flag;
    } catch (error) {
      console.error("Failed:", error);
      setLangchainMessages([...newMessages, "[ERROR] FAILED TO FETCH"]);
      return -flag;
    }
  };

  const handleEnvChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    console.log(key);
    setEnvVariables({
      ...envVariables,
      [key]: e.target.value
    });
  };

  const handleLoadEnvVariables = () => {
    try {
      const newEnvVariables = {
        REACT_APP_LLM_URL_BASE: process.env.REACT_APP_LLM_URL_BASE,
        REACT_APP_LLM_API_KEY: process.env.REACT_APP_LLM_API_KEY,
        REACT_APP_LLM_MODEL_NAME: process.env.REACT_APP_LLM_MODEL_NAME
      };
      setEnvVariables(newEnvVariables);
      localStorage.setItem("envVariables", JSON.stringify(newEnvVariables));
      alert("Loaded from .env");
    } catch (error) {
      alert("Failed to load from .env");
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
    setLangchainMessages([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) return;
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleToggleFetch = () => {
    setUseFetch(!useFetch);
  };

  const handleToggleLangchain = () => {
    setUseLangchain(!useLangchain);
  };

  const getConfigUrlInputBgColor = (key:string) => {
    if(key === ENV_URL_STRING){
      return hoveringConfigUrlInput?hoveringBgColor:"rgba(0, 0, 0, 0)";
    }
    if(key === ENV_KEY_STRING){
      return hoveringConfigKeyInput?hoveringBgColor:"rgba(0, 0, 0, 0)";
    }
    if(key === ENV_MODEL_STRING){
      return hoveringConfigModelInput?hoveringBgColor:"rgba(0, 0, 0, 0)";
    }
    return "rgba(0, 0, 0, 0)";
  }

  const getConfigUrlInputShadow = (key:string) => {
    if(key === ENV_URL_STRING){
      return hoveringConfigUrlInput?hoveringShadow:"none";
    }
    if(key === ENV_KEY_STRING){
      return hoveringConfigKeyInput?hoveringShadow:"none";
    }
    if(key === ENV_MODEL_STRING){
      return hoveringConfigModelInput?hoveringShadow:"none";
    }
    return "none";
  }

  const handleMouseEnterConfigUrlInput = (key:string) => {
    if(key === ENV_URL_STRING){
      setHoveringConfigUrlInput(true);
    }
    if(key === ENV_KEY_STRING){
      setHoveringConfigKeyInput(true);
    }
    if(key === ENV_MODEL_STRING){
      setHoveringConfigModelInput(true);
    }
  }

  const handleMouseLeaveConfigUrlInput = (key:string) => {
    if(key === ENV_URL_STRING){
      setHoveringConfigUrlInput(false);
    }
    if(key === ENV_KEY_STRING){
      setHoveringConfigKeyInput(false);
    }
    if(key === ENV_MODEL_STRING){
      setHoveringConfigModelInput(false);
    }
  }
  
  // start-html
  return (
    <ConfigProvider theme={THEME}>
      {/* start-header */}
      <Header>
        <Flex align="center" justify="space-between">
          <Text
            style={{ fontSize: "24px", padding: "2%", fontWeight: "bold" }}
          >
            GistVis
          </Text>
          <div
            style={{ fontSize: "24px", padding: "2%", fontWeight: "bold" }}
          >
            <Button href="/" type="link">Home</Button>
            <Button href="/interactive" type="link">User study interface</Button>
            <Button href="/llm_setting" type="link">Setting</Button>
            <Button href="/playground" type="link">Playground</Button>
          </div>
        </Flex>
      </Header>
      {/* start-content */}
      <Content style={{ padding: "2%", margin: "0 auto" }}>
        {/* start-subtitle */}
        <Layout dir="verticle">
          {/* line1-fixed */}
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Test and Configuration for LLM
          </Text>
          {/* board: display the infomation of processes */}
          <Text style={{ fontSize: "16px", fontStyle: "italic" }}>
            {
              waiting?
              ("(Wait for the result...)"):
              (useFetch?
                (useLangchain?
                  // 1,1
                  (
                    chatState === + FETCH_FLAG + LANGCHIAN_FLAG ? "(Both Suceess)":
                    chatState === - FETCH_FLAG - LANGCHIAN_FLAG ? "(Both Failed)":
                    chatState === + FETCH_FLAG - LANGCHIAN_FLAG ? "(Fetch ✔, Langchain ✘)":
                    chatState === + FETCH_FLAG - LANGCHIAN_FLAG ? "(Fetch ✘, Langchain ✔)":
                    "ready"//first time
                  ):
                  // 1,0
                  (
                    chatState === + FETCH_FLAG ? "(Fetch Suceess)":
                    chatState === - FETCH_FLAG ? "(Fetch Failed)":
                    "ready"//first time
                  )
                ):
                (useLangchain?
                  // 0,1
                  (
                    chatState === + LANGCHIAN_FLAG ? "(Langchain Suceess)":
                    chatState === - LANGCHIAN_FLAG ? "(Langchain Failed)":
                    "ready"//first time
                  ):
                  // 0,0
                  (
                    "both closed"
                  )
                )
              )
            }
          </Text>
          <Divider style={{ margin: "0 0 0 0" }} />
        </Layout>
        {/* end-subtitle */}
        {/* start-chat-box */}
        {/* 2 chat windows in a row*/}
        <Flex style={{ justifyContent: "space-between",gap: "20px", paddingTop: "25px" }}>
          {/* fetch-window */}
          <Layout style={{ width: "45%", gap: "10px" }}>
            <Button
              style={{backgroundColor: `${useFetch?"#4caf50":"#aaa"}`}}
              onClick={handleToggleFetch}
            >
              {useFetch?"Chat using Fetch":"Chat using Fetch (Closed)"}
            </Button>
            <Text style={{textAlign:"center"}}>
              Check API Available
            </Text>
            <Content
              style={{
                padding: "12px 12px 20px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                height: "300px",
                maxHeight:"300px",
                overflowY: "scroll",
              }}
              className="hide-scrollbar"
            >
              {messages.map((msg, index) => (
                <Content
                  key={index}
                  style={{backgroundColor: `${msg.includes("[ERROR]")?"#fbb":"#e1f5fe"}`, borderRadius: "5px", margin: "10px", padding: "5px"}}
                >
                  {msg}
                </Content>
              ))}
            </Content>
          </Layout>
          {/* langchain-window */}
          <Layout style={{ width: "45%", gap: "10px"}}>
            <Button
              style={{backgroundColor: `${useLangchain?"#4caf50":"#aaa"}`}}
              onClick={handleToggleLangchain}
            >
              {useLangchain?"Chat using Langchain":"Chat using Langchain (Closed)"}
            </Button>
            <Text style={{textAlign:"center"}}>
            Check Langchain Supportable
            </Text>
            <Content
              style={{
                padding: "12px 12px 20px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                height: "300px",
                maxHeight:"300px",
                overflowY: "scroll",
              }}
              className="hide-scrollbar"
            >
              {langchainMessages.map((msg, index) => (
                <Content
                  key={index}
                  style={{backgroundColor: `${msg.includes("[ERROR]")?"#fbb":"#e1f5fe"}`, borderRadius: "5px", margin: "10px", padding: "5px"}}
                >
                  {msg}
                </Content>
              ))}
            </Content>
          </Layout>
        </Flex>
        {/* end-chat-box */}
        {/* start-config-page-entry */}
        <Layout style={{
          width: "100%",
          gap: "10px",
          paddingTop: "25px",
          textAlign: "center",
          alignItems: "center"
        }}>
          <Button
            style={{
              marginTop: "20px",
              width: "200px",
              display: "inline-block"
            }}
            onClick={() => { setModifyingConfig(true) }}
          >
            Config Setting
          </Button>
          <Text
            style={{
              fontSize: "17px",
              fontStyle: "italic",
              marginTop: "10px",
              display: "inline-block",
              color: "#555"
            }}
          >
            You can change the configuration of the LLM model here.
            <br />
            Default values are loaded from .env file.
            <br />
            The configuration will be saved in local storage.
            <br />
            Any changes will be applied immediately.
            <br />
            You can also load the configuration from .env file manually.
          </Text>
        </Layout>
        {/* end-config-page-entry */}
        {/* start-envconf-setting-page */}
          <Content
            style={{
              position: "fixed",
              left: "0",
              top: "0",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: modifyingConfig ? "block" : "none",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              zIndex: 1,
            }}
            onClick={()=>{setModifyingConfig(false)}}
          >
            <Layout
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                left: "50%",
                top: "5%",
                transform: "translate(-50%, 0)",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <Text 
                style={{ fontSize: "22px", fontWeight: "bold", margin: "10px", cursor: "pointer", alignContent: "center",color: "#fff" }}
              >
                ENV CONFIGURATION
              </Text>
              <Text 
                style={{
                  textAlign: "center",
                  fontSize: "17px",
                  fontStyle: "italic",
                  marginTop: "10px",
                  display: "inline-block",
                  color: "#ddd"
                }}
              >
                  Press <span style={{fontWeight:"bold"}}>anywhere</span> to close the configuration setting.
                  <br /><br />
                  Load from .env if you are first time to use this page.
                  <br />
                  Your modifications will be saved in local storage and load automatically next time.
                  <br />
                  Any changes will be applied immediately.
                  <br /><br /><br />
              </Text>
              <Tooltip 
                title={
                  <div style={{ lineHeight: 1.5 }}>
                    Reset the configuration to the default values from .env.
                  </div>
                }
                overlayStyle={{ fontSize: "14px", color: "blue" }}
              >
                <Button 
                  onMouseEnter={()=>{setHoveringConfigLoadButton(true)}}
                  onMouseLeave={()=>{setHoveringConfigLoadButton(false)}}
                  onClick={(e) => {
                    handleLoadEnvVariables();
                    e.stopPropagation();
                  }}
                  style={{
                    margin: "10px",
                    alignContent: "center",
                    border: "none",
                    cursor: "pointer",
                    color: "#ddd",
                    backgroundColor: `${hoveringConfigLoadButton?hoveringBgColor:"rgba(0, 0, 0, 0)"}`,
                    boxShadow: `${hoveringConfigLoadButton?hoveringShadow:"none"}`,
                  }}
                >
                  <span style={{textDecoration:"underline"}}>Click me to load configuration parameters from .env manually</span>
                </Button>
              </Tooltip>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "#ddd",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                <br />
                Customize the configuration of the LLM model here.
              </Text>
              {/* print env */}
              {Object.keys(envVariables).map((key) => (
                <div key={key} className="env-variable">
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "17px",
                      fontWeight: "bold",
                      color: "#ddd",
                      display: "inline-block",
                      margin: "10px",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                      position: "relative",
                    }}
                  >
                    <br />
                    Enter Your {key === ENV_URL_STRING ? 'Base Url (without the suffix /chat/completions)' : key === ENV_MODEL_STRING ? 'Model Name' : key === ENV_KEY_STRING ? 'Api Key (without the prefix Bearer)' : key} here
                  </Text>
                  <Input
                    onMouseEnter={()=>{handleMouseEnterConfigUrlInput(key)}}
                    onMouseLeave={()=>{handleMouseLeaveConfigUrlInput(key)}}
                    type="text"
                    value={envVariables[key as keyof typeof envVariables] ?? ""}
                    onChange={(e) => handleEnvChange(e, key)}
                    style={{
                      width: "80vw",
                      textAlign: "center",
                      border: "none",
                      color: "#ddd",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                      position: "relative",
                      backgroundColor: getConfigUrlInputBgColor(key),
                      boxShadow: getConfigUrlInputShadow(key),
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ))}
            </Layout>
        </Content>
        {/* end-envconf-setting-page */}
        {/* start-fixed-input-container */}
        <Content style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          right: "20px",
          border: "1px solid #ccc",
          width: "calc(100% - 40px)",
          minHeight: "80px",
          borderRadius: "10px",
        }}>
          {/* input-message-box */}
          <TextArea
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your word..."
            style={{
              width: "100%",
              padding: "5px 10px",
              border: "none",
              backgroundColor:"transparent",
              resize: "none",
            }}
            className="hide-scrollbar"
          />
          {/* input-message-container-buttons */}
          <Flex
            justify="space-between"
            style={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              width: "80px",
            }}
          >
            <div></div> {/* left-area (empty) */}
            <Flex
              className="button-container"
              style={{
                gap: "10px",
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
            >
              <Tooltip
                title={
                  <div style={{ lineHeight: 1.5 }}>
                    Send the message to the AI model.
                    <br />
                    You can also press Enter to send the message.
                  </div>
                }
                overlayStyle={{ fontSize: "14px", color: "blue" }}
              >
                <Button
                  onClick={handleSendMessage}
                  style={{
                    fontSize: "15px",
                    border: "none",
                  }}
                >
                  ▷
                </Button>
              </Tooltip>
              <Tooltip
                title={
                  <div style={{ lineHeight: 1.5 }}>
                    Clear Messages
                  </div>
                }
                overlayStyle={{ fontSize: "14px", color: "blue" }}
              >
                <Button
                  onClick={handleClearMessages}
                  style={{
                    fontSize: "15px",
                    border: "none",
                  }}
                >
                  X
                </Button>
              </Tooltip>
            </Flex>
          </Flex>
        </Content>
        {/* end-fixed-input-container */}
      </Content>
    </ConfigProvider>
  );
  // end-html
};

export default LLMConfigurationPage;
