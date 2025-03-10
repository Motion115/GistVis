import { Button, Flex, Modal } from 'antd';
import { useState } from 'react';
import {
  generateFewShotExample,
  getTypeCheckerSystemInstruction,
  gistKB,
  SystemInstruction,
} from '../../modules/llm/visKB';

const DisplayPrompt: React.FC<{ module: 'Discoverer' | 'Annotator' | 'Extractor' }> = ({ module }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  const typeCandidates = Object.keys(gistKB).join(', ');
  const paragraph = `The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%. The
                sales of BYD have been steadily increasing over the past 5 years. Specifically, the sales of BYD were 10k,
                5k, 30k, 80k, and 50k respectively. The top seller for BYD, the Qin series, could do a maximum range of
                2000 kilometers, making it the longest-ranged plug-in hybrid you can buy on the market.`;

  const discovererPrompt = (
    <div>
      <p>
        Please separate the user-provided paragraphs into sections that group similar data and content (data insight),
        aiming for the shortest feasible lengths.
      </p>
      <p>
        Each section should limit its visual elements to a maximum of one single type:{' '}
        <span style={{ color: '#ff4500', fontWeight: 'bold' }}>{typeCandidates}</span>. The objective is for the user to
        generate corresponding charts based on your output.
      </p>
      <p>
        The sections in your response should contain complete original text provided by user without any modification.
        Preserve original punctuation marks and line breaks.
      </p>
      <p>Please enclose the sections in &lt;seciton&gt;&lt;/seciton&gt; tags.</p>
      <p>
        <span style={{ color: '#1e90ff', fontWeight: 'bold' }}>{paragraph}</span>
      </p>
    </div>
  );

  const annotatorPrompt1 = (
    <>
      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== System Instruction ===</p>
      <p>{SystemInstruction}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold', margin: '0' }}>=== Type Checker System Instruction ===</p>
      <span style={{ color: '#1ABC9C', fontWeight: 'bold' }}>(5 candidate types/e.g. "proportion")</span>
      <p>{getTypeCheckerSystemInstruction('proportion')}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Definition of "proportion" ===</p>
      <p>{gistKB['proportion'].definition}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Few-Shot Example (2 examples, 1 variation) ===</p>
      <p>{generateFewShotExample('proportion', 2, 1, false)}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Format Instructions ===</p>
      <p>{`{formatInstructions}`}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Paragraph ===</p>
      <p style={{ color: '#1e90ff', fontWeight: 'bold' }}>
        The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%.
      </p>
    </>
  );

  const annotatorPrompt2 = (
    <>
      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== System Instruction ===</p>
      <p>{SystemInstruction}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Task Description ===</p>
      <p>
        You are given a text chunk with <span style={{ color: '#ff4500' }}>5</span> possible types. Your task is to
        choose <strong>only one</strong> most suitable type based on the following definitions. Return your chosen type
        as the output.
      </p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Candidate Types and Definitions ===</p>
      <p>{`{candidateTypesDefinition}`}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Format Instructions ===</p>
      <p>{'{formatInstructions}'}</p>

      <p style={{ color: '#1ABC9C', fontWeight: 'bold' }}>=== Paragraph ===</p>
      <p style={{ color: '#1e90ff', fontWeight: 'bold' }}>
        The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%.
      </p>
    </>
  );

  const annotatorPrompt = (
    <>
      <div
        style={{
          padding: '16px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '16px',
          backgroundColor: '#fff',
          margin: '0 auto',
          width: '50%',
        }}
      >
        <h3 style={{ marginTop: '5px', marginBottom: '8px', fontSize: '18px', color: '#333' }}>
          Step 1: Run Type Check
        </h3>
        {annotatorPrompt1}
      </div>
      <div
        style={{
          padding: '16px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '16px',
          backgroundColor: '#fff',
          margin: '0 auto',
          width: '50%',
        }}
      >
        <h3 style={{ marginTop: '5px', marginBottom: '8px', fontSize: '18px', color: '#333' }}>Step 2: Run Match</h3>
        <p style={{ margin: 0 }}>{annotatorPrompt2}</p>
      </div>
    </>
  );

  // Extractor 模块的 prompt
  const extractorPrompt = <p>{`Extractor prompt content here.`}</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="solid"
        color="cyan"
        onClick={showModal}
        style={{ margin: 'auto', marginLeft: '20px', marginBottom: '3px' }}
      >
        Prompt
      </Button>
      <Modal
        title="Prompt"
        open={visible}
        onCancel={handleCancel}
        footer={null}
        width={module === 'Annotator' ? 1200 : 800}
      >
        <Flex
          gap={20}
          style={{
            maxWidth: '100%',
            overflowX: 'auto',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {module === 'Discoverer' ? discovererPrompt : module === 'Annotator' ? annotatorPrompt : extractorPrompt}
        </Flex>
      </Modal>
    </div>
  );
};

export default DisplayPrompt;
