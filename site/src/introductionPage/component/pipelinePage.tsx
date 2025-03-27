import React, { useState } from 'react';
import { Image, Flex, Table, Tag, Button, Modal, Tooltip, Typography } from 'antd';
import { DataSpec, InsightType, UnitSegmentSpec } from 'gist-wsv';
import { annotatorData, discovererData, extractorData } from '../introData';
import designSpaceImage from '../../../static/design-space.jpg';
import { GistvisVisualizer } from 'gist-wsv';
import { gistKB } from '../../modules/llm/visKB';
import DisplayPrompt from './displayPrompt';

const { Paragraph } = Typography;

const insightColorMap: Record<InsightType, string> = {
  comparison: 'blue',
  trend: 'green',
  rank: 'purple',
  proportion: 'gold',
  extreme: 'red',
  value: 'cyan',
  noType: 'gray',
};

// Define nested row type for the nested table, note that dataSpec is of type DataSpec[]
interface NestedRow extends UnitSegmentSpec {
  dataSpec: DataSpec[];
}

const ColoredDivider = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '0.5rem',
        backgroundColor: '#e6f4ff',
        margin: '5px 0',
        borderRadius: '5px',
      }}
    />
  );
};

// Component to display DataSpec in a popup modal using Antd components
const DataSpecDisplay: React.FC<{ dataSpec: DataSpec[] }> = ({ dataSpec }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Center the button and control its width */}
      <Button onClick={showModal}>See Data</Button>
      <Modal title="DataSpec Details" open={visible} onCancel={handleCancel} footer={null}>
        {/* Set a max-width for the DataSpec table to control its size */}
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Table
            columns={[
              {
                title: 'space',
                dataIndex: 'space',
                key: 'space',
                width: 150,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
              {
                title: 'breakdown',
                dataIndex: 'breakdown',
                key: 'breakdown',
                width: 150,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
              {
                title: 'feature',
                dataIndex: 'feature',
                key: 'feature',
                width: 150,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
              {
                title: 'value',
                dataIndex: 'value',
                key: 'value',
                width: 100,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
            ]}
            dataSource={dataSpec}
            pagination={false}
            size="small"
            rowKey={(_, index = 0) => index.toString()}
          />
        </div>
      </Modal>
    </div>
  );
};

// Define the nested columns for the Specification table
const nestedColumns = [
  {
    title: 'Insight Type',
    dataIndex: 'insightType',
    key: 'insightType',
    width: 100,
    onCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (text: InsightType) => {
      return text === 'noType' ? (
        <Tag color={insightColorMap.noType}>{text}</Tag>
      ) : (
        <Tooltip placement="top" title={gistKB[text].definition}>
          <Tag color={insightColorMap[text] ?? insightColorMap.noType}>{text}</Tag>
        </Tooltip>
      );
    },
  },
  // {
  //   title: 'Segment Index',
  //   dataIndex: 'segmentIdx',
  //   key: 'segmentIdx',
  //   onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
  //   render: (text: number) => text,
  // },
  {
    title: 'Context',
    dataIndex: 'context',
    key: 'context',
    width: 250,
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (text: string) => <p style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</p>,
  },
  {
    title: 'inSituPosition',
    dataIndex: 'inSituPosition',
    key: 'inSituPosition',
    width: 100,
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (inSituPosition: string[]) =>
      Array.isArray(inSituPosition) && inSituPosition.length > 0 ? inSituPosition.join(', ') : 'N/A',
  },
  {
    title: 'Attribute',
    dataIndex: 'attribute',
    key: 'attribute',
    width: 100,
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (attribute: string) => (attribute ? attribute : '-'),
  },
  {
    title: 'DataSpec',
    dataIndex: 'dataSpec',
    key: 'dataSpec',
    width: 140,
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (dataSpec: DataSpec[]) => {
      return <DataSpecDisplay dataSpec={dataSpec} />;
    },
  },
];

// Define the extractorColumns for the main table
const extractorColumns = [
  {
    title: 'PID',
    dataIndex: 'id',
    key: 'id',
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
  },
  {
    title: 'Specification',
    dataIndex: 'unitSegmentSpec',
    key: 'unitSegmentSpec',
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    // Using record to get access to both unitSegmentSpec and dataSpec
    render: (unitSegmentSpec: UnitSegmentSpec, record: { dataSpec: DataSpec[] }) => {
      // Merge dataSpec into the unitSegmentSpec object for nested table display
      const nestedRow: NestedRow = { ...unitSegmentSpec, dataSpec: record.dataSpec };
      return (
        <Table<NestedRow>
          tableLayout="fixed"
          columns={nestedColumns}
          dataSource={[nestedRow]}
          pagination={false}
          size="small"
          rowKey="segmentIdx"
        />
      );
    },
  },
];

const columns = [
  {
    title: 'PID',
    dataIndex: 'id',
    key: 'id',
    onHeaderCell: () => ({
      style: { textAlign: 'center' as const },
    }),
  },
  {
    title: 'Specification',
    dataIndex: 'unitSegmentSpec',
    key: 'unitSegmentSpec',
    onHeaderCell: () => ({
      style: { textAlign: 'center' as const },
    }),
    render: (unitSegmentSpec: UnitSegmentSpec[]) => (
      <Table
        tableLayout="fixed"
        columns={[
          {
            title: 'Insight Type',
            dataIndex: 'insightType',
            key: 'insightType',
            width: 150,
            onCell: () => ({ style: { textAlign: 'center' as const } }),
            render: (text: InsightType) => {
              return text === 'noType' ? (
                <Tag color={insightColorMap.noType}>{text}</Tag>
              ) : (
                <Tooltip placement="top" title={gistKB[text].definition}>
                  <Tag color={insightColorMap[text] ?? insightColorMap.noType}>{text}</Tag>
                </Tooltip>
              );
            },
          },
          // {
          //   title: 'Segment Index',
          //   dataIndex: 'segmentIdx',
          //   key: 'segmentIdx',
          //   width: 100,
          //   onHeaderCell: () => ({ style: { textAlign: 'center' } }),
          //   render: (text: number) => text,
          // },
          {
            title: 'Context',
            dataIndex: 'context',
            key: 'context',
            onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
            render: (text: string) => <p style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</p>,
          },
        ]}
        dataSource={[unitSegmentSpec]}
        pagination={false}
        size="small"
        rowKey="id"
      />
    ),
  },
];

const PipelinePage: React.FC<{ stage: number }> = ({ stage }) => {
  switch (stage) {
    case 0:
      return (
        <>
          <div
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              width: '80%',
              margin: 'auto',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#555',
                fontWeight: 'lighter',
                textAlign: 'justify',
                marginBottom: '10px',
              }}
            >
              The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%. The
              sales of BYD have been steadily increasing over the past 5 years. Specifically, the sales of BYD were 10k,
              5k, 30k, 80k, and 50k respectively. The top seller for BYD, the Qin series, could do a maximum range of
              2000 kilometers, making it the longest-ranged plug-in hybrid you can buy on the market.
            </p>
            <p
              style={{
                fontSize: '10px',
                lineHeight: '1.6',
                color: '#555',
                fontWeight: 'lighter',
                textAlign: 'justify',
                marginBottom: '10px',
              }}
            >
              * The text is written for demonstration purposes and does not guarantee factuality.{' '}
            </p>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <Flex vertical>
            <Flex>
              <h2 style={{ fontSize: '36px', margin: '0' }}>Discoverer</h2>
              <DisplayPrompt module="Discoverer" />
            </Flex>
            <ColoredDivider />
            <Paragraph>
              <blockquote>
                This module segments paragraphs into unit segments, which are the smallest units of text that convey a
                data insight. It uses large language models (LLMs) to identify these segments and prepare the document
                for further processing.
              </blockquote>
            </Paragraph>
          </Flex>
          <Table
            columns={columns}
            dataSource={discovererData[0].paragraphContent}
            pagination={false}
            rowKey="paragraphIdx"
          />
        </>
      );
    case 2:
      return (
        <>
          <Flex vertical>
            <Flex>
              <h2 style={{ fontSize: '36px', margin: '0' }}>Annotator</h2>
              <DisplayPrompt module="Annotator" />
            </Flex>
            <ColoredDivider />

            <Paragraph>
              <blockquote>
                Annotator assigns a specific data fact type—like comparison, trend, or extreme—to each text segment.
                Starting from a generic "noType" label provided by Discoverer, it first checks if the segment matches a
                particular data type and then refines that classification to ensure the most accurate label, which in
                turn guides the subsequent data extraction and visualization steps.
              </blockquote>
            </Paragraph>
          </Flex>
          <Table
            columns={columns}
            dataSource={annotatorData[0].paragraphContent}
            pagination={false}
            rowKey="paragraphIdx"
          />
        </>
      );
    case 3:
      return (
        <>
          <Flex vertical>
            <Flex>
              <h2 style={{ fontSize: '36px', margin: '0' }}>Extractor</h2>
              <DisplayPrompt module="Extractor" />
            </Flex>
            <ColoredDivider />
            <Paragraph>
              <blockquote>
                The Extractor module in GistVis transforms annotated text segments into structured data, converting
                narrative insights into a standardized data fact specification. It interprets the annotated segments
                produced by the previous modules and extracts key numerical values, categories, and attributes that form
                the backbone of the subsequent word-scale visualizations.
              </blockquote>
            </Paragraph>
          </Flex>
          <div>
            <Table
              columns={extractorColumns}
              dataSource={extractorData[0].paragraphContent.map((item) => ({
                ...item,
                dataSpec: item.dataSpec || [],
              }))}
              pagination={false}
              rowKey="paragraphIdx"
              scroll={{ x: 650 }}
            />
          </div>
        </>
      );
    case 4:
      return (
        <>
          <Flex vertical style={{ width: '90%', height: '90%', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', margin: '0' }}>Visualizer</h2>
            <ColoredDivider />

            <Paragraph>
              <blockquote>
                The visualizer leverages various data fact types—such as percentages, averages, min/max values, and
                trends—and maps each one to a suitable graphical representation, as demonstrated in the figure. By
                seamlessly blending text-based insights with intuitive visuals like bar charts, line graphs, and
                highlight elements, it enables users to quickly identify key patterns, compare differences, and track
                changes over time. This approach effectively utilizes the data structure generated from the original
                text through LLM processing, converting it into interactive, word-scale visual components that enhance
                the readability of the entire article.
              </blockquote>
            </Paragraph>
          </Flex>
          <div style={{ width: '80%', height: '80%', margin: '0 auto' }}>
            <Image src={designSpaceImage} alt="designSpaceImage" preview={false} />
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              width: '80%',
              margin: 'auto',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#555',
                fontWeight: 'lighter',
                textAlign: 'justify',
                marginBottom: '10px',
              }}
            >
              <GistvisVisualizer datafactSpec={extractorData} />
            </p>
          </div>
        </>
      );
    default:
      return <div>Invalid stage</div>;
  }
};

export default PipelinePage;
