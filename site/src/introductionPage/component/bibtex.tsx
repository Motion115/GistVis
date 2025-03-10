import React from 'react';
import { Card, Typography, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { bibtexCardContainer, bibtexCardHeader, bibtexCardExtraButton, bibtexPreStyle } from '../IntroPageCSS';

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
        <Title level={4} style={bibtexCardHeader}>
          Citation
        </Title>
      }
      bordered={false}
      style={bibtexCardContainer}
      extra={
        <Button icon={<CopyOutlined />} onClick={copyToClipboard} style={bibtexCardExtraButton}>
          Copy
        </Button>
      }
    >
      <pre style={bibtexPreStyle} dangerouslySetInnerHTML={{ __html: bibtex }} />
    </Card>
  );
};

export default BibtexCard;
