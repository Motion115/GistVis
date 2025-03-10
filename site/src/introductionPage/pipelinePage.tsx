import React from 'react';
import { Image, Flex, Table, Tag, Button, Modal, Tooltip } from 'antd';
import { DataSpec, GistvisSpec, InsightType, UnitSegmentSpec, VisInsightType } from '../modules/visualizer/types';
import { annotatorData, discovererData, extractorData } from './introData';
import designSpaceImage from '../../static/design-space.jpg';
import ArtcleProcess from '../modules/visualizer/renderer/renderer';
import { gistKB } from '../modules/llm/visKB';

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

// Component to display DataSpec in a popup modal using Antd components
const DataSpecDisplay: React.FC<{ dataSpec: DataSpec[] }> = ({ dataSpec }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Center the button and control its width */}
      <Button
        type="primary"
        onClick={showModal}
        style={{ width: '120px', marginBottom: '20px' }} // Adjust button width
      >
        Show DataSpec
      </Button>
      <Modal title="DataSpec Details" open={visible} onCancel={handleCancel} footer={null}>
        {/* Set a max-width for the DataSpec table to control its size */}
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Table
            columns={[
              {
                title: 'Category Key',
                dataIndex: 'categoryKey',
                key: 'categoryKey',
                width: 150,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
              {
                title: 'Category Value',
                dataIndex: 'categoryValue',
                key: 'categoryValue',
                width: 150,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
              {
                title: 'Value Key',
                dataIndex: 'valueKey',
                key: 'valueKey',
                width: 150,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
              {
                title: 'Value Value',
                dataIndex: 'valueValue',
                key: 'valueValue',
                width: 100,
                onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
              },
            ]}
            dataSource={dataSpec}
            pagination={false}
            size="small"
            rowKey={(_, index) => index.toString()}
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
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
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
  {
    title: 'Segment Index',
    dataIndex: 'segmentIdx',
    key: 'segmentIdx',
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (text: number) => text,
  },
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
    key: 'dataSpec',
    width: 140,
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    render: (_: any, record: any) => {
      // record contains dataSpec passed from the outer render
      return <DataSpecDisplay dataSpec={record.dataSpec} />;
    },
  },
];

// Define the extractorColumns for the main table
const extractorColumns = [
  {
    title: 'Paragraph Segment Index',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
  },
  {
    title: 'Specification',
    dataIndex: 'unitSegmentSpec',
    key: 'unitSegmentSpec',
    onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
    // Using record to get access to both unitSegmentSpec and dataSpec
    render: (unitSegmentSpec: UnitSegmentSpec, record: any) => {
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
    title: 'Paragraph Segment Index',
    dataIndex: 'id',
    key: 'id',
    width: 200,
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
            width: 100,
            onHeaderCell: () => ({ style: { textAlign: 'center' as const } }),
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
          {
            title: 'Segment Index',
            dataIndex: 'segmentIdx',
            key: 'segmentIdx',
            width: 100,
            onHeaderCell: () => ({ style: { textAlign: 'center' } }),
            render: (text: number) => text,
          },
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
          <h2
            style={{
              fontSize: '36px',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Input
          </h2>
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
          </div>
        </>
      );
    case 1:
      return (
        <>
          <Table
            columns={columns}
            dataSource={discovererData[0].paragraphContent}
            pagination={false}
            rowKey="paragraphIdx"
            style={{ width: '800px', marginTop: '10px' }}
          />
          <Flex vertical style={{ marginLeft: '50px', width: '340px' }}>
            <h2 style={{ fontSize: '36px', margin: '0' }}>Discoverer</h2>
            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#8FD4E0',
                margin: '5px 0',
                borderRadius: '5px',
              }}
            />
            <p style={{ fontSize: '15px', color: '#8E8D8D' }}>
              This module segments paragraphs into unit segments, which are the smallest units of text that convey a
              data insight. It uses large language models (LLMs) to identify these segments and prepare the document for
              further processing.
            </p>
          </Flex>
        </>
      );
    case 2:
      return (
        <>
          <Flex vertical style={{ marginRight: '50px', width: '340px' }}>
            <h2 style={{ fontSize: '36px', margin: '0' }}>Annotator</h2>
            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#8FD4E0',
                margin: '5px 0',
                borderRadius: '5px',
              }}
            />
            <p style={{ fontSize: '15px', color: '#8E8D8D' }}>
              Annotator assigns a specific data fact type—like comparison, trend, or extreme—to each text segment.
              Starting from a generic "noType" label provided by Discoverer, it first checks if the segment matches a
              particular data type and then refines that classification to ensure the most accurate label, which in turn
              guides the subsequent data extraction and visualization steps.
            </p>
          </Flex>
          <Table
            columns={columns}
            dataSource={annotatorData[0].paragraphContent}
            pagination={false}
            rowKey="paragraphIdx"
            style={{ width: '800px', marginTop: '10px' }}
          />
        </>
      );
    case 3:
      return (
        <>
          <Table
            columns={extractorColumns}
            dataSource={extractorData[0].paragraphContent}
            pagination={false}
            rowKey="paragraphIdx"
            style={{ width: '1200px', marginTop: '10px' }}
          />
          <Flex vertical style={{ marginLeft: '50px', width: '340px' }}>
            <h2 style={{ fontSize: '36px', margin: '0' }}>Extractor</h2>
            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#8FD4E0',
                margin: '5px 0',
                borderRadius: '5px',
              }}
            />
            <p style={{ fontSize: '15px', color: '#8E8D8D' }}>
              The Extractor module in GistVis transforms annotated text segments into structured data, converting
              narrative insights into a standardized data fact specification. It interprets the annotated segments
              produced by the previous modules and extracts key numerical values, categories, and attributes that form
              the backbone of the subsequent word-scale visualizations.
            </p>
          </Flex>
        </>
      );
    case 4:
      return (
        <>
          <Flex vertical style={{ width: '90%', height: '90%', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', margin: '0' }}>Extractor</h2>
            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#8FD4E0',
                margin: '5px 0',
                borderRadius: '5px',
              }}
            />
            <p style={{ fontSize: '15px', color: '#8E8D8D' }}>
              The Extractor module in GistVis transforms annotated text segments into structured data, converting
              narrative insights into a standardized data fact specification. It interprets the annotated segments
              produced by the previous modules and extracts key numerical values, categories, and attributes that form
              the backbone of the subsequent word-scale visualizations.
            </p>
          </Flex>
          <div style={{ width: '80%', height: '80%', margin: '0 auto' }}>
            <Image src={designSpaceImage} alt="designSpaceImage"></Image>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <h2
            style={{
              fontSize: '36px',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Input
          </h2>
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
              <ArtcleProcess llmarticle={extractorData} />
            </p>
          </div>
        </>
      );
    default:
      return <div>Invalid stage</div>;
  }
};

export default PipelinePage;
