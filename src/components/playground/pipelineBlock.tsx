import React, {useState} from 'react'
import { ConfigProvider, Layout, Typography, Button, Flex, Divider,Tooltip, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import THEME from "@src/style/theme";

const { Header, Content } = Layout;
const { Text } = Typography;

type PipelineBlockProps = {
    blockTitle?: string;
    inputPlaceholder?: string;

    // input process output
    inputText: string;
    setInputText: (text: string) => void;
    run: () => any;
    outputText?: string;
    setOutputText?: (text: string) => void;

    // last stage
    lastStageOutput?: string;

    // env input
    envInputText?: string;

    // customize result representation
    // when provided, outputText will be ignored
    resultRenderer?: () => React.ReactNode;

    // style
    autoSize?: { minRows: number, maxRows: number };
}

const startButtonColor = "rgb(8, 123, 0)";

const PipelineBlock: React.FC<PipelineBlockProps> = ({ 
    blockTitle, 
    run, 
    inputPlaceholder,
    inputText,
    setInputText,
    outputText,
    setOutputText,
    lastStageOutput,
    envInputText,
    resultRenderer,
    autoSize
 }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const autoSizeParams = autoSize || { minRows: 3, maxRows: 40 };
    return (
        <ConfigProvider theme={THEME}>
        <Layout 
            dir="verticle"
            style={{ padding: "2%", margin: "0 auto", gap: "1%" }}
        >
            <Flex style={{gap: "10px"}} justify="space-between">
                <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {blockTitle? blockTitle : "Pipeline Block"}
                </Text>
                <Text style={{ fontSize: "16px"}}>
                    {isProcessing ? "(processing...)" : ""}
                </Text>
                <div></div>
            </Flex>
            <TextArea
                placeholder={inputPlaceholder}
                autoSize={autoSizeParams}
                style={{ width: "100%", marginBottom: "1%" }}
                value={inputText}
                onChange={(e)=>{setInputText(e.target.value)}}
            />
            <Flex justify="space-between">
                <Flex style={{gap: "10px"}}>
                    <Button 
                        type="primary" 
                        onClick={async () => {
                            setIsProcessing(true);
                            if(setOutputText){
                                try {
                                    const result = await run();
                                    setOutputText(JSON.stringify(result, null, 2));
                                } catch (error) {
                                    setOutputText("Failed to run the pipeline block: " + error);
                                }
                            }else{
                                try {
                                    await run();
                                } catch (error) {
                                    console.error("Failed to run the pipeline block: ", error);
                                }
                            }
                            setIsProcessing(false);
                        }}
                        style={{ backgroundColor: startButtonColor }}
                    >
                        Run
                    </Button>
                    <Button
                        onClick={() => {
                            try {
                                setInputText(JSON.stringify(JSON.parse(inputText), null, 2));
                            } catch (error) {}
                        }}
                    >
                        Beauty
                    </Button>
                </Flex>
                <Flex style={{gap: "10px"}}>
                    {envInputText && (<Tooltip title="Use the input from the environment">
                        <Button onClick={
                            () => {
                                try {
                                    setInputText(envInputText || "");
                                } catch (error) {
                                    console.error("Failed to set input from env: ", error);
                                }
                            }
                        }>
                            From Env
                        </Button>
                    </Tooltip>)}
                    {!(lastStageOutput===undefined) && (<Tooltip title="Use the output from the last stage">
                        <Button onClick={
                            () => {
                                try {
                                    setInputText(lastStageOutput);
                                } catch (error) {
                                    console.error("Failed to set input from last stage: ", error);
                                }
                            }
                        }>
                            From Last
                        </Button>
                    </Tooltip>)}    
                </Flex>
            </Flex>
            <Divider style={{ margin: "10px 0 5px 0" }} />
            <Text style={{ fontSize: "20px", fontStyle: "bold" }}>
                Output
            </Text>
            {resultRenderer?resultRenderer():(
                <TextArea
                    autoSize={autoSizeParams}
                    style={{
                        fontSize: "16px",
                        fontStyle: "italic",
                        whiteSpace: "pre-wrap"
                    }}
                    placeholder='(none)'
                    value={outputText}
                />
            )}
            <Divider style={{ margin: "15px 0 10px 0" }} />
        </Layout>
        </ConfigProvider>
    )
}

export default PipelineBlock;