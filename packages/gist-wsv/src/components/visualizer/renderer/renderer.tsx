import '../../../style/page.css';
import { GistvisSpec, InsightType, paragraphSpec } from '../types';
import {
  ComparisonTextRenderer,
  ExtremeTextRenderer,
  PlainTextRenderer,
  ProportionTextRenderer,
  RankTextRenderer,
  ValueTextRenderer,
  TrendTextRenderer,
} from './rendererList';
import { recommendValidTypes } from '../utils/utils';
import FallBackCase from '../widgets/fallbackVis';

const ArtcleProcess = ({ llmarticle }: { llmarticle: paragraphSpec[] }) => {
  const renderMap = {
    noType: (item: GistvisSpec) => <PlainTextRenderer gistvisSpec={item} />,
    trend: (item: GistvisSpec) => <TrendTextRenderer gistvisSpec={item} />,
    rank: (item: GistvisSpec) => <RankTextRenderer gistvisSpec={item} />,
    proportion: (item: GistvisSpec) => <ProportionTextRenderer gistvisSpec={item} />,
    comparison: (item: GistvisSpec) => <ComparisonTextRenderer gistvisSpec={item} />,
    extreme: (item: GistvisSpec) => <ExtremeTextRenderer gistvisSpec={item} />,
    value: (item: GistvisSpec) => <ValueTextRenderer gistvisSpec={item} />,
    fallback: (item: GistvisSpec) => <FallBackCase gistvisSpec={item} />,
  };
  // console.log(JSON.stringify(llmarticle, null, 2))

  const checkDataspecValidity = (item: GistvisSpec) => {
    const dataSpec = item.dataSpec ?? [];
    // if (dataSpec.length === 0) {
    //   return false;
    // }
    // else {
    //   let categoryKeyList = lodash.uniq(dataSpec.map((data) => data.categoryKey));
    //   let valueKeyList = lodash.uniq(dataSpec.map((data) => data.valueKey));
    //   if (categoryKeyList.length > 1 || valueKeyList.length > 1) {
    //     return false;
    //   }
    //   else {
    return true;
    //   }
    // }
  };

  return (
    <div style={{ textAlign: 'justify' }}>
      {llmarticle.map((para) => {
        return (
          <p key={para.paragraphIdx}>
            {para.paragraphContent.map((item) => {
              const recommendedTypes = recommendValidTypes(item);
              const renderType = recommendedTypes.includes(item.unitSegmentSpec.insightType)
                ? item.unitSegmentSpec.insightType
                : 'fallback';

              let finalRenderType: InsightType | 'fallback' = renderType;
              if (renderType !== 'noType' && renderType !== 'fallback' && !checkDataspecValidity(item)) {
                finalRenderType = 'fallback';
              }
              const renderFunction = renderMap[finalRenderType];
              return renderFunction ? renderFunction(item) : null;
            })}
          </p>
        );
      })}
    </div>
  );
};

export default ArtcleProcess;
