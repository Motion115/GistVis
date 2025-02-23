import React, { useState, useEffect } from 'react';
import THEME from '../../style/theme';
import { 
  Card, 
  Button, 
  Input, 
  Select, 
  Modal, 
  Space, 
  Typography,
  Form,
  ConfigProvider,
  Row
} from 'antd';
import {
  GistvisSpec,
  DataSpec,
  InsightType,
  Attribute
} from '../../modules/visualizer/types';

type FieldValue<T extends string> = T extends 'insightType' ? InsightType :
  T extends 'context' ? string :
  T extends 'attribute' ? Attribute | undefined :
  T extends 'inSituPosition' ? string[] | undefined :
  never;

const { TextArea } = Input;
const { Text } = Typography;
const { Item } = Form;

const ADD_TEXT = 'Add';
const DEL_TEXT = 'Del';

interface SpecEditorProps {
  spec: GistvisSpec;
  onSave: (updatedSpec: GistvisSpec) => void;
  stage?: number;
}

type StageContentType = {
  title: string;
  content: string | React.ReactNode;
  centered?: boolean;
  dataList?: boolean;
  json?: boolean;
  rawData?: DataSpec[];
  rawJson?: Record<string, unknown>;
};

export const SpecEditor: React.FC<SpecEditorProps> = ({ spec, onSave, stage = 0 }) => {
  const [editingSpec, setEditingSpec] = useState<GistvisSpec>(spec);
  const [isOutdated, setIsOutdated] = useState(false);
  const [originalSpec, setOriginalSpec] = useState<GistvisSpec>(spec);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditingSpec(spec);
    setOriginalSpec(spec);
    setIsOutdated(false);
  }, [spec]);

  const renderStageContent = (): StageContentType => {
    switch (stage) {
      case 1:
        return {
          title: 'Context',
          content: spec.unitSegmentSpec.context,
          centered: true
        };
      case 2:
        return {
          title: 'Type',
          content: '',
          json: true,
          rawJson: {
            type: spec.unitSegmentSpec.insightType,
            attribute: spec.unitSegmentSpec.attribute,
          }
        };
      case 3:
        return {
          title: 'Data Spec',
          content: '',
          dataList: true,
          rawData: spec.dataSpec || []
        };
      default:
        return {
          title: 'Spec',
          content: JSON.stringify(spec, null, 2),
          json: true
        };
    }
  };

  const renderContent = (stageContent: StageContentType) => {
    if (stageContent.dataList && stageContent.rawData) {
      return (
        <Space direction="vertical" style={{ width: '100%' }}>
          {stageContent.rawData.map((item, index) => (
            <Card key={index} size="small">
              <Text strong>{`#${index+1}`}</Text>
              <Text style={{ whiteSpace: 'pre-wrap' }}>
                {Object.keys(item).map(key => (
                  <div key={key}>
                    <Text type="secondary">{`${key} `}</Text>
                    <Text italic>{`${item[key as keyof typeof item]}\n`}</Text>
                  </div>
                ))}
              </Text>
            </Card>
          ))}
        </Space>
      );
    }

    if (stageContent.json && stageContent.rawJson) {
      const data = stageContent.rawJson;
      return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Card size="small">
              <Text style={{ whiteSpace: 'pre-wrap' }}>
                {Object.keys(data).map(key => (
                  data[key as keyof typeof data]?(
                    <div key={key}>
                      <Text type="secondary">{`${key} `}</Text>
                      <Text italic>{`${data[key as keyof typeof data]}\n`}</Text>
                    </div>
                  ):null
                ))}
              </Text>
            </Card>
        </Space>
      );
    }

    if (stageContent.json) {
      return (
        <Text italic style={{ whiteSpace: 'pre-wrap' }}>
          {stageContent.content}
        </Text>
      );
    }

    return (
      <Text 
        style={{ 
          textAlign: stageContent.centered ? 'center' : 'left',
          display: 'block',
          width: '100%'
        }}
      >
        {stageContent.content}
      </Text>
    );
  };

  const handleFieldChange = <T extends 'insightType' | 'context' | 'attribute' | 'inSituPosition'>(
    field: T,
    value: FieldValue<T>,
    parent?: 'unitSegmentSpec'
  ) => {
    setIsOutdated(true);
    setEditingSpec(prev => {
      if (parent === 'unitSegmentSpec') {
        if (field === 'insightType') {
          const insightTypeValue = value as InsightType;
          if (insightTypeValue === 'extreme' || insightTypeValue === 'trend') {
            return {
              ...prev,
              unitSegmentSpec: {
                ...prev.unitSegmentSpec,
                insightType: insightTypeValue,
                attribute: insightTypeValue === 'extreme' ? 'maximum' : 'positive'
              }
            };
          } else {
            return {
              ...prev,
              unitSegmentSpec: {
                ...prev.unitSegmentSpec,
                insightType: insightTypeValue,
                attribute: undefined
              }
            };
          }
        }
        return {
          ...prev,
          unitSegmentSpec: {
            ...prev.unitSegmentSpec,
            [field]: value
          }
        };
      }
      return {
        ...prev,
        [field]: value
      };
    });
  };

  const handleDataSpecChange = (
    index: number,
    field: keyof DataSpec,
    value: string | number
  ) => {
    setIsOutdated(true);
    setEditingSpec(prev => {
      const newDataSpec = [...(prev.dataSpec || [])];
      if (field === 'valueValue') {
        newDataSpec[index] = {
          ...newDataSpec[index],
          valueValue: Number(value)
        };
      } else {
        newDataSpec[index] = {
          ...newDataSpec[index],
          [field]: value as string
        };
      }
      return {
        ...prev,
        dataSpec: newDataSpec
      };
    });
  };

  const handleAddDataSpecItem = () => {
    setIsOutdated(true);
    setEditingSpec(prev => ({
      ...prev,
      dataSpec: [
        ...(prev.dataSpec || []),
        {
          categoryKey: '',
          categoryValue: '',
          valueKey: '',
          valueValue: 0
        }
      ]
    }));
  };

  const handleRemoveDataSpecItem = (index: number) => {
    setIsOutdated(true);
    setEditingSpec(prev => ({
      ...prev,
      dataSpec: prev.dataSpec?.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    onSave(editingSpec);
    setOriginalSpec(editingSpec);
    setIsOutdated(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingSpec(originalSpec);
    setIsOutdated(false);
    setIsEditing(false);
  };

  const stageContent = renderStageContent();

  return (
    <ConfigProvider theme={THEME}>
      <Card
        title={stageContent.title}
        extra={
          <Button type="default" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        }
        style={{ width: 400 }}
        bodyStyle={{ height: 250, overflow: 'auto' }}
      >
        {renderContent(stageContent)}
      </Card>

      <Modal
        open={isEditing}
        title="Edit"
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="save"
            onClick={handleSave}
            disabled={!isOutdated}
          >
            Save
          </Button>
        ]}
        width={800}
      >
        <Space direction="vertical" style={{ width: '100%', height: '60vh', overflowY: 'auto' }} size="large">
          <Card title="Unit Segment Spec" size="small">
            <Form layout="vertical">
              <Item label="Context">
                <TextArea
                  value={editingSpec.unitSegmentSpec.context}
                  onChange={e => handleFieldChange('context', e.target.value, 'unitSegmentSpec')}
                  rows={4}
                />
              </Item>
              <Item label="Insight Type">
                <Select
                  value={editingSpec.unitSegmentSpec.insightType}
                  onChange={value => handleFieldChange('insightType', value, 'unitSegmentSpec')}
                  options={[
                    'noType', 'comparison', 'trend', 'rank', 'proportion', 'extreme', 'value'
                  ].map(type => ({ label: type, value: type }))}
                />
              </Item>
              {['extreme', 'trend'].includes(editingSpec.unitSegmentSpec.insightType) && (
                <Item 
                  label="Attribute"
                  style={{ marginBottom: 16 }}
                >
                  {editingSpec.unitSegmentSpec.attribute && (
                    <Select
                      value={editingSpec.unitSegmentSpec.attribute}
                      onChange={value => handleFieldChange('attribute', value, 'unitSegmentSpec')}
                      options={(editingSpec.unitSegmentSpec.insightType === 'extreme'
                        ? ['maximum', 'minimum']
                        : ['positive', 'negative']).map(opt => ({ label: opt, value: opt }))}
                      style={{ width: '100%' }}
                    />
                  )}
                </Item>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>InSituPosition</Text>
                {editingSpec.unitSegmentSpec.inSituPosition ? (
                  <Button 
                    danger
                    size="small"
                    onClick={() => handleFieldChange('inSituPosition', undefined, 'unitSegmentSpec')}
                  >
                    {DEL_TEXT}
                  </Button>
                ) : (
                  <Button
                    size="small"
                    onClick={() => handleFieldChange('inSituPosition', [''], 'unitSegmentSpec')}
                  >
                    {ADD_TEXT}
                  </Button>
                )}
              </div>
              {editingSpec.unitSegmentSpec.inSituPosition && (
                <Space direction="vertical" style={{ width: '100%' }}>
                  {editingSpec.unitSegmentSpec.inSituPosition.map((pos, index) => (
                    <Space key={index}>
                      <Input
                        value={pos}
                        onChange={e => {
                          const newPositions = [...editingSpec.unitSegmentSpec.inSituPosition!];
                          newPositions[index] = e.target.value;
                          handleFieldChange('inSituPosition', newPositions, 'unitSegmentSpec');
                        }}
                      />
                      <Button 
                        danger 
                        size="small"
                        onClick={() => {
                          const newPositions = editingSpec.unitSegmentSpec.inSituPosition!.filter((_, i) => i !== index);
                          handleFieldChange('inSituPosition', newPositions, 'unitSegmentSpec');
                        }}
                      >
                        {DEL_TEXT}
                      </Button>
                    </Space>
                  ))}
                  <Button
                    size="small"
                    onClick={() => {
                      const newPositions = [...editingSpec.unitSegmentSpec.inSituPosition!, ''];
                      handleFieldChange('inSituPosition', newPositions, 'unitSegmentSpec');
                    }}
                  >
                    New
                  </Button>
                </Space>
              )}
            </Form>
          </Card>

          <Card title={
            <Row
              justify="space-between"
            >
              <Text>Data Spec</Text>
              {editingSpec.dataSpec ? (
                <Button 
                  danger
                  size="small"
                  onClick={() => setEditingSpec(prev => ({ ...prev, dataSpec: undefined }))}
                >
                  {DEL_TEXT}
                </Button>
              ) : (
                <Button
                  size="small"
                  onClick={() => setEditingSpec(prev => ({
                    ...prev,
                    dataSpec: [{
                      categoryKey: '',
                      categoryValue: '',
                      valueKey: '',
                      valueValue: 0
                    }]
                  }))}
                >
                  {ADD_TEXT}
                </Button>
              )}
            </Row>
            }
            size="small"
          >
          {editingSpec.dataSpec?.map((data, index) => (
            <Card
              key={index}
              size="small"
              title={`#${index + 1}`}
              extra={
                <Button 
                  danger 
                  size="small"
                  onClick={() => handleRemoveDataSpecItem(index)}
                >
                  {DEL_TEXT}
                </Button>
              }
            >
              <Form layout="vertical">
                <Item label="Category Key">
                  <Input
                    value={data.categoryKey}
                    onChange={e => handleDataSpecChange(index, 'categoryKey', e.target.value)}
                  />
                </Item>
                <Item label="Category Value">
                  <Input
                    value={data.categoryValue}
                    onChange={e => handleDataSpecChange(index, 'categoryValue', e.target.value)}
                  />
                </Item>
                <Item label="Value Key">
                  <Input
                    value={data.valueKey}
                    onChange={e => handleDataSpecChange(index, 'valueKey', e.target.value)}
                  />
                </Item>
                <Item label="Value">
                  <Input
                    type="number"
                    value={data.valueValue}
                    onChange={e => handleDataSpecChange(index, 'valueValue', e.target.value)}
                  />
                </Item>
              </Form>
            </Card>
          ))}

          {(editingSpec.dataSpec || []).length > 0 && (
            <Button block onClick={handleAddDataSpecItem}>
              New Item
            </Button>
          )}
          </Card>
        </Space>
      </Modal>
    </ConfigProvider>
  );
};