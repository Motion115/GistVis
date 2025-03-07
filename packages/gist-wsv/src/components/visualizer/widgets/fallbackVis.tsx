import React, { useState } from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { GistvisSpec } from '../types';

const FallBackCase = ({ gistvisSpec }: { gistvisSpec: GistvisSpec }) => {
  const insightType = gistvisSpec.unitSegmentSpec.insightType;

  const toolTipContent = (
    <div
      style={{
        lineHeight: 1.1,
        fontSize: '14px',
        color: 'black',
        fontWeight: 'bold',
      }}
    >
      May contain data insight of {insightType}.
    </div>
  );
  const endingPunctuation = gistvisSpec.unitSegmentSpec.context[gistvisSpec.unitSegmentSpec.context.length - 1] + ' ';

  const [isSelected, setIsSelected] = useState(false);
  const hoverStyle = {
    opacity: isSelected ? 1 : 0.5,
    transition: 'opacity 0.3s',
  };
  return (
    <span>
      {gistvisSpec.unitSegmentSpec.context.slice(0, -1)}{' '}
      <Tooltip title={toolTipContent} placement="bottom" color="#ffffff">
        <QuestionCircleOutlined
          style={hoverStyle}
          onMouseOver={() => setIsSelected(true)}
          onMouseLeave={() => setIsSelected(false)}
        />
      </Tooltip>
      {endingPunctuation}
    </span>
  );
};

export default FallBackCase;
