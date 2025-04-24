import React, { CSSProperties, useEffect } from 'react';
import { Typography, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { bibtexPreStyle } from '../IntroPageCSS';
import Prism from 'prismjs';
import 'prismjs-bibtex';
import 'prismjs/themes/prism.css';

const BibtexCard: React.FC<{ style?: CSSProperties }> = ({ style }) => {
  const bibtex = `@inproceedings{10.1145/3706598.3713881,
author = {Zou, Ruishi and Tang, Yinqi and Chen, Jingzhu and Lu, Siyu and Lu, Yan and Yang, Yingfan and Ye, Chen},
title = {GistVis: Automatic Generation of Word-scale Visualizations from Data-rich Documents},
year = {2025},
isbn = {9798400713941},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3706598.3713881},
doi = {10.1145/3706598.3713881},
booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
articleno = {679},
numpages = {18},
keywords = {Word-scale visualization, Automatic visualization, Natural language processing, Interactive article, Data document},
series = {CHI '25}
}`;

  const copyToClipboard = async () => {
    try {
      const plainBibtex = bibtex.replace(/<[^>]*>/g, '');
      await navigator.clipboard.writeText(plainBibtex);
      message.success('BibTeX copied to clipboard!');
    } catch (err) {
      message.error('Copy failed, please copy manually.');
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div style={{ ...style, position: 'relative', padding: '1rem 0 1rem 0', margin: 'auto' }}>
      {/* <pre style={bibtexPreStyle} dangerouslySetInnerHTML={{ __html: bibtex }} /> */}
      <pre style={bibtexPreStyle} className="language-bib">
        <code className="language-bib">{bibtex}</code>
      </pre>
      <Button
        icon={<CopyOutlined />}
        onClick={copyToClipboard}
        style={{
          position: 'absolute',
          top: '25px',
          right: '15px',
        }}
      >
        Copy
      </Button>
    </div>
  );
};

export default BibtexCard;
