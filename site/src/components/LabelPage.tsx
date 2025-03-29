import React, { useEffect, useReducer, useCallback, useRef } from 'react';
import { ConfigProvider, Button, message, Card, Space, Progress, Layout, Table, Flex, Typography, Switch } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import type { DataItem } from '../types';
import { getData, saveLabel } from '../utils/labelUtils';
import { translateText } from '../utils/model';
import THEME from '../style/theme';
import MenuBar from '@src/demo/commonElement/menuBar';

const { Text } = Typography;

const containerStyle = {
  padding: '20px',
  maxWidth: '1400px',
  margin: '0 auto'
};

const contentStyle = {
  height: '200px',
  marginBottom: '20px',
  lineHeight: '1.6',
  fontSize: '25px',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  overflow: 'auto',
};

const navigationStyle = {
  padding: '20px',
  borderTop: '1px solid #f0f0f0',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#fff'
};

const saveButtonStyle = {
  backgroundColor: '#237804',
  borderColor: '#237804',
};

const typeBlockStyle = {
  width: 'calc(33.333% - 10px)',
  height: '60px',
  margin: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'all 0.3s'
};

const LABEL_TYPES = ["value", "difference", "proportion", "trend", "rank", "extreme", "noType"];

type State = {
  data: DataItem[];
  currentIndex: number;
  selectedTypes: string[];
  labeledCount: number;
  loading: boolean;
  translating: boolean;
  autoTranslate: boolean;
};

