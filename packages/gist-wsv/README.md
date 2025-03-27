<h1 align="center">
<b>@gistvis/wsv</b>
</h1>

<div align="center">
A React visualization library for authoring word-scale visualizations in JSON specification.

[![BSD-3-Clause License](https://img.shields.io/github/license/motion115/gistvis)](/LICENSE) [![Language](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org) [![NPM Package](https://img.shields.io/npm/v/@gistvis/wsv.svg)](https://www.npmjs.com/package/@gistvis/wsv)

</div>

## Introduction

[@gistvis/wsv](https://www.npmjs.com/package/@gistvis/wsv) is a React visualization library that allows users to create word-scale visualizations in JSON specification. It uses <span>data fact specification</span> to provide a interface for users and machines to create word-scale visualizations for data-rich documents.

## Installation and Usage

Installation can be done via npm, yarn or pnpm.

```shell
# npm
$ npm install @gistvis/wsv --save

# yarn
$ yarn add @gistvis/wsv

# pnpm
$ pnpm install @gistvis/wsv
```

Visualization rendering goes through the `<GistvisVisualizer />` React component. The only prop is `datafactSpec={}`, which takes in a JSON specification under the type `paragraphSpec[]` (i.e., the data fact specification).

Below we provide an example of rendering a single paragraph displaying proportion data insight:

```ts
import { paragraphSpec, GistvisVisualizer } from "@gistvis/wsv";

export const DemoProportion = () => {
  const data: paragraphSpec[] = [
    {
      paragraphIdx: 0,
      paragraphContent: [
        {
          id: "p1s0",
          unitSegmentSpec: {
            insightType: "proportion",
            segmentIdx: 0,
            context:
              "Company A constitutes of 20% of EV market share, company B consitutes 12%, while the rest of the top 5 companies constitutes 30% of the market share.",
            inSituPosition: [],
          },
          dataSpec: [
            {
              space: "the category of market share in EV sales",
              breakdown: "company A",
              feature: "the proportion of EV market share",
              value: 0.2,
            },
            {
              space: "the category of market share in EV sales",
              breakdown: "company B",
              feature: "the proportion of EV market share",
              value: 0.12,
            },
            {
              space: "the category of market share in EV sales",
              breakdown: "the rest of the top 5 companies",
              feature: "the proportion of EV market share",
              value: 0.3,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <GistvisVisualizer datafactSpec={data} />
    </div>
  );
};
```

Viola, you get a horizontal stacked bar chart that shows the proportion of market share of company A, company B, the rest of the top 5 companies, and others.

Note that this specification is originally designed for large language model output. Thus, it can be quite verbose. We are working on a more concise specification (language/tool) that can be used for authoring word-scale visualizations, so please expect some API changes in the future.