import React from 'react';
import { GistvisSpec } from '../types';

const PlainTextRenderer = ({ gistvisSpec }: { gistvisSpec: GistvisSpec }) => {
  const endingPunctuation = gistvisSpec.unitSegmentSpec.context[gistvisSpec.unitSegmentSpec.context.length - 1] + ' ';
  return (
    <span>
      {gistvisSpec.unitSegmentSpec.context.slice(0, -1)}
      {endingPunctuation}
    </span>
  );
};

export default PlainTextRenderer;