type Action =
  | { type: 'SET_DATA'; payload: DataItem[] }
  | { type: 'SET_CURRENT_INDEX'; payload: number }
  | { type: 'SET_SELECTED_TYPES'; payload: string[] }
  | { type: 'SET_LABELED_COUNT'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_TRANSLATING'; payload: boolean }
  | { type: 'SET_AUTO_TRANSLATE'; payload: boolean }
  | { type: 'UPDATE_DATA_ITEM'; payload: { index: number; item: DataItem } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_CURRENT_INDEX':
      return { ...state, currentIndex: action.payload };
    case 'SET_SELECTED_TYPES':
      return { ...state, selectedTypes: action.payload };
    case 'SET_LABELED_COUNT':
      return { ...state, labeledCount: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_TRANSLATING':
      return { ...state, translating: action.payload };
    case 'SET_AUTO_TRANSLATE':
      return { ...state, autoTranslate: action.payload };
    case 'UPDATE_DATA_ITEM':
      const newData = [...state.data];
      newData[action.payload.index] = action.payload.item;
      return { ...state, data: newData };
    default:
      return state;
  }
};

const LabelTypeBlock: React.FC<{
  type: string;
  selected: boolean;
  onClick: () => void;
}> = ({ type, selected, onClick }) => (
  <div
    style={{
      ...typeBlockStyle,
      backgroundColor: selected ? '#87d068' : '#f0f0f0',
      color: selected ? '#fff' : '#666',
    }}
    onClick={onClick}
  >
    {type}
  </div>
);

const LabelPage: React.FC = () => {
  const initialState: State = {
    data: [],
    currentIndex: 0,
    selectedTypes: [],
    labeledCount: 0,
    loading: false,
    translating: false,
    autoTranslate: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, currentIndex, selectedTypes, labeledCount, loading, translating, autoTranslate } = state;
  const slideDirection = useRef<'forward' | 'backward'>('forward');
  const [_, forceUpdate] = React.useReducer(x => x + 1, 0);

  // 从localStorage获取翻译结果
  const getTranslation = (content: string) => {
    const translations = JSON.parse(localStorage.getItem('translations') || '{}');
    return translations[content] || '';
  };

  // 保存翻译结果到localStorage
  const saveTranslation = (content: string, translation: string) => {
    const translations = JSON.parse(localStorage.getItem('translations') || '{}');
    translations[content] = translation;
    localStorage.setItem('translations', JSON.stringify(translations));
  };

  const handleTranslate = async () => {
    const currentContent = data[currentIndex]?.content;
    if (!currentContent) return;
    // copy currentContent to avoid page change during translation
    const index = currentIndex;

    dispatch({ type: 'SET_TRANSLATING', payload: true });
    try {
      const translation = await translateText(currentContent);
      saveTranslation(currentContent, translation);
      
      dispatch({
        type: 'UPDATE_DATA_ITEM',
        payload: {
          index: index,
          item: {
            ...data[index],
            cn: translation
          }
        }
      });
      message.success('翻译成功');
    } catch (error) {
      console.error('翻译失败:', error);
      message.error('翻译失败');
    } finally {
      dispatch({ type: 'SET_TRANSLATING', payload: false });
    }
  };

  const handleIndexChange = (newIndex: number) => {
    slideDirection.current = newIndex > currentIndex ? 'forward' : 'backward';
    forceUpdate();
    dispatch({ type: 'SET_CURRENT_INDEX', payload: newIndex });
  };

  const updateLabeledCount = useCallback((currentData: DataItem[]) => {
    const count = currentData.filter(item => item.candidateTypes.length > 0).length;
    dispatch({ type: 'SET_LABELED_COUNT', payload: count });
  }, []);

  const loadData = useCallback(async () => {
    try {
      const labelData = await getData();
      const dataWithTranslations = labelData.map(item => ({
        ...item,
        cn: getTranslation(item.content)
      }));
      dispatch({ type: 'SET_DATA', payload: dataWithTranslations });
      updateLabeledCount(labelData);
    } catch (error) {
      console.error('Error loading data:', error);
      message.error('加载数据失败');
    }
  }, [updateLabeledCount]);

  useEffect(() => {
    loadData();
  }, [loadData]);
useEffect(() => {
  if (data[currentIndex]) {
    dispatch({ type: 'SET_SELECTED_TYPES', payload: data[currentIndex].candidateTypes });
  }
}, [currentIndex, data]);

useEffect(() => {
  const currentContent = data[currentIndex]?.content;
  if (autoTranslate && currentContent && !data[currentIndex]?.cn && !translating) {
    handleTranslate();
  }
}, [currentIndex, autoTranslate]);


  const handleTypeClick = useCallback((type: string) => {
    dispatch({
      type: 'SET_SELECTED_TYPES',
      payload: selectedTypes.includes(type)
        ? selectedTypes.filter(t => t !== type)
        : [...selectedTypes, type]
    });
  }, [selectedTypes]);

  const handleSave = useCallback(async () => {
    if (!data[currentIndex]) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const success = await saveLabel(currentIndex, selectedTypes);
      
      if (success) {
        dispatch({
          type: 'UPDATE_DATA_ITEM',
          payload: {
            index: currentIndex,
            item: {
              ...data[currentIndex],
              candidateTypes: selectedTypes
            }
          }
        });
        updateLabeledCount([...data]);
        if (selectedTypes.length === 0) {
          message.success('重置了标注类型');
        }else {
          message.success('保存成功');
        }
        
        if (currentIndex < data.length - 1) {
          handleIndexChange(currentIndex + 1);
        }
      } else {
        message.error('保存失败');
      }
    } catch (error) {
      console.error('Error saving label:', error);
      message.error('保存失败');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [currentIndex, data, selectedTypes, updateLabeledCount]);

  const handleSkipToUnlabeled = useCallback(() => {
    const nextUnlabeled = data.findIndex(item => item.candidateTypes.length === 0);
    if (nextUnlabeled !== -1) {
      handleIndexChange(nextUnlabeled);
      dispatch({ type: 'SET_SELECTED_TYPES', payload: [] });
    } else {
      message.info('没有未标注的数据了');
    }
  }, [data]);

  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: 33,
      render: (_: any, dataItem: any) => data.indexOf(dataItem) + 1
    },
    {
      title: '句子',
      dataIndex: 'content',
      width: 150,
      ellipsis: true
    },
    {
      title: '中文',
      dataIndex: 'cn',
      width: 150,
      ellipsis: true
    },
    {
      title: '标注类型',
      dataIndex: 'candidateTypes',
      width: 300,
      render: (types: string[]) => (
        <Space wrap>
          {types.map(type => (
            <div
              key={type}
              style={{
                padding: '2px 8px',
                backgroundColor: '#87d068',
                color: '#fff',
                borderRadius: '2px'
              }}
            >
              {type}
            </div>
          ))}
        </Space>
      )
    },
    {
      title: '状态',
      dataIndex: 'candidateTypes',
      width: 50,
      render: (types: string[]) => (
        <div
          style={{
            padding: '2px 8px',
            backgroundColor: types.length > 0 ? '#87d068' : '#ff4d4f',
            color: '#fff',
            borderRadius: '2px',
            display: 'inline-block'
          }}
        >
          {types.length > 0 ? '已标注' : '未标注'}
        </div>
      )
    }
  ];

  const formatProgress = (percent?: number) => {
    if (percent === undefined) return '';
    return `${labeledCount} / ${data.length} (${percent}%)`;
  };

  if (data.length === 0) {
    return <div>加载中...</div>;
  }

  return (
    <>
      <ConfigProvider theme={THEME}>
        <MenuBar />
      </ConfigProvider>
      <Layout.Content style={containerStyle}>
        <style>
          {`
            .content-transition .slide-enter {
              transform: translateX(100%);
              opacity: 0;
            }
            .slide-enter-active {
              transform: translateX(0);
              opacity: 1;
              transition: all 300ms ease-in-out;
            }
            .slide-exit {
              transform: translateX(0);
              opacity: 1;
            }
            .slide-exit-active {
              transform: translateX(-100%);
              opacity: 0;
              transition: all 300ms ease-in-out;
            }
            .slide-reverse-enter {
              transform: translateX(-100%);
              opacity: 0;
            }
            .slide-reverse-enter-active {
              transform: translateX(0);
              opacity: 1;
              transition: all 300ms ease-in-out;
            }
            .slide-reverse-exit {
              transform: translateX(0);
              opacity: 1;
            }
            .slide-reverse-exit-active {
              transform: translateX(100%);
              opacity: 0;
              transition: all 300ms ease-in-out;
            }
          `}
        </style>
        <Card title="说明" style={{ marginBottom: '16px' }}>
          <Text>
            1. 本页面用于标注
            <br />
            2. 主要内容区域显示英文原句和中文翻译，支持自动/手动翻译
            <br />
            3. 下方可以选择一个或多个标注类型，选择后点击保存即可
            <br />
            4. 可以使用底部的句子列表快速跳转，或使用"跳转到首个未标注记录"按钮
            <br />
            5. 数据实时保存在本地存储，刷新页面后仍然可用，同时可以开启写入文件的后端服务，通过运行node site/src/server/MannualAnnotate.js启动服务
            <br />
            6. 源文件在site/static/test/relabel.json，可以直接修改或替换
          </Text>
        </Card>
        <Card title="标注进度">
          <Progress 
            percent={Math.round((labeledCount / data.length) * 100)} 
            format={formatProgress}
          />
        </Card>
        
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Layout style={{ width: '100%', justifyContent: 'space-between' }}>
            <Card style={{ flex: 1, width:'100%' }} bodyStyle={{ padding: 0 }} title="标注内容"
              extra={
                <Flex justify='space-between' align='center' gap={18}>
                  {
                    data[currentIndex].candidateTypes.length > 0 ?
                    (
                      <Text type='success' strong>已标注</Text>
                    ):
                    (
                      <Text type='danger' strong>未标注</Text>
                    )
                  }
                  <Space>
                    <Switch
                      checked={autoTranslate}
                      onChange={(checked) => dispatch({ type: 'SET_AUTO_TRANSLATE', payload: checked })}
                      checkedChildren="自动翻译开"
                      unCheckedChildren="自动翻译关"
                      style={{ backgroundColor: autoTranslate ? '#52c41a' : undefined }}
                    />
                    <Button
                      onClick={handleTranslate}
                      loading={translating}
                    >
                      生成翻译
                    </Button>
                  </Space>
                </Flex>
              }
            >
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }} className="content-transition">
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={currentIndex}
                    timeout={300}
                    classNames={slideDirection.current === 'forward' ? 'slide' : 'slide-reverse'}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      margin: 0
                    }}>
                      <div style={contentStyle}>
                        {data[currentIndex]?.content}
                      </div>
                      {data[currentIndex]?.cn && (
                        <div style={contentStyle}>
                          {data[currentIndex].cn}
                        </div>
                      )}
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              <div style={navigationStyle}>
                <Flex justify='space-between' align='middle' style={{ width: '100%' }}>
                  <Button
                    onClick={() => handleIndexChange(Math.max(0, currentIndex - 1))}
                    onMouseEnter={() => {slideDirection.current = 'backward'; forceUpdate();}}
                    disabled={currentIndex <= 0}
                  >
                    上一篇
                  </Button>
                  <Space>
                    <span>{currentIndex + 1} / {data.length}</span>
                  </Space>
                  {
                  data[currentIndex]?.candidateTypes.length > 0 ?
                  <Button
                    onClick={() => handleIndexChange(Math.min(data.length - 1, currentIndex + 1))}
                    disabled={currentIndex >= data.length - 1}
                    onMouseEnter={() => {slideDirection.current = 'forward'; forceUpdate();}}
                  >
                    下一篇
                  </Button>
                  :
                  <Button
                    danger
                    onClick={() => handleIndexChange(Math.min(data.length - 1, currentIndex + 1))}
                    disabled={currentIndex >= data.length - 1}
                    onMouseEnter={() => {slideDirection.current = 'forward'; forceUpdate();}}
                  >
                    下一篇
                  </Button>
                  }
                </Flex>
              </div>
            </Card>

            <Card title="选择数据类型(可多选)" style={{ width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-5px' }}>
                {LABEL_TYPES.map(type => (
                  <LabelTypeBlock
                    key={type}
                    type={type}
                    selected={selectedTypes.includes(type)}
                    onClick={() => handleTypeClick(type)}
                  />
                ))}
              </div>
              <Space direction="vertical" style={{ width: '100%', marginTop: '20px' }}>
                <Button type="primary" block
                  onClick={handleSave}
                  onMouseEnter={() => {slideDirection.current = 'forward'; forceUpdate();}}
                  loading={loading}
                  style={saveButtonStyle}
                >
                  保存标注
                </Button>
                <Button block
                  onClick={handleSkipToUnlabeled}
                  onMouseEnter={() => {
                    const nextUnlabeled = data.findIndex(item => item.candidateTypes.length === 0);
                    if (nextUnlabeled === -1) return;
                    const direction = nextUnlabeled > currentIndex ? 'forward' : 'backward';
                    slideDirection.current = direction;
                    forceUpdate();
                  }}
                >
                  跳转到首个未标注记录
                </Button>
              </Space>
            </Card>
          </Layout>

          <Card title="句子列表">
            <Table
              dataSource={data}
              columns={columns}
              rowKey={(_, index) => index?.toString() || '0'}
              pagination={{ pageSize: 10 }}
              onRow={(record, index) => ({
                onClick: () => {
                  handleIndexChange(data.indexOf(record));
                },
                onMouseEnter: () => {
                  const i = data.indexOf(record);
                  if (i === -1) return;
                  slideDirection.current = i > currentIndex ? 'forward' : 'backward';
                  forceUpdate();
                },
                style: { 
                  cursor: 'pointer',
                  backgroundColor: index === currentIndex ? '#e6f7ff' : undefined 
                }
              })}
            />
          </Card>
        </Space>
      </Layout.Content>
    </>
  );
};

export default LabelPage;