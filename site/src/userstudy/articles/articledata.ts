import { ArticleData } from './articleTypes';
import { article1, article2, article3, article4, article5, article6 } from './unprocessed articles/articleList';
export const articles: ArticleData[] = [
  {
    id: '1',
    title: 'U.S. centenarian population is projected to quadruple over the next 30 years',
    content: article1
      .map((paragraph) =>
        paragraph.paragraphContent
          .sort((a, b) => a.unitSegmentSpec.segmentIdx - b.unitSegmentSpec.segmentIdx)
          .map((segment) => segment.unitSegmentSpec.context)
          .join(' ')
      )
      .join('\n\n'),
    questions: [
      {
        id: '1',
        text: 'Question 1: What was the value of centenarians in the 1990 census?',
        options: [
          { id: 'Option A', text: 'A. 101,000' },
          { id: 'Option B', text: 'B. 422,000' },
          { id: 'Option C', text: 'C. 37,000' },
          { id: 'Option D', text: 'D. 722,000' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: What percentage of centenarians in 2024 will be men?',
        options: [
          { id: 'Option A', text: 'A. 78%' },
          { id: 'Option B', text: 'B. 22%' },
          { id: 'Option C', text: 'C. 68%' },
          { id: 'Option D', text: 'D. 32%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: By 2054, which race will have the second lowest proportion of centenarians?',
        options: [
          { id: 'Option A', text: 'A. White' },
          { id: 'Option B', text: 'B. Black' },
          { id: 'Option C', text: 'C. Asian' },
          { id: 'Option D', text: 'D. Hispanic' },
          {
            id: 'Option E',
            text: 'E. multiracial; American Indian or Alaska Native; or Native Hawaiian or other Pacific Islander',
          },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: Which country will have the largest population of centenarians in the world by 2054?',
        options: [
          { id: 'Option A', text: 'A. U.S.' },
          { id: 'Option B', text: 'B. China' },
          { id: 'Option C', text: 'C. India' },
          { id: 'Option D', text: 'D. Japan' },
          { id: 'Option E', text: 'E. Thailand' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: false,
  },
  {
    id: '2',
    title: 'Most Americans think U.S. K-12 STEM education isn’t above average, but test results paint a mixed picture',
    content: article2
      .map((paragraph) =>
        paragraph.paragraphContent
          .sort((a, b) => a.unitSegmentSpec.segmentIdx - b.unitSegmentSpec.segmentIdx)
          .map((segment) => segment.unitSegmentSpec.context)
          .join(' ')
      )
      .join('\n\n'),
    questions: [
      {
        id: '1',
        text: 'Question 1: How do US students perform better than average compared to those studying in other countries?',
        options: [
          { id: 'Option A', text: 'A. American students are better at maths.' },
          {
            id: 'Option B',
            text: 'B. American students are better at science.',
          },
          {
            id: 'Option C',
            text: 'C. American students are better at K-12 STEM education.',
          },
          {
            id: 'Option D',
            text: 'D. American students are better at economy.',
          },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: Which demographic group is most optimistic about the state of STEM education in the United States?',
        options: [
          { id: 'Option A', text: 'A. White' },
          { id: 'Option B', text: 'B. Black' },
          { id: 'Option C', text: 'C. Asian' },
          { id: 'Option D', text: 'D. Hispanic' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What is the percentage of Democrats and Democratic-leaning Independents who think STEM education in the United States is at least above average?',
        options: [
          { id: 'Option A', text: 'A. 31%' },
          { id: 'Option B', text: 'B. 27%' },
          { id: 'Option C', text: 'C. 24%' },
          { id: 'Option D', text: 'D. 32%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: What is the difference in average maths scores in the US between 2018 and 2022?',
        options: [
          { id: 'Option A', text: 'A. 25%' },
          { id: 'Option B', text: 'B. 37%' },
          { id: 'Option C', text: 'C. 13%' },
          { id: 'Option D', text: 'D. 28%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: false,
  },
  {
    id: '3',
    title: 'A growing share of U.S. husbands and wives are roughly the same age',
    content: article3
      .map((paragraph) =>
        paragraph.paragraphContent
          .sort((a, b) => a.unitSegmentSpec.segmentIdx - b.unitSegmentSpec.segmentIdx)
          .map((segment) => segment.unitSegmentSpec.context)
          .join(' ')
      )
      .join('\n\n'),
    questions: [
      {
        id: '1',
        text: 'Question 1: What was the average age difference between husbands and wives in 2000?',
        options: [
          { id: 'Option A', text: 'A. 2.2' },
          { id: 'Option B', text: 'B. 2.4' },
          { id: 'Option C', text: 'C. 3.6' },
          { id: 'Option D', text: 'D. 4.9' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: What is the change in the number of marriages with a husband three or more years older than the wife in 2022 compared to 2000?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: Which demographic group is more likely to be in a same-age marriage?',
        options: [
          { id: 'Option A', text: 'A. White' },
          { id: 'Option B', text: 'B. Black' },
          { id: 'Option C', text: 'C. Asian' },
          { id: 'Option D', text: 'D. Hispanic' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: As the proportion of marriages in which the husband is older than the wife declines, how does the rate of widowhood among older women change?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: false,
  },
  {
    id: '4',
    title: 'Online shopping has grown rapidly in U.S., but most sales are still in stores',
    content: article4
      .map((paragraph) =>
        paragraph.paragraphContent
          .sort((a, b) => a.unitSegmentSpec.segmentIdx - b.unitSegmentSpec.segmentIdx)
          .map((segment) => segment.unitSegmentSpec.context)
          .join(' ')
      )
      .join('\n\n'),
    questions: [
      {
        id: '1',
        text: 'Question 1: How do online shopping sales change in the fourth quarter of each year?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: What percentage of all retail sales will e-commerce account for in the fourth quarter of 2020?',
        options: [
          { id: 'Option A', text: 'A. 14.1%' },
          { id: 'Option B', text: 'B. 16.3%' },
          { id: 'Option C', text: 'C. 14.7%' },
          { id: 'Option D', text: 'D. 16.7%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What percentage of all retail e-commerce sales did non-store retailers account for in Q3 2023?',
        options: [
          { id: 'Option A', text: 'A. 62%' },
          { id: 'Option B', text: 'B. 59%' },
          { id: 'Option C', text: 'C. 49%' },
          { id: 'Option D', text: 'D. 32%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: Among retailers with brick-and-mortar shops, what is the difference between the growth rates of online sales in general merchandise stores and food and beverage shops?',
        options: [
          { id: 'Option A', text: 'A. 4.2%' },
          { id: 'Option B', text: 'B. 2.7%' },
          { id: 'Option C', text: 'C. 3.6%' },
          { id: 'Option D', text: 'D. 4.0%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: false,
  },
  {
    id: '5',
    title: '71% of Asian restaurants in the U.S. serve Chinese, Japanese or Thai food',
    content: article5
      .map((paragraph) =>
        paragraph.paragraphContent
          .sort((a, b) => a.unitSegmentSpec.segmentIdx - b.unitSegmentSpec.segmentIdx)
          .map((segment) => segment.unitSegmentSpec.context)
          .join(' ')
      )
      .join('\n\n'),
    questions: [
      {
        id: '1',
        text: 'Question 1: What is the approximate percentage of Chinese Americans among Asians living in the United States?',
        options: [
          { id: 'Option A', text: 'A. 33%' },
          { id: 'Option B', text: 'B. 39%' },
          { id: 'Option C', text: 'C. 24%' },
          { id: 'Option D', text: 'D. 12%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: Which of the following states has a high concentration of Asian restaurants in the United States?',
        options: [
          { id: 'Option A', text: 'A. Texas' },
          { id: 'Option B', text: 'B. Hawaii' },
          { id: 'Option C', text: 'C. Nevada' },
          { id: 'Option D', text: 'D. Dakota' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What is the percentage of Chinese restaurants that are located in each county in the United States of America?',
        options: [
          { id: 'Option A', text: 'A. 73%' },
          { id: 'Option B', text: 'B. 70%' },
          { id: 'Option C', text: 'C. 45%' },
          { id: 'Option D', text: 'D. 33%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: Which of the following combinations is the second most common cuisine in Asian restaurants in the United States?',
        options: [
          { id: 'Option A', text: 'A. Chinese and Japanese food' },
          { id: 'Option B', text: 'B. Chinese and Thai food' },
          { id: 'Option C', text: 'C. Japanese and Thai food' },
          { id: 'Option D', text: 'D. Japanese and Korean food' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5: Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: false,
  },
  {
    id: '6',
    title: 'Black voters support Harris over Trump and Kennedy by a wide margin',
    content: article6
      .map((paragraph) =>
        paragraph.paragraphContent
          .sort((a, b) => a.unitSegmentSpec.segmentIdx - b.unitSegmentSpec.segmentIdx)
          .map((segment) => segment.unitSegmentSpec.context)
          .join(' ')
      )
      .join('\n\n'),
    questions: [
      {
        id: '1',
        text: 'Question 1: How has black support for the Democratic frontrunners changed over the past month?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: Which of the following information about black voter support for Harris is true?',
        options: [
          {
            id: 'Option A',
            text: 'A. Black voters aged 50 and over support her more than black voters aged 18-49.',
          },
          {
            id: 'Option B',
            text: 'B. Black voters without a degree support her more than black voters with a college degree.',
          },
          {
            id: 'Option C',
            text: 'C. Female black voters support her more than male black voters.',
          },
          {
            id: 'Option D',
            text: 'D. Black voters with regular jobs support her more than black voters with freelance jobs.',
          },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What percentage of black voters have a favourable opinion of Harris?',
        options: [
          { id: 'Option A', text: 'A. 56%' },
          { id: 'Option B', text: 'B. 41%' },
          { id: 'Option C', text: 'C. 79%' },
          { id: 'Option D', text: 'D. 80%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: "Question 4: How has Harris'support among Democrats and Democratic leaners changed since May?",
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5: Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: false,
  },
  {
    id: '7',
    title: 'U.S. centenarian population is projected to quadruple over the next 30 years',
    content: [
      {
        paragraphIdx: 0,
        paragraphContent: [
          {
            id: 'p0s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'The number of Americans ages 100 and older is projected to more than quadruple over the next three decades, from an estimated 101,000 in 2024 to about 422,000 in 2054, according to projections from the U.S. Census Bureau.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'time segment',
                breakdown: '2024',
                feature: 'number of Americans ages 100 and older',
                valueValue: 101000,
              },
              {
                space: 'time segment',
                breakdown: '2054',
                feature: 'number of Americans ages 100 and older',
                valueValue: 422000,
              },
            ],
          },
          {
            id: 'p0s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'Centenarians currently make up just 0.03% of the overall U.S. population, and they are expected to reach 0.1% in 2054.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of population',
                breakdown: 'Centenarians',
                feature: 'percentage of overall U.S. population',
                valueValue: 0.03,
              },
              {
                space: 'category of population',
                breakdown: 'Centenarians',
                feature: 'projected percentage of overall U.S. population in 2054',
                valueValue: 0.1,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 1,
        paragraphContent: [
          {
            id: 'p1s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'The number of centenarians in the United States has steadily ticked up since 1950, when the Census Bureau estimates there were just 2,300 Americans ages 100 and older.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of centenarians',
                breakdown: 'centenarians in the United States',
                feature: 'number of centenarians',
                valueValue: 2300,
              },
            ],
          },
          {
            id: 'p1s1',
            unitSegmentSpec: {
              insightType: 'extreme',
              segmentIdx: 1,
              context:
                '(The Census Bureau uses calculated estimates for years prior to the 1990 census because it has identified large errors in the census counts of centenarians for those years.)',
              inSituPosition: ['large errors in the census counts of centenarians'],
              attribute: 'maximum',
            },
            dataSpec: [
              {
                space: 'year of census',
                breakdown: 'prior to 1990',
                feature: 'error in census counts of centenarians',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 2,
        paragraphContent: [
          {
            id: 'p2s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'In the last three decades alone, the U.S. centenarian population has nearly tripled.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of population growth',
                breakdown: 'U.S. centenarian population',
                feature: 'population growth rate',
                valueValue: 300,
              },
            ],
          },
          {
            id: 'p2s1',
            unitSegmentSpec: {
              insightType: 'extreme',
              segmentIdx: 1,
              context: 'The 1990 census counted around 37,000 centenarians in the country.',
              inSituPosition: ['37,000'],
              attribute: 'maximum',
            },
            dataSpec: [
              {
                space: 'age group',
                breakdown: 'centenarians',
                feature: 'population count',
                valueValue: 37000,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 3,
        paragraphContent: [
          {
            id: 'p3s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'How we did this',
            },
          },
        ],
      },
      {
        paragraphIdx: 4,
        paragraphContent: [
          {
            id: 'p4s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context: 'Today, women and White adults make up the vast majority of Americans in their 100s.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'demographic group',
                breakdown: 'women',
                feature: 'proportion in population',
                valueValue: NaN,
              },
              {
                space: 'demographic group',
                breakdown: 'White adults',
                feature: 'proportion in population',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p4s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context: 'This trend is largely projected to continue, though their shares will decrease:',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of shares',
                breakdown: 'shares',
                feature: 'value of shares',
                valueValue: 100,
              },
              {
                space: 'category of shares',
                breakdown: 'projected shares',
                feature: 'value of shares',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 5,
        paragraphContent: [
          {
            id: 'p5s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context: 'In 2024, 78% of centenarians are women, and 22% are men.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Gender',
                breakdown: 'Women',
                feature: 'Proportion of Centenarians',
                valueValue: 0.78,
              },
              {
                space: 'Gender',
                breakdown: 'Men',
                feature: 'Proportion of Centenarians',
                valueValue: 0.22,
              },
            ],
          },
          {
            id: 'p5s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'In 30 years, women are expected to make up 68% of those ages 100 and older, while 32% will be men.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'gender',
                breakdown: 'women',
                feature: 'proportion of centenarians',
                valueValue: 0.68,
              },
              {
                space: 'gender',
                breakdown: 'men',
                feature: 'proportion of centenarians',
                valueValue: 0.32,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 6,
        paragraphContent: [
          {
            id: 'p6s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                '77% of today’s centenarians are White. Far fewer are Black (8%), Asian (7%) or Hispanic (6%). And 1% or fewer are multiracial; American Indian or Alaska Native; or Native Hawaiian or other Pacific Islander.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Race',
                breakdown: 'White',
                feature: 'Proportion of centenarians',
                valueValue: 0.77,
              },
              {
                space: 'Race',
                breakdown: 'Black',
                feature: 'Proportion of centenarians',
                valueValue: 0.08,
              },
              {
                space: 'Race',
                breakdown: 'Asian',
                feature: 'Proportion of centenarians',
                valueValue: 0.07,
              },
              {
                space: 'Race',
                breakdown: 'Hispanic',
                feature: 'Proportion of centenarians',
                valueValue: 0.06,
              },
              {
                space: 'Race',
                breakdown: 'Multiracial',
                feature: 'Proportion of centenarians',
                valueValue: 0.01,
              },
              {
                space: 'Race',
                breakdown: 'American Indian or Alaska Native',
                feature: 'Proportion of centenarians',
                valueValue: 0.01,
              },
              {
                space: 'Race',
                breakdown: 'Native Hawaiian or other Pacific Islander',
                feature: 'Proportion of centenarians',
                valueValue: 0.01,
              },
            ],
          },
          {
            id: 'p6s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'By 2054, White and Asian adults are projected to make up smaller shares of centenarians (72% and 5%, respectively), while the shares who are Hispanic (11%) or Black (10%) will be larger. (All racial categories here are single-race and non-Hispanic. Hispanics are of any race.)',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'racial category',
                breakdown: 'White adults',
                feature: 'proportion of centenarians',
                valueValue: 0.72,
              },
              {
                space: 'racial category',
                breakdown: 'Asian adults',
                feature: 'proportion of centenarians',
                valueValue: 0.05,
              },
              {
                space: 'racial category',
                breakdown: 'Hispanic adults',
                feature: 'proportion of centenarians',
                valueValue: 0.11,
              },
              {
                space: 'racial category',
                breakdown: 'Black adults',
                feature: 'proportion of centenarians',
                valueValue: 0.1,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 7,
        paragraphContent: [
          {
            id: 'p7s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'The U.S. population overall is expected to trend older in the coming decades as life expectancies increase and the birth rate declines.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of population age',
                breakdown: 'U.S. population',
                feature: 'population age trend',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p7s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'There are currently roughly 62 million adults ages 65 and older living in the U.S., accounting for 18% of the population. By 2054, 84 million adults ages 65 and older will make up an estimated 23% of the population.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'age group',
                breakdown: 'adults ages 65 and older',
                feature: 'population proportion',
                valueValue: 0.18,
              },
              {
                space: 'age group',
                breakdown: 'other adults',
                feature: 'population proportion',
                valueValue: 0.82,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 8,
        paragraphContent: [
          {
            id: 'p8s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Even as the 65-and-older population continues to grow over the next 30 years, those in their 100s are projected to roughly double as a percentage of that age group, increasing from 0.2% of all older Americans in 2024 to 0.5% in 2054.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'age group',
                breakdown: '65-and-older',
                feature: 'percentage of older Americans',
                valueValue: 0.2,
              },
              {
                space: 'age group',
                breakdown: '65-and-older',
                feature: 'percentage of older Americans',
                valueValue: 0.5,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 9,
        paragraphContent: [
          {
            id: 'p9s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'Centenarians around the world',
            },
          },
        ],
      },
      {
        paragraphIdx: 10,
        paragraphContent: [
          {
            id: 'p10s0',
            unitSegmentSpec: {
              insightType: 'extreme',
              segmentIdx: 0,
              context:
                'The world is home to an estimated 722,000 centenarians, according to the United Nations’ population projections for 2024.',
              inSituPosition: ['722,000'],
              attribute: 'maximum',
            },
            dataSpec: [
              {
                space: 'population category',
                breakdown: 'centenarians',
                feature: 'population count',
                valueValue: 722000,
              },
            ],
          },
          {
            id: 'p10s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'The U.S. centenarian population is the world’s second largest – the UN estimates it at 108,000, slightly larger than the Census Bureau’s estimate.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of centenarian population',
                breakdown: 'U.S.',
                feature: 'centenarian population estimate',
                valueValue: 108000,
              },
              {
                space: 'category of centenarian population',
                breakdown: 'U.S. (Census Bureau)',
                feature: 'centenarian population estimate',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 11,
        paragraphContent: [
          {
            id: 'p11s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Japan is the country with the greatest number of people in their 100s, at 146,000. China (60,000), India (48,000) and Thailand (38,000) round out the top five.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'country',
                breakdown: 'Japan',
                feature: 'number of people in their 100s',
                valueValue: 146000,
              },
              {
                space: 'country',
                breakdown: 'China',
                feature: 'number of people in their 100s',
                valueValue: 60000,
              },
              {
                space: 'country',
                breakdown: 'India',
                feature: 'number of people in their 100s',
                valueValue: 48000,
              },
              {
                space: 'country',
                breakdown: 'Thailand',
                feature: 'number of people in their 100s',
                valueValue: 38000,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 12,
        paragraphContent: [
          {
            id: 'p12s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'In each of these countries, centenarians make up less than 1% of the overall population, but combined, they account for more than half (55%) of the world’s population ages 100 and older.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of population',
                breakdown: 'centenarians',
                feature: 'proportion of overall population',
                valueValue: 0.01,
              },
              {
                space: 'category of population',
                breakdown: 'world’s population ages 100 and older',
                feature: 'proportion of overall population',
                valueValue: 0.55,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 13,
        paragraphContent: [
          {
            id: 'p13s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Looked at another way, centenarians make up a bigger proportion of the total population in Japan, Thailand and the U.S., and smaller shares in China and India, which have large but relatively young populations.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'country',
                breakdown: 'Japan',
                feature: 'proportion of centenarians',
                valueValue: 0.75,
              },
              {
                space: 'country',
                breakdown: 'Thailand',
                feature: 'proportion of centenarians',
                valueValue: 0.75,
              },
              {
                space: 'country',
                breakdown: 'U.S.',
                feature: 'proportion of centenarians',
                valueValue: 0.75,
              },
              {
                space: 'country',
                breakdown: 'China',
                feature: 'proportion of centenarians',
                valueValue: 0.25,
              },
              {
                space: 'country',
                breakdown: 'India',
                feature: 'proportion of centenarians',
                valueValue: 0.25,
              },
            ],
          },
          {
            id: 'p13s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'There are about 12 centenarians for every 10,000 people in Japan, five for every 10,000 in Thailand and three for every 10,000 in the U.S. That compares with fewer than one centenarian for every 10,000 people in China and India.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'country',
                breakdown: 'Japan',
                feature: 'centenarians per 10,000 people',
                valueValue: 12,
              },
              {
                space: 'country',
                breakdown: 'Thailand',
                feature: 'centenarians per 10,000 people',
                valueValue: 5,
              },
              {
                space: 'country',
                breakdown: 'U.S.',
                feature: 'centenarians per 10,000 people',
                valueValue: 3,
              },
              {
                space: 'country',
                breakdown: 'China',
                feature: 'centenarians per 10,000 people',
                valueValue: 1,
              },
              {
                space: 'country',
                breakdown: 'India',
                feature: 'centenarians per 10,000 people',
                valueValue: 1,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 14,
        paragraphContent: [
          {
            id: 'p14s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'By 2054, the global centenarian population is projected to grow to nearly 4 million.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of population growth',
                breakdown: 'global centenarian population',
                feature: 'projected population',
                valueValue: 4000000,
              },
            ],
          },
          {
            id: 'p14s1',
            unitSegmentSpec: {
              insightType: 'rank',
              segmentIdx: 1,
              context:
                'China is expected to have the largest number of centenarians, with 767,000, followed by the U.S., India, Japan and Thailand.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Country',
                breakdown: 'China',
                feature: 'Number of Centenarians',
                valueValue: 1,
              },
              {
                space: 'Country',
                breakdown: 'U.S.',
                feature: 'Number of Centenarians',
                valueValue: 2,
              },
              {
                space: 'Country',
                breakdown: 'India',
                feature: 'Number of Centenarians',
                valueValue: 3,
              },
              {
                space: 'Country',
                breakdown: 'Japan',
                feature: 'Number of Centenarians',
                valueValue: 4,
              },
              {
                space: 'Country',
                breakdown: 'Thailand',
                feature: 'Number of Centenarians',
                valueValue: 5,
              },
            ],
          },
          {
            id: 'p14s2',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 2,
              context:
                'As a proportion, centenarians are projected to account for about 49 out of every 10,000 people in Thailand, 40 of every 10,000 in Japan and 14 of every 10,000 in the U.S. Six out of every 10,000 people in China will be centenarians, as will about two of every 10,000 in India.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'country',
                breakdown: 'Thailand',
                feature: 'proportion of centenarians',
                valueValue: 0.0049,
              },
              {
                space: 'country',
                breakdown: 'Japan',
                feature: 'proportion of centenarians',
                valueValue: 0.004,
              },
              {
                space: 'country',
                breakdown: 'U.S.',
                feature: 'proportion of centenarians',
                valueValue: 0.0014,
              },
              {
                space: 'country',
                breakdown: 'China',
                feature: 'proportion of centenarians',
                valueValue: 0.0006,
              },
              {
                space: 'country',
                breakdown: 'India',
                feature: 'proportion of centenarians',
                valueValue: 0.0002,
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: '1',
        text: 'Question 1: What was the value of centenarians in the 1990 census?',
        options: [
          { id: 'Option A', text: 'A. 101,000' },
          { id: 'Option B', text: 'B. 422,000' },
          { id: 'Option C', text: 'C. 37,000' },
          { id: 'Option D', text: 'D. 722,000' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: What percentage of centenarians in 2024 will be men?',
        options: [
          { id: 'Option A', text: 'A. 78%' },
          { id: 'Option B', text: 'B. 22%' },
          { id: 'Option C', text: 'C. 68%' },
          { id: 'Option D', text: 'D. 32%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: By 2054, which race will have the second lowest proportion of centenarians?',
        options: [
          { id: 'Option A', text: 'A. White' },
          { id: 'Option B', text: 'B. Black' },
          { id: 'Option C', text: 'C. Asian' },
          { id: 'Option D', text: 'D. Hispanic' },
          {
            id: 'Option E',
            text: 'E. multiracial; American Indian or Alaska Native; or Native Hawaiian or other Pacific Islander',
          },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: Which country will have the largest population of centenarians in the world by 2054?',
        options: [
          { id: 'Option A', text: 'A. U.S.' },
          { id: 'Option B', text: 'B. China' },
          { id: 'Option C', text: 'C. India' },
          { id: 'Option D', text: 'D. Japan' },
          { id: 'Option E', text: 'E. Thailand' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: true,
  },
  {
    id: '8',
    title: 'Most Americans think U.S. K-12 STEM education isn’t above average, but test results paint a mixed picture',
    content: [
      {
        paragraphIdx: 0,
        paragraphContent: [
          {
            id: 'p0s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Most Americans believe K-12 STEM education in the United States is either average or below average compared with other wealthy nations, according to a new Pew Research Center survey.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of K-12 STEM education',
                breakdown: 'United States',
                feature: 'comparison of K-12 STEM education with other wealthy nations',
                valueValue: 0,
              },
              {
                space: 'category of K-12 STEM education',
                breakdown: 'other wealthy nations',
                feature: 'comparison of K-12 STEM education with other wealthy nations',
                valueValue: 30,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 1,
        paragraphContent: [
          {
            id: 'p1s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Recent global standardized test scores show that students in the U.S. are, in fact, lagging behind their peers in other wealthy nations when it comes to math.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'country',
                breakdown: 'U.S.',
                feature: 'math test scores',
                valueValue: 0,
              },
              {
                space: 'country',
                breakdown: 'other wealthy nations',
                feature: 'math test scores',
                valueValue: 30,
              },
            ],
          },
          {
            id: 'p1s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'But America’s students are doing better than average in science compared with pupils in these other countries.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: "category of students' performance",
                breakdown: "America's students",
                feature: 'performance in science',
                valueValue: NaN,
              },
              {
                space: "category of students' performance",
                breakdown: 'pupils in other countries',
                feature: 'performance in science',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 2,
        paragraphContent: [
          {
            id: 'p2s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'How we did this',
            },
          },
        ],
      },
      {
        paragraphIdx: 3,
        paragraphContent: [
          {
            id: 'p3s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context: 'How do Americans think U.S. STEM education compares with other wealthy countries?',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of comparison',
                breakdown: 'U.S. STEM education',
                feature: 'comparison with other wealthy countries',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 4,
        paragraphContent: [
          {
            id: 'p4s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'A horizontal stacked bar chart showing that about two-thirds of Americans see K-12 STEM education in the U.S. as average or below average.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Perception of K-12 STEM Education',
                breakdown: 'Americans',
                feature: 'Proportion of Average or Below Average Perception',
                valueValue: 0.67,
              },
              {
                space: 'Perception of K-12 STEM Education',
                breakdown: 'Americans',
                feature: 'Proportion of Above Average Perception',
                valueValue: 0.33,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 5,
        paragraphContent: [
          {
            id: 'p5s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Just 28% of U.S. adults say America is the best in the world or above average in K-12 science, technology, engineering and math education compared with other wealthy nations.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of K-12 education quality',
                breakdown: 'U.S. adults',
                feature:
                  'proportion of U.S. adults who think America is the best or above average in K-12 science, technology, engineering and math education',
                valueValue: 0.28,
              },
            ],
          },
          {
            id: 'p5s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'A third say the U.S. is average, while another 32% think the U.S. is below average or the worst in K-12 STEM education.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Perception of U.S. K-12 STEM Education',
                breakdown: 'Average',
                feature: 'Proportion of Responses',
                valueValue: 0.33,
              },
              {
                space: 'Perception of U.S. K-12 STEM Education',
                breakdown: 'Below Average or Worst',
                feature: 'Proportion of Responses',
                valueValue: 0.32,
              },
              {
                space: 'Perception of U.S. K-12 STEM Education',
                breakdown: 'Other',
                feature: 'Proportion of Responses',
                valueValue: 0.35,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 6,
        paragraphContent: [
          {
            id: 'p6s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Some demographic groups are more pessimistic than others about the state of U.S. STEM education. White Americans (24%) are less likely than Black (31%), Hispanic (37%) or English-speaking Asian (43%) Americans to say U.S. K-12 STEM education is the best in the world or above average.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Demographic Group',
                breakdown: 'White Americans',
                feature: 'Pessimism Level',
                valueValue: 24,
              },
              {
                space: 'Demographic Group',
                breakdown: 'Black Americans',
                feature: 'Pessimism Level',
                valueValue: 31,
              },
              {
                space: 'Demographic Group',
                breakdown: 'Hispanic Americans',
                feature: 'Pessimism Level',
                valueValue: 37,
              },
              {
                space: 'Demographic Group',
                breakdown: 'English-speaking Asian Americans',
                feature: 'Pessimism Level',
                valueValue: 43,
              },
            ],
          },
          {
            id: 'p6s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context: 'And fewer women (25%) than men (32%) say K-12 STEM education is at least above average.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Gender',
                breakdown: 'Women',
                feature: 'Proportion of respondents',
                valueValue: 0.25,
              },
              {
                space: 'Gender',
                breakdown: 'Men',
                feature: 'Proportion of respondents',
                valueValue: 0.32,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 7,
        paragraphContent: [
          {
            id: 'p7s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Republicans and Democrats give similar ratings to K-12 STEM education: 31% of Democrats and Democratic-leaning independents say it is at least above average, as do 27% of Republicans and GOP leaners.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Political Affiliation',
                breakdown: 'Democrats and Democratic-leaning independents',
                feature: 'Percentage rating K-12 STEM education as at least above average',
                valueValue: 31,
              },
              {
                space: 'Political Affiliation',
                breakdown: 'Republicans and GOP leaners',
                feature: 'Percentage rating K-12 STEM education as at least above average',
                valueValue: 27,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 8,
        paragraphContent: [
          {
            id: 'p8s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Americans’ views today are similar to those in a 2019 telephone survey by the Center, which was conducted before the coronavirus pandemic caused major disruptions in the country’s schools.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Survey Year',
                breakdown: '2019',
                feature: 'Views Similarity',
                valueValue: 0,
              },
              {
                space: 'Survey Year',
                breakdown: '2023',
                feature: 'Views Similarity',
                valueValue: 0,
              },
            ],
          },
          {
            id: 'p8s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'In that survey, 31% of Americans said U.S. K-12 STEM education is the best in the world or above average compared with other nations.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of survey response',
                breakdown: 'U.S. K-12 STEM education',
                feature: 'proportion of positive responses',
                valueValue: 0.31,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 9,
        paragraphContent: [
          {
            id: 'p9s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context: 'How does the U.S. compare with other countries in STEM test scores?',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Country',
                breakdown: 'U.S.',
                feature: 'STEM test scores',
                valueValue: NaN,
              },
              {
                space: 'Country',
                breakdown: 'Other countries',
                feature: 'STEM test scores',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 10,
        paragraphContent: [
          {
            id: 'p10s0',
            unitSegmentSpec: {
              insightType: 'rank',
              segmentIdx: 0,
              context:
                'A dot plot showing that U.S. ranks below average in math, above average in science compared with other OECD countries.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'OECD countries',
                breakdown: 'U.S.',
                feature: 'math ranking',
                valueValue: 2,
              },
              {
                space: 'OECD countries',
                breakdown: 'average',
                feature: 'math ranking',
                valueValue: 1,
              },
              {
                space: 'OECD countries',
                breakdown: 'U.S.',
                feature: 'science ranking',
                valueValue: 1,
              },
              {
                space: 'OECD countries',
                breakdown: 'average',
                feature: 'science ranking',
                valueValue: 2,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 11,
        paragraphContent: [
          {
            id: 'p11s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context:
                'The latest figures from the Program for International Student Assessment (PISA) show a mixed picture in U.S. math and science scores.',
            },
          },
        ],
      },
      {
        paragraphIdx: 12,
        paragraphContent: [
          {
            id: 'p12s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'As of 2022, the U.S. was below average in math but above average in science compared with other member countries in the Organization for Economic Cooperation and Development (OECD), a group of mostly highly developed, democratic nations:',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of academic performance',
                breakdown: 'U.S.',
                feature: 'math performance compared to OECD average',
                valueValue: 0,
              },
              {
                space: 'category of academic performance',
                breakdown: 'OECD average',
                feature: 'math performance compared to OECD average',
                valueValue: 30,
              },
              {
                space: 'category of academic performance',
                breakdown: 'U.S.',
                feature: 'science performance compared to OECD average',
                valueValue: 30,
              },
              {
                space: 'category of academic performance',
                breakdown: 'OECD average',
                feature: 'science performance compared to OECD average',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 13,
        paragraphContent: [
          {
            id: 'p13s0',
            unitSegmentSpec: {
              insightType: 'rank',
              segmentIdx: 0,
              context:
                'U.S. students ranked 28th out of 37 OECD member countries in math. Among OECD countries, Japanese students had the highest math scores and Colombian students scored lowest. The U.S. ranking was similar in 2018, the last time the test was administered.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'OECD member countries',
                breakdown: 'U.S. students',
                feature: 'math ranking',
                valueValue: 28,
              },
              {
                space: 'OECD member countries',
                breakdown: 'Japanese students',
                feature: 'math ranking',
                valueValue: 1,
              },
              {
                space: 'OECD member countries',
                breakdown: 'Colombian students',
                feature: 'math ranking',
                valueValue: 37,
              },
            ],
          },
          {
            id: 'p13s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'The U.S. average score for math fell by 13 percentage points between 2018 and 2022, but the U.S. was far from alone in experiencing a decline in scores. In fact, 25 of the 37 OECD countries saw at least a 10-point drop in average math scores from 2018 to 2022.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Time Period',
                breakdown: '2018',
                feature: 'U.S. Average Math Score',
                valueValue: 0,
              },
              {
                space: 'Time Period',
                breakdown: '2022',
                feature: 'U.S. Average Math Score',
                valueValue: -13,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 14,
        paragraphContent: [
          {
            id: 'p14s0',
            unitSegmentSpec: {
              insightType: 'rank',
              segmentIdx: 0,
              context: 'In science, the U.S. ranked 12th out of 37 OECD countries.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'country',
                breakdown: 'U.S.',
                feature: 'rank in OECD countries',
                valueValue: 12,
              },
            ],
          },
          {
            id: 'p14s1',
            unitSegmentSpec: {
              insightType: 'rank',
              segmentIdx: 1,
              context: 'Japanese students ranked highest and Mexican students ranked lowest.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'students',
                breakdown: 'Japanese',
                feature: 'rank',
                valueValue: 1,
              },
              {
                space: 'students',
                breakdown: 'Mexican',
                feature: 'rank',
                valueValue: 2,
              },
            ],
          },
          {
            id: 'p14s2',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 2,
              context: 'The U.S average science score was virtually unchanged since 2018.',
              inSituPosition: [],
              attribute: undefined,
            },
            dataSpec: [
              {
                space: 'category of score',
                breakdown: 'U.S average science score',
                feature: 'score value',
                valueValue: 100,
              },
              {
                space: 'category of score',
                breakdown: 'U.S average science score trend',
                feature: 'trend value',
                valueValue: 0,
              },
            ],
          },
          {
            id: 'p14s3',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 3,
              context:
                'Across OECD countries, far fewer countries experienced a large decline in science scores than in math scores.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'subject of scores',
                breakdown: 'science scores',
                feature: 'decline in scores',
                valueValue: 0,
              },
              {
                space: 'subject of scores',
                breakdown: 'math scores',
                feature: 'decline in scores',
                valueValue: 30,
              },
            ],
          },
          {
            id: 'p14s4',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 4,
              context: 'Seven OECD countries saw their mean science scores decline by 10 points or more.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'OECD countries',
                breakdown: 'Seven OECD countries',
                feature: 'mean science scores',
                valueValue: -10,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 15,
        paragraphContent: [
          {
            id: 'p15s0',
            unitSegmentSpec: {
              insightType: 'value',
              segmentIdx: 0,
              context: 'PISA is taken by 15-year-old students about every three years.',
              inSituPosition: ['every three years'],
            },
            dataSpec: [
              {
                space: 'age group',
                breakdown: '15-year-old students',
                feature: 'frequency of testing',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p15s1',
            unitSegmentSpec: {
              insightType: 'value',
              segmentIdx: 1,
              context: 'Students in 37 OECD countries took the 2022 PISA.',
              inSituPosition: ['37'],
            },
            dataSpec: [
              {
                space: 'OECD countries',
                breakdown: '37',
                feature: '',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: '1',
        text: 'Question 1: How do US students perform better than average compared to those studying in other countries?',
        options: [
          { id: 'Option A', text: 'A. American students are better at maths.' },
          {
            id: 'Option B',
            text: 'B. American students are better at science.',
          },
          {
            id: 'Option C',
            text: 'C. American students are better at K-12 STEM education.',
          },
          {
            id: 'Option D',
            text: 'D. American students are better at economy.',
          },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: Which demographic group is most optimistic about the state of STEM education in the United States?',
        options: [
          { id: 'Option A', text: 'A. White' },
          { id: 'Option B', text: 'B. Black' },
          { id: 'Option C', text: 'C. Asian' },
          { id: 'Option D', text: 'D. Hispanic' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What is the percentage of Democrats and Democratic-leaning Independents who think STEM education in the United States is at least above average?',
        options: [
          { id: 'Option A', text: 'A. 31%' },
          { id: 'Option B', text: 'B. 27%' },
          { id: 'Option C', text: 'C. 24%' },
          { id: 'Option D', text: 'D. 32%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: What is the difference in average maths scores in the US between 2018 and 2022?',
        options: [
          { id: 'Option A', text: 'A. 25%' },
          { id: 'Option B', text: 'B. 37%' },
          { id: 'Option C', text: 'C. 13%' },
          { id: 'Option D', text: 'D. 28%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: true,
  },
  {
    id: '9',
    title: 'A growing share of U.S. husbands and wives are roughly the same age',
    content: [
      {
        paragraphIdx: 0,
        paragraphContent: [
          {
            id: 'p0s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'The typical age gap between husbands and wives in the United States has narrowed over the past 20 years, continuing a 20th-century trend.',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of age gap',
                breakdown: 'age gap between husbands and wives',
                feature: 'age gap value',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p0s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'On average, husbands and wives were 2.2 years apart in age in 2022, according to a new Pew Research Center analysis of U.S. Census Bureau data. This is down from 2.4 years in 2000 and 4.9 years in 1880.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Age difference between husbands and wives',
                breakdown: '2022',
                feature: 'Age difference in years',
                valueValue: 2.2,
              },
              {
                space: 'Age difference between husbands and wives',
                breakdown: '2000',
                feature: 'Age difference in years',
                valueValue: 2.4,
              },
              {
                space: 'Age difference between husbands and wives',
                breakdown: '1880',
                feature: 'Age difference in years',
                valueValue: 4.9,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 1,
        paragraphContent: [
          {
            id: 'p1s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'A line chart showing that the age gap between U.S. husbands and wives has kept dropping in 21st century.',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of age gap',
                breakdown: 'age gap between U.S. husbands and wives',
                feature: 'age gap value',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 2,
        paragraphContent: [
          {
            id: 'p2s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Since 1880, the share of marriages in which the husband is several years older than the wife has fallen significantly.',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of marriages',
                breakdown: 'marriages in which the husband is several years older than the wife',
                feature: 'share of marriages',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p2s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'And since 2000, marriages where the wife is significantly older than the husband have also become more rare. (This analysis is limited to opposite-sex marriages in which the spouses live together.)',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of marriages',
                breakdown: 'marriages where the wife is significantly older than the husband',
                feature: 'frequency of occurrence',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 3,
        paragraphContent: [
          {
            id: 'p3s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'A stacked bar chart showing that about half of opposite-sex marriages in 2022 were between spouses who were roughly the same age.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of marriages',
                breakdown: 'opposite-sex marriages in 2022',
                feature: 'proportion of marriages',
                valueValue: 0.5,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 4,
        paragraphContent: [
          {
            id: 'p4s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'Overall, in 2022:',
            },
          },
        ],
      },
      {
        paragraphIdx: 5,
        paragraphContent: [
          {
            id: 'p5s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                '51% of opposite-sex marriages had spouses who were two years apart in age or less. This is up from 46% in 2000.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of opposite-sex marriages',
                breakdown: 'spouses age difference',
                feature: 'percentage of marriages',
                valueValue: 51,
              },
              {
                space: 'category of opposite-sex marriages',
                breakdown: 'spouses age difference',
                feature: 'percentage of marriages',
                valueValue: 46,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 6,
        paragraphContent: [
          {
            id: 'p6s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                '40% of marriages had a husband who was three or more years older than his wife. This is down from 43% in 2000.',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of marriages',
                breakdown: 'marriages with husband 3+ years older',
                feature: 'percentage of marriages',
                valueValue: 40,
              },
              {
                space: 'category of marriages',
                breakdown: 'marriages with husband 3+ years older',
                feature: 'percentage of marriages',
                valueValue: 43,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 7,
        paragraphContent: [
          {
            id: 'p7s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                '10% of marriages had a wife who was three or more years older than her husband. This share had been on the rise during the 20th century but is now down marginally from a peak of 11% in 2000.',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of marriages',
                breakdown: 'marriages with a wife three or more years older',
                feature: 'share of marriages',
                valueValue: 10,
              },
              {
                space: 'category of marriages',
                breakdown: 'marriages with a wife three or more years older',
                feature: 'peak share of marriages',
                valueValue: 11,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 8,
        paragraphContent: [
          {
            id: 'p8s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Not all family historians agree on how to define a “same-age” marriage. But whether we consider spouses of the same age to be those within two years of each other or four years, the historical trend is similar.',
              inSituPosition: [],
              attribute: undefined,
            },
            dataSpec: [
              {
                space: 'category of same-age marriage',
                breakdown: 'spouses within two years',
                feature: 'historical trend',
                valueValue: 100,
              },
              {
                space: 'category of same-age marriage',
                breakdown: 'spouses within four years',
                feature: 'historical trend',
                valueValue: 100,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 9,
        paragraphContent: [
          {
            id: 'p9s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'Who is most likely to be in a same-age marriage?',
            },
          },
        ],
      },
      {
        paragraphIdx: 10,
        paragraphContent: [
          {
            id: 'p10s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'Some people are more likely than others to be in a same-age marriage:',
            },
          },
        ],
      },
      {
        paragraphIdx: 11,
        paragraphContent: [
          {
            id: 'p11s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'More than half of husbands who have at least a bachelor’s degree (55%) are in a same-age marriage, compared with 48% of husbands with some college education or less.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of husbands with education level',
                breakdown: 'husbands with at least a bachelor’s degree',
                feature: 'percentage in same-age marriage',
                valueValue: 55,
              },
              {
                space: 'category of husbands with education level',
                breakdown: 'husbands with some college education or less',
                feature: 'percentage in same-age marriage',
                valueValue: 48,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 12,
        paragraphContent: [
          {
            id: 'p12s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Husbands in their first marriage are much more likely than husbands who have been married more than once to be roughly the same age as their wife (56% vs. 32%).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of marriage status',
                breakdown: 'first marriage',
                feature: 'percentage of husbands same age as wife',
                valueValue: 56,
              },
              {
                space: 'category of marriage status',
                breakdown: 'more than once married',
                feature: 'percentage of husbands same age as wife',
                valueValue: 32,
              },
            ],
          },
          {
            id: 'p12s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'And only 35% of husbands in their first marriage have a wife three or more years younger than them, compared with 56% of remarried husbands.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'type of marriage',
                breakdown: 'first marriage',
                feature: 'percentage of husbands with a wife three or more years younger',
                valueValue: 35,
              },
              {
                space: 'type of marriage',
                breakdown: 'remarried',
                feature: 'percentage of husbands with a wife three or more years younger',
                valueValue: 56,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 13,
        paragraphContent: [
          {
            id: 'p13s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'White husbands (53%) are more likely than Hispanic (46%), Black (45%) and Asian husbands (45%) to be in a same-age marriage.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: "Husband's Ethnicity",
                breakdown: 'White',
                feature: 'Likelihood of Same-Age Marriage',
                valueValue: 53,
              },
              {
                space: "Husband's Ethnicity",
                breakdown: 'Hispanic',
                feature: 'Likelihood of Same-Age Marriage',
                valueValue: 46,
              },
              {
                space: "Husband's Ethnicity",
                breakdown: 'Black',
                feature: 'Likelihood of Same-Age Marriage',
                valueValue: 45,
              },
              {
                space: "Husband's Ethnicity",
                breakdown: 'Asian',
                feature: 'Likelihood of Same-Age Marriage',
                valueValue: 45,
              },
            ],
          },
          {
            id: 'p13s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'And about half of Asian husbands (49%) have a wife who is three or more years younger. The shares are lower among Hispanic (42%), Black (43%) and White husbands (38%).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Race',
                breakdown: 'Asian',
                feature: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 49,
              },
              {
                space: 'Race',
                breakdown: 'Hispanic',
                feature: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 42,
              },
              {
                space: 'Race',
                breakdown: 'Black',
                feature: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 43,
              },
              {
                space: 'Race',
                breakdown: 'White',
                feature: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 38,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 14,
        paragraphContent: [
          {
            id: 'p14s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'The marriage patterns are similar when looking at the wife’s characteristics rather than the husband’s.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of marriage patterns',
                breakdown: "wife's characteristics",
                feature: 'similarity in marriage patterns',
                valueValue: 0,
              },
              {
                space: 'category of marriage patterns',
                breakdown: "husband's characteristics",
                feature: 'similarity in marriage patterns',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 15,
        paragraphContent: [
          {
            id: 'p15s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'Why do age gaps in marriage matter?',
            },
          },
        ],
      },
      {
        paragraphIdx: 16,
        paragraphContent: [
          {
            id: 'p16s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'A bar chart showing that husbands in first marriages are more likely than those who’ve been married more than once to be of similar age to their wife.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'marital status',
                breakdown: 'first marriage',
                feature: 'likelihood of similar age',
                valueValue: 0,
              },
              {
                space: 'marital status',
                breakdown: 'married more than once',
                feature: 'likelihood of similar age',
                valueValue: 30,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 17,
        paragraphContent: [
          {
            id: 'p17s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Large age differences between husbands and wives can have important consequences for the well-being of one of the spouses.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of age difference',
                breakdown: 'husbands and wives',
                feature: 'age difference value',
                valueValue: 0,
              },
              {
                space: 'category of age difference',
                breakdown: 'husbands and wives',
                feature: 'age difference value',
                valueValue: 30,
              },
            ],
          },
          {
            id: 'p17s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'For example, someone is more likely to end up widowed if their spouse is significantly older than them.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'marital status',
                breakdown: 'widowed',
                feature: 'likelihood',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 18,
        paragraphContent: [
          {
            id: 'p18s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'As the share of marriages where the husband is older than his wife has fallen, there’s also been a decline in widowhood among older women.',
              inSituPosition: [],
              attribute: 'negative',
            },
            dataSpec: [
              {
                space: 'category of marriages',
                breakdown: 'marriages where the husband is older than his wife',
                feature: 'share of marriages',
                valueValue: NaN,
              },
              {
                space: 'category of widowhood',
                breakdown: 'widowhood among older women',
                feature: 'rate of widowhood',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p18s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context: 'Today, 30% of women ages 65 and older are widows, down from 45% in 2000.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of widows',
                breakdown: 'women ages 65 and older',
                feature: 'percentage of widows',
                valueValue: 30,
              },
              {
                space: 'category of widows',
                breakdown: 'women ages 65 and older',
                feature: 'percentage of widows',
                valueValue: 45,
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: '1',
        text: 'Question 1: What was the average age difference between husbands and wives in 2000?',
        options: [
          { id: 'Option A', text: 'A. 2.2' },
          { id: 'Option B', text: 'B. 2.4' },
          { id: 'Option C', text: 'C. 3.6' },
          { id: 'Option D', text: 'D. 4.9' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: What is the change in the number of marriages with a husband three or more years older than the wife in 2022 compared to 2000?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: Which demographic group is more likely to be in a same-age marriage?',
        options: [
          { id: 'Option A', text: 'A. White' },
          { id: 'Option B', text: 'B. Black' },
          { id: 'Option C', text: 'C. Asian' },
          { id: 'Option D', text: 'D. Hispanic' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: As the proportion of marriages in which the husband is older than the wife declines, how does the rate of widowhood among older women change?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: true,
  },
  {
    id: '10',
    title: 'Online shopping has grown rapidly in U.S., but most sales are still in stores',
    content: [
      {
        paragraphIdx: 0,
        paragraphContent: [
          {
            id: 'p0s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context:
                'Thanksgiving – and, more specifically, Black Friday – is the semiofficial start of the holiday shopping season in the United States.',
            },
          },
          {
            id: 'p0s1',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 1,
              context:
                'And if history is any guide, a lot of this year’s holiday shopping will be done online, and not just on Cyber Monday.',
            },
          },
        ],
      },
      {
        paragraphIdx: 1,
        paragraphContent: [
          {
            id: 'p1s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Like retail sales generally, online shopping reliably surges in the fourth quarter of every year. In 2022, for example, online sales – or, as the U.S. Census Bureau calls them, “retail e-commerce sales” – totaled $303.1 billion in the October-December period.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of online sales',
                breakdown: 'retail e-commerce sales',
                feature: 'total online sales in the fourth quarter',
                valueValue: 303.1,
              },
            ],
          },
          {
            id: 'p1s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'That was 23.4% higher than the quarterly average for the first nine months of the year, which was $245.6 billion. (Figures in this analysis are not adjusted to account for seasonal variations.)',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'quarterly average',
                breakdown: 'first nine months of the year',
                feature: 'value in billion USD',
                valueValue: 245.6,
              },
              {
                space: 'current quarter',
                breakdown: 'current quarter',
                feature: 'value in billion USD',
                valueValue: 302.1704,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 2,
        paragraphContent: [
          {
            id: 'p2s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'But it’s not just the dollar volume of sales that peaks in the fourth quarter – the online share of all retail sales ticks higher at year’s end, too.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of retail sales',
                breakdown: 'online share',
                feature: 'share of all retail sales',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p2s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'In the fourth quarter of 2022, for instance, online sales accounted for 16.3% of all retail sales, compared with an average of 14.1% in the first three quarters.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of retail sales',
                breakdown: 'online sales',
                feature: 'proportion of retail sales',
                valueValue: 0.163,
              },
              {
                space: 'category of retail sales',
                breakdown: 'other retail sales',
                feature: 'proportion of retail sales',
                valueValue: 0.837,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 3,
        paragraphContent: [
          {
            id: 'p3s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'The fourth quarter of 2023 could be another big one for online shopping.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of online shopping',
                breakdown: 'online shopping',
                feature: 'growth in the fourth quarter of 2023',
                valueValue: 100,
              },
            ],
          },
          {
            id: 'p3s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'Through the first three quarters of the year, retail e-commerce totaled $793.7 billion, or 14.9% of all retail sales.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of retail sales',
                breakdown: 'retail e-commerce',
                feature: 'proportion of all retail sales',
                valueValue: 0.149,
              },
              {
                space: 'category of retail sales',
                breakdown: 'other retail sales',
                feature: 'proportion of all retail sales',
                valueValue: 0.851,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 4,
        paragraphContent: [
          {
            id: 'p4s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'Online sales have grown over time',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of online sales',
                breakdown: 'online sales',
                feature: 'growth rate of online sales',
                valueValue: 100,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 5,
        paragraphContent: [
          {
            id: 'p5s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Between 2000 and 2020, growth in online sales followed a predictable pattern. The online share of retail sales jumped in the fourth quarter and then fell back, but not all the way to where it had been. Then it jumped again, to an even higher level, in the fourth quarter of the following year.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'year',
                breakdown: '2000-2020',
                feature: 'online share of retail sales',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 6,
        paragraphContent: [
          {
            id: 'p6s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Two line charts showing that overall online sales leaped during the pandemic and so did the online share of total sales.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of sales',
                breakdown: 'online sales',
                feature: 'sales during pandemic',
                valueValue: NaN,
              },
              {
                space: 'category of sales',
                breakdown: 'online share of total sales',
                feature: 'share during pandemic',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 7,
        paragraphContent: [
          {
            id: 'p7s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'By such stepwise moves, the online share of total retail sales grew from 0.7% in the fourth quarter of 1999, when the U.S. Census Bureau began tracking online sales, to 12.4% in the fourth quarter of 2019.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'online share of total retail sales',
                breakdown: 'online share of total retail sales',
                feature: 'percentage of online sales',
                valueValue: 0.7,
              },
              {
                space: 'online share of total retail sales',
                breakdown: 'online share of total retail sales',
                feature: 'percentage of online sales',
                valueValue: 12.4,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 8,
        paragraphContent: [
          {
            id: 'p8s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'The COVID-19 pandemic that swept the globe disrupted that pattern, at least temporarily, beginning in early 2020. With many physical stores shuttered and millions of Americans sheltering in their homes, online sales soared.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of online sales',
                breakdown: 'online sales',
                feature: 'online sales rate',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p8s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'In the second quarter of 2020, for instance, e-commerce sales totaled $205.3 billion, up 55% from the $132.3 billion recorded a year earlier.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'time segment',
                breakdown: 'second quarter of 2020',
                feature: 'e-commerce sales',
                valueValue: 205.3,
              },
              {
                space: 'time segment',
                breakdown: 'second quarter of 2019',
                feature: 'e-commerce sales',
                valueValue: 132.3,
              },
            ],
          },
          {
            id: 'p8s2',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 2,
              context:
                'In the fourth quarter of 2020, e-commerce accounted for 16.7% of all retail sales, still the record-high share.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of retail sales',
                breakdown: 'e-commerce',
                feature: 'proportion of retail sales',
                valueValue: 0.167,
              },
              {
                space: 'category of retail sales',
                breakdown: 'other retail sales',
                feature: 'proportion of retail sales',
                valueValue: 0.833,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 9,
        paragraphContent: [
          {
            id: 'p9s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'That share fell back as stores reopened and consumers gradually resumed their old shopping habits. But the e-commerce share of all retail sales has remained well above pre-pandemic levels, suggesting that the COVID-19 outbreak gave online shopping a lasting boost.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of retail sales',
                breakdown: 'e-commerce share',
                feature: 'e-commerce share value',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p9s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context: 'In the fourth quarter of 2022, 16.3% of retail sales were online, compared with 16.1% in 2021.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of retail sales',
                breakdown: 'online sales',
                feature: 'percentage of retail sales',
                valueValue: 16.3,
              },
              {
                space: 'category of retail sales',
                breakdown: 'online sales',
                feature: 'percentage of retail sales',
                valueValue: 16.1,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 10,
        paragraphContent: [
          {
            id: 'p10s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context: 'Which retailers benefit most from online sales?',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'retailer category',
                breakdown: 'retailer',
                feature: 'online sales benefit',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 11,
        paragraphContent: [
          {
            id: 'p11s0',
            unitSegmentSpec: {
              insightType: 'extreme',
              segmentIdx: 0,
              context:
                'The retailers that are getting the highest share of online sales tend to be those without physical stores.',
              inSituPosition: ['highest share of online sales'],
              attribute: 'maximum',
            },
            dataSpec: [
              {
                space: 'category of retailers',
                breakdown: 'retailers without physical stores',
                feature: 'share of online sales',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 12,
        paragraphContent: [
          {
            id: 'p12s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Nonstore retailers, as the Census Bureau calls them, took nearly 62% of all retail e-commerce sales in the third quarter of 2023, versus just over 59% a year earlier.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Retail Category',
                breakdown: 'Nonstore retailers',
                feature: 'E-commerce Sales Proportion',
                valueValue: 0.62,
              },
              {
                space: 'Retail Category',
                breakdown: 'Other retailers',
                feature: 'E-commerce Sales Proportion',
                valueValue: 0.38,
              },
            ],
          },
          {
            id: 'p12s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'E-commerce sales at nonstore retailers rose 12.4% year over year, faster than the online sales sector as a whole.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of sales growth',
                breakdown: 'E-commerce sales at nonstore retailers',
                feature: 'year over year growth rate',
                valueValue: 12.4,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 13,
        paragraphContent: [
          {
            id: 'p13s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Among retailers that do have physical stores, online sales rose 8.7% at general merchandise stores, 5.1% at food and beverage stores, and 4.7% at health and personal care stores.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of sales increase',
                breakdown: 'general merchandise stores',
                feature: 'online sales increase rate',
                valueValue: 8.7,
              },
              {
                space: 'category of sales increase',
                breakdown: 'food and beverage stores',
                feature: 'online sales increase rate',
                valueValue: 5.1,
              },
              {
                space: 'category of sales increase',
                breakdown: 'health and personal care stores',
                feature: 'online sales increase rate',
                valueValue: 4.7,
              },
            ],
          },
          {
            id: 'p13s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'But online sales fell 1.6% at electronics and appliance stores, 3.2% at motor vehicle and parts dealers, and 16.2% at furniture and home furnishings stores.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of sales',
                breakdown: 'electronics and appliance stores',
                feature: 'sales percentage change',
                valueValue: -1.6,
              },
              {
                space: 'category of sales',
                breakdown: 'motor vehicle and parts dealers',
                feature: 'sales percentage change',
                valueValue: -3.2,
              },
              {
                space: 'category of sales',
                breakdown: 'furniture and home furnishings stores',
                feature: 'sales percentage change',
                valueValue: -16.2,
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: '1',
        text: 'Question 1: How do online shopping sales change in the fourth quarter of each year?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: What percentage of all retail sales will e-commerce account for in the fourth quarter of 2020?',
        options: [
          { id: 'Option A', text: 'A. 14.1%' },
          { id: 'Option B', text: 'B. 16.3%' },
          { id: 'Option C', text: 'C. 14.7%' },
          { id: 'Option D', text: 'D. 16.7%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What percentage of all retail e-commerce sales did non-store retailers account for in Q3 2023?',
        options: [
          { id: 'Option A', text: 'A. 62%' },
          { id: 'Option B', text: 'B. 59%' },
          { id: 'Option C', text: 'C. 49%' },
          { id: 'Option D', text: 'D. 32%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: Among retailers with brick-and-mortar shops, what is the difference between the growth rates of online sales in general merchandise stores and food and beverage shops?',
        options: [
          { id: 'Option A', text: 'A. 4.2%' },
          { id: 'Option B', text: 'B. 2.7%' },
          { id: 'Option C', text: 'C. 3.6%' },
          { id: 'Option D', text: 'D. 4.0%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5： Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: true,
  },
  {
    id: '11',
    title: '71% of Asian restaurants in the U.S. serve Chinese, Japanese or Thai food',
    content: [
      {
        paragraphIdx: 0,
        paragraphContent: [
          {
            id: 'p0s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Some 12% of all restaurants in the United States serve Asian food, according to a new Pew Research Center analysis.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of restaurants in the United States',
                breakdown: 'Asian food serving restaurants',
                feature: 'proportion of all restaurants',
                valueValue: 0.12,
              },
              {
                space: 'category of restaurants in the United States',
                breakdown: 'Other restaurants',
                feature: 'proportion of all restaurants',
                valueValue: 0.88,
              },
            ],
          },
          {
            id: 'p0s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context: 'That share is slightly higher than the 7% of the U.S. population that is Asian American.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of population',
                breakdown: 'Asian American',
                feature: 'percentage of population',
                valueValue: 7,
              },
              {
                space: 'category of population',
                breakdown: 'other population',
                feature: 'percentage of population',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 1,
        paragraphContent: [
          {
            id: 'p1s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'A bar chart showing that 71% of Asian restaurants in the U.S. serve Chinese, Japanese or Thai food.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Type of Food',
                breakdown: 'Chinese',
                feature: 'Proportion of Asian Restaurants',
                valueValue: 0.71,
              },
              {
                space: 'Type of Food',
                breakdown: 'Japanese',
                feature: 'Proportion of Asian Restaurants',
                valueValue: 0.71,
              },
              {
                space: 'Type of Food',
                breakdown: 'Thai',
                feature: 'Proportion of Asian Restaurants',
                valueValue: 0.71,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 2,
        paragraphContent: [
          {
            id: 'p2s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Around seven-in-ten of all Asian restaurants in the U.S. serve the food of just three Asian origin groups: Chinese, Japanese and Thai.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Asian origin groups',
                breakdown: 'Chinese',
                feature: 'Proportion of Asian restaurants',
                valueValue: 0.3,
              },
              {
                space: 'Asian origin groups',
                breakdown: 'Japanese',
                feature: 'Proportion of Asian restaurants',
                valueValue: 0.3,
              },
              {
                space: 'Asian origin groups',
                breakdown: 'Thai',
                feature: 'Proportion of Asian restaurants',
                valueValue: 0.3,
              },
              {
                space: 'Asian origin groups',
                breakdown: 'Other',
                feature: 'Proportion of Asian restaurants',
                valueValue: 0.1,
              },
            ],
          },
          {
            id: 'p2s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context: 'These groups together comprise 33% of the U.S. Asian population.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'the category of U.S. Asian population',
                breakdown: 'These groups',
                feature: 'the proportion of U.S. Asian population',
                valueValue: 0.33,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 3,
        paragraphContent: [
          {
            id: 'p3s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context:
                'Here are some other key takeaways from the analysis, which is based on data from SafeGraph, a data company that curates high-precision data on millions of places around the globe.',
            },
          },
        ],
      },
      {
        paragraphIdx: 4,
        paragraphContent: [
          {
            id: 'p4s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Chinese establishments are by far the most common type of Asian restaurant in the U.S. Nearly four-in-ten Asian restaurants (39%) serve Chinese food, which has a long history in the U.S.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'type of Asian restaurant',
                breakdown: 'Chinese food',
                feature: 'proportion of Asian restaurants serving Chinese food',
                valueValue: 0.39,
              },
              {
                space: 'type of Asian restaurant',
                breakdown: 'Other Asian food',
                feature: 'proportion of Asian restaurants serving other Asian food',
                valueValue: 0.61,
              },
            ],
          },
          {
            id: 'p4s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'By comparison, Chinese Americans account for about a quarter of Asians living in the U.S. (24%).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of Asians living in the U.S.',
                breakdown: 'Chinese Americans',
                feature: 'proportion of Asians living in the U.S.',
                valueValue: 0.24,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 5,
        paragraphContent: [
          {
            id: 'p5s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Japanese and Thai food has spread widely, despite these groups’ relatively small shares of the U.S. population.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'type of food',
                breakdown: 'Japanese food',
                feature: 'share of U.S. population',
                valueValue: 0,
              },
              {
                space: 'type of food',
                breakdown: 'Thai food',
                feature: 'share of U.S. population',
                valueValue: 0,
              },
            ],
          },
          {
            id: 'p5s1',
            unitSegmentSpec: {
              insightType: 'rank',
              segmentIdx: 1,
              context:
                'The first sushi restaurant in the U.S. opened just over 50 years ago, but today sushi is widely available from coast to coast.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: '',
                breakdown: '',
                feature: '',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p5s2',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 2,
              context:
                'Restaurants that serve Japanese food account for 28% of Asian restaurants in the U.S., making it the second-most common Asian cuisine.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of Asian restaurants in the U.S.',
                breakdown: 'Japanese food',
                feature: 'proportion of Asian restaurants',
                valueValue: 0.28,
              },
            ],
          },
          {
            id: 'p5s3',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 3,
              context:
                'Japanese Americans, by comparison, are the sixth-largest Asian origin group in the country, comprising 7% of the U.S. Asian population.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'population category',
                breakdown: 'Japanese Americans',
                feature: 'proportion of U.S. Asian population',
                valueValue: 0.07,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 6,
        paragraphContent: [
          {
            id: 'p6s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Similarly, Thai establishments make up 11% of all Asian restaurants – the third-most common cuisine behind Chinese and Japanese food – while just 2% of Asian Americans are Thai.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'cuisine type',
                breakdown: 'Thai',
                feature: 'proportion of all Asian restaurants',
                valueValue: 0.11,
              },
              {
                space: 'ethnicity',
                breakdown: 'Thai',
                feature: 'proportion of Asian Americans',
                valueValue: 0.02,
              },
            ],
          },
          {
            id: 'p6s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'The Thai government has historically supported efforts to increase the number of Thai restaurants around the world as a form of diplomacy.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of diplomacy',
                breakdown: 'Thai restaurants',
                feature: 'number of Thai restaurants',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 7,
        paragraphContent: [
          {
            id: 'p7s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Indian and Filipino establishments account for a relatively small share of Asian restaurants. Indian and Filipino restaurants account for 7% and 1% of all Asian restaurants in the U.S., respectively – even though Indian and Filipino Americans account for nearly 40% of Asians in the U.S. combined.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of Asian restaurants',
                breakdown: 'Indian restaurants',
                feature: 'proportion of Asian restaurants in the U.S.',
                valueValue: 0.07,
              },
              {
                space: 'category of Asian restaurants',
                breakdown: 'Filipino restaurants',
                feature: 'proportion of Asian restaurants in the U.S.',
                valueValue: 0.01,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 8,
        paragraphContent: [
          {
            id: 'p8s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Like the Asian American population, Asian restaurants in the U.S. are heavily concentrated in a few states. More than half of U.S. Asians (55%) live in five states: California, New York, Texas, New Jersey and Washington.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'state',
                breakdown: 'California',
                feature: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                space: 'state',
                breakdown: 'New York',
                feature: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                space: 'state',
                breakdown: 'Texas',
                feature: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                space: 'state',
                breakdown: 'New Jersey',
                feature: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                space: 'state',
                breakdown: 'Washington',
                feature: 'Asian American population proportion',
                valueValue: 0.11,
              },
            ],
          },
          {
            id: 'p8s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context: 'And just under half of all Asian restaurants – 45% – are located in those five states.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'location category',
                breakdown: 'five states',
                feature: 'proportion of Asian restaurants',
                valueValue: 0.45,
              },
              {
                space: 'location category',
                breakdown: 'other states',
                feature: 'proportion of Asian restaurants',
                valueValue: 0.55,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 9,
        paragraphContent: [
          {
            id: 'p9s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'More than 15% of all restaurants in Hawaii, California, Washington, Nevada and New York serve Asian food, and each state has a significant Asian American population.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'State',
                breakdown: 'Hawaii, California, Washington, Nevada, New York',
                feature: 'Proportion of Restaurants Serving Asian Food',
                valueValue: 0.15,
              },
            ],
          },
          {
            id: 'p9s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'Meanwhile, Asian restaurants account for 6% of all restaurants in Montana, North Dakota, South Dakota and West Virginia.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of restaurants',
                breakdown: 'Asian restaurants',
                feature: 'proportion of all restaurants',
                valueValue: 0.06,
              },
              {
                space: 'category of restaurants',
                breakdown: 'Other restaurants',
                feature: 'proportion of all restaurants',
                valueValue: 0.94,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 10,
        paragraphContent: [
          {
            id: 'p10s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Around three-quarters of all counties in the U.S. (73%) have at least one Asian restaurant of any kind.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of counties in the U.S.',
                breakdown: 'counties with at least one Asian restaurant',
                feature: 'proportion of counties with at least one Asian restaurant',
                valueValue: 0.73,
              },
              {
                space: 'category of counties in the U.S.',
                breakdown: 'counties without any Asian restaurant',
                feature: 'proportion of counties without any Asian restaurant',
                valueValue: 0.27,
              },
            ],
          },
          {
            id: 'p10s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'And in eight counties with at least 15 restaurants of any type, Asian restaurants make up at least a quarter of all food establishments. Half of those counties are in California.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'type of restaurant',
                breakdown: 'Asian restaurants',
                feature: 'proportion of food establishments',
                valueValue: 0.25,
              },
              {
                space: 'location',
                breakdown: 'California',
                feature: 'proportion of counties',
                valueValue: 0.5,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 11,
        paragraphContent: [
          {
            id: 'p11s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'A map of the U.S. that shows in eight counties, at least one-in-four restaurants serve Asian food.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of restaurants',
                breakdown: 'Asian food',
                feature: 'proportion of restaurants serving Asian food',
                valueValue: 0.25,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 12,
        paragraphContent: [
          {
            id: 'p12s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context: 'Chinese restaurants are found in every state and in 70% of all U.S. counties.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of U.S. counties',
                breakdown: 'Chinese restaurants',
                feature: 'proportion of U.S. counties',
                valueValue: 0.7,
              },
              {
                space: 'category of U.S. counties',
                breakdown: 'Other restaurants',
                feature: 'proportion of U.S. counties',
                valueValue: 0.3,
              },
            ],
          },
          {
            id: 'p12s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'Every state and a third or more of all counties also have at least one Japanese (45%) or Thai (33%) restaurant.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'restaurant type',
                breakdown: 'Japanese',
                feature: 'proportion of restaurants',
                valueValue: 0.45,
              },
              {
                space: 'restaurant type',
                breakdown: 'Thai',
                feature: 'proportion of restaurants',
                valueValue: 0.33,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 13,
        paragraphContent: [
          {
            id: 'p13s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'However, restaurants serving other types of Asian food are less widely distributed. Around one-in-five U.S. counties have Vietnamese and Indian restaurants, and fewer than 10% of counties have Filipino, Pakistani, Mongolian or Burmese restaurants.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'type of Asian food',
                breakdown: 'Vietnamese and Indian',
                feature: 'percentage of U.S. counties',
                valueValue: 20,
              },
              {
                space: 'type of Asian food',
                breakdown: 'Filipino, Pakistani, Mongolian, Burmese',
                feature: 'percentage of U.S. counties',
                valueValue: 10,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 14,
        paragraphContent: [
          {
            id: 'p14s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context:
                'Multiple maps of the U.S. that show restaurants serving Asian cuisines are found across the United States.',
            },
          },
        ],
      },
      {
        paragraphIdx: 15,
        paragraphContent: [
          {
            id: 'p15s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context: 'Some 9% of Asian restaurants in the U.S. offer cuisines from multiple Asian origin groups.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of Asian restaurants in the U.S.',
                breakdown: 'Asian restaurants offering cuisines from multiple origin groups',
                feature: 'proportion of Asian restaurants in the U.S. offering cuisines from multiple origin groups',
                valueValue: 0.09,
              },
              {
                space: 'category of Asian restaurants in the U.S.',
                breakdown: 'Asian restaurants not offering cuisines from multiple origin groups',
                feature:
                  'proportion of Asian restaurants in the U.S. not offering cuisines from multiple origin groups',
                valueValue: 0.91,
              },
            ],
          },
          {
            id: 'p15s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'Nearly seven in every 10 of these establishments are combinations of Chinese or Japanese food, either with each other (36%) or with some other cuisine: 18% serve Chinese and Thai food, 15% serve Japanese and Thai food and 10% serve Japanese and Korean food.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Type of Establishment',
                breakdown: 'Chinese and Japanese food combinations',
                feature: 'Percentage of Establishments',
                valueValue: 36,
              },
              {
                space: 'Type of Establishment',
                breakdown: 'Chinese and Thai food',
                feature: 'Percentage of Establishments',
                valueValue: 18,
              },
              {
                space: 'Type of Establishment',
                breakdown: 'Japanese and Thai food',
                feature: 'Percentage of Establishments',
                valueValue: 15,
              },
              {
                space: 'Type of Establishment',
                breakdown: 'Japanese and Korean food',
                feature: 'Percentage of Establishments',
                valueValue: 10,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 16,
        paragraphContent: [
          {
            id: 'p16s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'However, these relationships are not always symmetrical.',
            },
          },
          {
            id: 'p16s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'For instance, 78% of Pakistani restaurants in the U.S. also serve Indian food, but just 10% of Indian restaurants serve Pakistani food.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'type of restaurant',
                breakdown: 'Pakistani restaurants in the U.S.',
                feature: 'proportion serving Indian food',
                valueValue: 0.78,
              },
              {
                space: 'type of restaurant',
                breakdown: 'Indian restaurants in the U.S.',
                feature: 'proportion serving Pakistani food',
                valueValue: 0.1,
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: '1',
        text: 'Question 1: What is the approximate percentage of Chinese Americans among Asians living in the United States?',
        options: [
          { id: 'Option A', text: 'A. 33%' },
          { id: 'Option B', text: 'B. 39%' },
          { id: 'Option C', text: 'C. 24%' },
          { id: 'Option D', text: 'D. 12%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: Which of the following states has a high concentration of Asian restaurants in the United States?',
        options: [
          { id: 'Option A', text: 'A. Texas' },
          { id: 'Option B', text: 'B. Hawaii' },
          { id: 'Option C', text: 'C. Nevada' },
          { id: 'Option D', text: 'D. Dakota' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What is the percentage of Chinese restaurants that are located in each county in the United States of America?',
        options: [
          { id: 'Option A', text: 'A. 73%' },
          { id: 'Option B', text: 'B. 70%' },
          { id: 'Option C', text: 'C. 45%' },
          { id: 'Option D', text: 'D. 33%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: 'Question 4: Which of the following combinations is the second most common cuisine in Asian restaurants in the United States?',
        options: [
          { id: 'Option A', text: 'A. Chinese and Japanese food' },
          { id: 'Option B', text: 'B. Chinese and Thai food' },
          { id: 'Option C', text: 'C. Japanese and Thai food' },
          { id: 'Option D', text: 'D. Japanese and Korean food' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5: Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: true,
  },
  {
    id: '12',
    title: 'Black voters support Harris over Trump and Kennedy by a wide margin',
    content: [
      {
        paragraphIdx: 0,
        paragraphContent: [
          {
            id: 'p0s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Black registered voters overwhelmingly support Vice President Kamala Harris over former President Donald Trump and Robert F. Kennedy Jr. in the presidential race.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'candidate',
                breakdown: 'Kamala Harris',
                feature: 'support rate',
                valueValue: 0,
              },
              {
                space: 'candidate',
                breakdown: 'Donald Trump',
                feature: 'support rate',
                valueValue: 0,
              },
              {
                space: 'candidate',
                breakdown: 'Robert F. Kennedy Jr.',
                feature: 'support rate',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 1,
        paragraphContent: [
          {
            id: 'p1s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'A diverging bar chart showing that most Black voters favor Kamala Harris over Donald Trump and Robert F. Kennedy Jr.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Candidate Preference',
                breakdown: 'Kamala Harris',
                feature: 'Voter Preference',
                valueValue: 0,
              },
              {
                space: 'Candidate Preference',
                breakdown: 'Donald Trump',
                feature: 'Voter Preference',
                valueValue: -30,
              },
              {
                space: 'Candidate Preference',
                breakdown: 'Robert F. Kennedy Jr.',
                feature: 'Voter Preference',
                valueValue: -30,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 2,
        paragraphContent: [
          {
            id: 'p2s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'About three-quarters of Black voters (77%) say they would vote for or lean toward Harris if the 2024 presidential election were held today. Another 13% say they would back or lean toward Trump. Just 7% would support or lean toward Kennedy, according to a Pew Research Center survey of U.S. adults conducted Aug. 5-11 (before the start of the Democratic National Convention).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Candidate Preference',
                breakdown: 'Harris',
                feature: 'Proportion of Black Voters',
                valueValue: 0.77,
              },
              {
                space: 'Candidate Preference',
                breakdown: 'Trump',
                feature: 'Proportion of Black Voters',
                valueValue: 0.13,
              },
              {
                space: 'Candidate Preference',
                breakdown: 'Kennedy',
                feature: 'Proportion of Black Voters',
                valueValue: 0.07,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 3,
        paragraphContent: [
          {
            id: 'p3s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'Black voters’ support for the top of the Democratic ticket has increased over the past month.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of support',
                breakdown: "Black voters' support for the top of the Democratic ticket",
                feature: 'support rate',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p3s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context:
                'In July, before President Joe Biden withdrew from the race and endorsed Harris, 64% of Black voters supported Biden.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'the category of voters',
                breakdown: 'Black voters',
                feature: 'the support rate for Biden',
                valueValue: 0.64,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 4,
        paragraphContent: [
          {
            id: 'p4s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context:
                'Meanwhile, the share of Black voters who say they support Trump has not changed, and the share who prefer Kennedy has fallen from 21% to 7%.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Voter Support Category',
                breakdown: 'Black Voters Supporting Trump',
                feature: 'Proportion of Black Voters',
                valueValue: 0.75,
              },
              {
                space: 'Voter Support Category',
                breakdown: 'Black Voters Supporting Kennedy',
                feature: 'Proportion of Black Voters',
                valueValue: 0.25,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 5,
        paragraphContent: [
          {
            id: 'p5s0',
            unitSegmentSpec: {
              insightType: 'noType',
              segmentIdx: 0,
              context: 'How we did this',
            },
          },
        ],
      },
      {
        paragraphIdx: 6,
        paragraphContent: [
          {
            id: 'p6s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context: 'Demographic differences in Black voters’ support for Harris',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Demographic',
                breakdown: 'Black voters',
                feature: 'Support for Harris',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 7,
        paragraphContent: [
          {
            id: 'p7s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Black voters differ by age in their support for Harris. While 86% of Black voters 50 and older back her, a smaller share of Black voters 18 to 49 (68%) say the same.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'age group',
                breakdown: 'Black voters 50 and older',
                feature: 'support for Harris',
                valueValue: 86,
              },
              {
                space: 'age group',
                breakdown: 'Black voters 18 to 49',
                feature: 'support for Harris',
                valueValue: 68,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 8,
        paragraphContent: [
          {
            id: 'p8s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context: 'These age differences are consistent with those for Biden in an April 2024 survey.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Survey Entity',
                breakdown: 'Biden',
                feature: 'Age Difference',
                valueValue: 0,
              },
              {
                space: 'Survey Entity',
                breakdown: 'April 2024 Survey',
                feature: 'Age Difference',
                valueValue: 30,
              },
            ],
          },
          {
            id: 'p8s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'However, this is different from the pattern among registered voters of all races and ethnicities, where support for Harris is slightly higher among those 18 to 49 (49%) than those 50 and older (44%).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'age group',
                breakdown: '18 to 49',
                feature: 'support for Harris',
                valueValue: 49,
              },
              {
                space: 'age group',
                breakdown: '50 and older',
                feature: 'support for Harris',
                valueValue: 44,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 9,
        paragraphContent: [
          {
            id: 'p9s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Black voters with college degrees are also more likely than those without degrees to support Harris (84% vs. 74%).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Black voters with',
                breakdown: 'college degrees',
                feature: 'support for Harris',
                valueValue: 84,
              },
              {
                space: 'Black voters with',
                breakdown: 'without degrees',
                feature: 'support for Harris',
                valueValue: 74,
              },
            ],
          },
          {
            id: 'p9s1',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 1,
              context:
                'This is similar to the pattern for voters overall, where Harris gets more support from college graduates (56%) than she does from those without bachelor’s degrees (41%).',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of education level',
                breakdown: 'college graduates',
                feature: 'support percentage for Harris',
                valueValue: 56,
              },
              {
                space: 'category of education level',
                breakdown: 'those without bachelor’s degrees',
                feature: 'support percentage for Harris',
                valueValue: 41,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 10,
        paragraphContent: [
          {
            id: 'p10s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'In contrast, there are no significant differences by gender in Black voters’ support for Harris.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'support for Harris',
                valueValue: 0,
              },
              {
                space: 'category of voters',
                breakdown: 'Black voters by gender',
                feature: 'support for Harris',
                valueValue: 0,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 11,
        paragraphContent: [
          {
            id: 'p11s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'More Black voters view Harris favorably now than in the spring',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'view Harris favorably',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 12,
        paragraphContent: [
          {
            id: 'p12s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'A line chart showing that Harris’ favorability among Black voters has improved.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'favorability rating',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 13,
        paragraphContent: [
          {
            id: 'p13s0',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 0,
              context: 'About eight-in-ten Black voters (79%) have a favorable opinion of Harris,',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Demographic Group',
                breakdown: 'Black voters',
                feature: 'Favorability of Harris',
                valueValue: 0.79,
              },
            ],
          },
          {
            id: 'p13s1',
            unitSegmentSpec: {
              insightType: 'proportion',
              segmentIdx: 1,
              context: 'and a similar share (80%) are happy that she is now the Democratic nominee for president.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'share of sentiment',
                breakdown: 'happy',
                feature: 'proportion of sentiment',
                valueValue: 0.8,
              },
              {
                space: 'share of sentiment',
                breakdown: 'other',
                feature: 'proportion of sentiment',
                valueValue: 0.2,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 14,
        paragraphContent: [
          {
            id: 'p14s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'While the shares of Black voters who have a favorable view of Biden (68%) and Trump (14%) have held relatively steady since July 2023,',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'favorable view of Biden',
                valueValue: 68,
              },
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'favorable view of Trump',
                valueValue: 14,
              },
            ],
          },
          {
            id: 'p14s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context: 'the share who have a positive view of Harris has increased.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of view',
                breakdown: 'Harris',
                feature: 'percentage of positive views',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 15,
        paragraphContent: [
          {
            id: 'p15s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Roughly two-thirds of Black voters had a favorable view of Harris in July 2023 (65%) and May 2024 (67%). This share increased to 79% in August 2024, after Harris rose to the top of the Democratic ticket.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'Time Segment',
                breakdown: 'July 2023',
                feature: 'Favorable View Percentage',
                valueValue: 65,
              },
              {
                space: 'Time Segment',
                breakdown: 'May 2024',
                feature: 'Favorable View Percentage',
                valueValue: 67,
              },
              {
                space: 'Time Segment',
                breakdown: 'August 2024',
                feature: 'Favorable View Percentage',
                valueValue: 79,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 16,
        paragraphContent: [
          {
            id: 'p16s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Some groups of Black voters have had particularly large shifts in opinion over the past few months:',
              inSituPosition: [],
              attribute: undefined,
            },
            dataSpec: [
              {
                space: 'category of opinion shift',
                breakdown: 'Black voters',
                feature: 'opinion shift rate',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 17,
        paragraphContent: [
          {
            id: 'p17s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                'Women: 67% of Black women had a favorable opinion of Harris in May, compared with 82% in August.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'Opinion of Harris among Women',
                breakdown: 'Black women',
                feature: 'Favorable opinion percentage',
                valueValue: 67,
              },
              {
                space: 'Opinion of Harris among Women',
                breakdown: 'Black women',
                feature: 'Favorable opinion percentage',
                valueValue: 82,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 18,
        paragraphContent: [
          {
            id: 'p18s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Younger adults: 52% of Black voters ages 18 to 49 viewed Harris favorably in May. By August, 70% did.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'Age Group',
                breakdown: 'Black voters ages 18 to 49',
                feature: 'Favorability of Harris',
                valueValue: 52,
              },
              {
                space: 'Age Group',
                breakdown: 'Black voters ages 18 to 49',
                feature: 'Favorability of Harris',
                valueValue: 70,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 19,
        paragraphContent: [
          {
            id: 'p19s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Those with college degrees: Harris’ favorability ratings among Black voters with college degrees rose by 20 points from May to August (62% vs. 82%).',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters with college degrees',
                feature: 'favorability ratings',
                valueValue: 82,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 20,
        paragraphContent: [
          {
            id: 'p20s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'However, the increase in positive views of Harris is not limited to Black voters.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'positive views increase',
                valueValue: 100,
              },
            ],
          },
          {
            id: 'p20s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'Her favorability ratings have also increased since May among Democrats and Democratic leaners overall.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of favorability ratings',
                breakdown: 'Democrats and Democratic leaners',
                feature: 'favorability ratings',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 21,
        paragraphContent: [
          {
            id: 'p21s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context: 'More Black voters are motivated to vote now than last month',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters',
                feature: 'motivation to vote',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 22,
        paragraphContent: [
          {
            id: 'p22s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Many voters across demographic and political groups have become more motivated to cast a ballot since July.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'demographic and political groups',
                breakdown: 'voters',
                feature: 'motivation to cast a ballot',
                valueValue: NaN,
              },
            ],
          },
          {
            id: 'p22s1',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 1,
              context:
                'Among Black voters specifically, the share who were extremely or very motivated to vote rose from 56% in July to 67% in August.',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'Time Segment',
                breakdown: 'July',
                feature: 'Motivation Level Among Black Voters',
                valueValue: 56,
              },
              {
                space: 'Time Segment',
                breakdown: 'August',
                feature: 'Motivation Level Among Black Voters',
                valueValue: 67,
              },
            ],
          },
          {
            id: 'p22s2',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 2,
              context: 'Once again, women and those with college degrees had particularly large increases:',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of demographic',
                breakdown: 'women',
                feature: 'increase rate',
                valueValue: NaN,
              },
              {
                space: 'category of education',
                breakdown: 'college degrees',
                feature: 'increase rate',
                valueValue: NaN,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 23,
        paragraphContent: [
          {
            id: 'p23s0',
            unitSegmentSpec: {
              insightType: 'comparison',
              segmentIdx: 0,
              context:
                '51% of Black women said they were extremely or very motivated to vote in July, compared with 67% in August.',
              inSituPosition: [],
            },
            dataSpec: [
              {
                space: 'time period',
                breakdown: 'July',
                feature: 'motivation level of Black women to vote',
                valueValue: 51,
              },
              {
                space: 'time period',
                breakdown: 'August',
                feature: 'motivation level of Black women to vote',
                valueValue: 67,
              },
            ],
          },
        ],
      },
      {
        paragraphIdx: 24,
        paragraphContent: [
          {
            id: 'p24s0',
            unitSegmentSpec: {
              insightType: 'trend',
              segmentIdx: 0,
              context:
                'Motivation to vote rose by almost 20 points from July to August among Black voters with college degrees (63% vs. 81%).',
              inSituPosition: [],
              attribute: 'positive',
            },
            dataSpec: [
              {
                space: 'category of voters',
                breakdown: 'Black voters with college degrees',
                feature: 'motivation to vote',
                valueValue: 63,
              },
              {
                space: 'category of voters',
                breakdown: 'Black voters with college degrees',
                feature: 'motivation to vote',
                valueValue: 81,
              },
            ],
          },
        ],
      },
    ],
    questions: [
      {
        id: '1',
        text: 'Question 1: How has black support for the Democratic frontrunners changed over the past month?',
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '2',
        text: 'Question 2: Which of the following information about black voter support for Harris is true?',
        options: [
          {
            id: 'Option A',
            text: 'A. Black voters aged 50 and over support her more than black voters aged 18-49.',
          },
          {
            id: 'Option B',
            text: 'B. Black voters without a degree support her more than black voters with a college degree.',
          },
          {
            id: 'Option C',
            text: 'C. Female black voters support her more than male black voters do.',
          },
          {
            id: 'Option D',
            text: 'D. Black voters with regular jobs support her more than black voters with freelance jobs.',
          },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '3',
        text: 'Question 3: What percentage of black voters have a favourable opinion of Harris?',
        options: [
          { id: 'Option A', text: 'A. 56%' },
          { id: 'Option B', text: 'B. 41%' },
          { id: 'Option C', text: 'C. 79%' },
          { id: 'Option D', text: 'D. 80%' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '4',
        text: "Question 4: How has Harris'support among Democrats and Democratic leaners changed since May?",
        options: [
          { id: 'Option A', text: 'A. increase' },
          { id: 'Option B', text: 'B. remain the same' },
          { id: 'Option C', text: 'C. decrease' },
          { id: 'Option D', text: 'D. not sure' },
        ],
        selected: null,
        questionType: 'choice',
      },
      {
        id: '5',
        text: 'Question 5: Summarize the general idea of this article',
        options: [],
        selected: null,
        questionType: 'open',
      },
    ],
    processed: true,
  },
];
