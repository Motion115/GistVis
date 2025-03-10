import React from 'react';
import { Card, Typography, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

const { Title } = Typography;

const BibtexCard: React.FC = () => {
  const bibtex = `@article{zou2025gistvis,
    <span style="color: #D19966;">title</span> = {<span style="color: #95C379;">GistVis: Automatic Generation of Word-scale Visualizations from Data-rich Documents</span>},
    <span style="color: #D19966;">author</span> = {Zou, Ruishi and Tang, Yinqi and Chen, Jingzhu and Lu, Siyu and Lu, Yan and Yang, Yingfan and Ye, Chen},
    <span style="color: #D19966;">journal</span> = {arXiv preprint arXiv:2502.03784},
    <span style="color: #D19966;">year</span> = {2025}
};`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      message.success('BibTeX copied to clipboard!');
    } catch (err) {
      message.error('Copy failed, please copy manually.');
    }
  };

  return (
    <Card
      title={
        <Title level={4} style={{ margin: 0, color: '#007acc' }}>
          Citation
        </Title>
      }
      bordered={false}
      style={{
        width: '100%',
        maxWidth: 1100,
        margin: '20px auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
      }}
      extra={
        <Button
          icon={<CopyOutlined />}
          onClick={copyToClipboard}
          style={{
            borderRadius: '6px',
            backgroundColor: '#007acc',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          Copy
        </Button>
      }
    >
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          background: '#282C34',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '15px',
          fontFamily: 'Consolas, "Courier New", monospace',
          color: '#AB9EAB',
          margin: 0,
        }}
        dangerouslySetInnerHTML={{ __html: bibtex }}
      />
    </Card>
  );
};

export default BibtexCard;
