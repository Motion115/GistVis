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
                categoryKey: 'time segment',
                categoryValue: '2024',
                valueKey: 'number of Americans ages 100 and older',
                valueValue: 101000,
              },
              {
                categoryKey: 'time segment',
                categoryValue: '2054',
                valueKey: 'number of Americans ages 100 and older',
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
                categoryKey: 'category of population',
                categoryValue: 'Centenarians',
                valueKey: 'percentage of overall U.S. population',
                valueValue: 0.03,
              },
              {
                categoryKey: 'category of population',
                categoryValue: 'Centenarians',
                valueKey: 'projected percentage of overall U.S. population in 2054',
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
                categoryKey: 'category of centenarians',
                categoryValue: 'centenarians in the United States',
                valueKey: 'number of centenarians',
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
                categoryKey: 'year of census',
                categoryValue: 'prior to 1990',
                valueKey: 'error in census counts of centenarians',
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
                categoryKey: 'category of population growth',
                categoryValue: 'U.S. centenarian population',
                valueKey: 'population growth rate',
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
                categoryKey: 'age group',
                categoryValue: 'centenarians',
                valueKey: 'population count',
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
                categoryKey: 'demographic group',
                categoryValue: 'women',
                valueKey: 'proportion in population',
                valueValue: NaN,
              },
              {
                categoryKey: 'demographic group',
                categoryValue: 'White adults',
                valueKey: 'proportion in population',
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
                categoryKey: 'category of shares',
                categoryValue: 'shares',
                valueKey: 'value of shares',
                valueValue: 100,
              },
              {
                categoryKey: 'category of shares',
                categoryValue: 'projected shares',
                valueKey: 'value of shares',
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
                categoryKey: 'Gender',
                categoryValue: 'Women',
                valueKey: 'Proportion of Centenarians',
                valueValue: 0.78,
              },
              {
                categoryKey: 'Gender',
                categoryValue: 'Men',
                valueKey: 'Proportion of Centenarians',
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
                categoryKey: 'gender',
                categoryValue: 'women',
                valueKey: 'proportion of centenarians',
                valueValue: 0.68,
              },
              {
                categoryKey: 'gender',
                categoryValue: 'men',
                valueKey: 'proportion of centenarians',
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
                categoryKey: 'Race',
                categoryValue: 'White',
                valueKey: 'Proportion of centenarians',
                valueValue: 0.77,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Black',
                valueKey: 'Proportion of centenarians',
                valueValue: 0.08,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Asian',
                valueKey: 'Proportion of centenarians',
                valueValue: 0.07,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Hispanic',
                valueKey: 'Proportion of centenarians',
                valueValue: 0.06,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Multiracial',
                valueKey: 'Proportion of centenarians',
                valueValue: 0.01,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'American Indian or Alaska Native',
                valueKey: 'Proportion of centenarians',
                valueValue: 0.01,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Native Hawaiian or other Pacific Islander',
                valueKey: 'Proportion of centenarians',
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
                categoryKey: 'racial category',
                categoryValue: 'White adults',
                valueKey: 'proportion of centenarians',
                valueValue: 0.72,
              },
              {
                categoryKey: 'racial category',
                categoryValue: 'Asian adults',
                valueKey: 'proportion of centenarians',
                valueValue: 0.05,
              },
              {
                categoryKey: 'racial category',
                categoryValue: 'Hispanic adults',
                valueKey: 'proportion of centenarians',
                valueValue: 0.11,
              },
              {
                categoryKey: 'racial category',
                categoryValue: 'Black adults',
                valueKey: 'proportion of centenarians',
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
                categoryKey: 'category of population age',
                categoryValue: 'U.S. population',
                valueKey: 'population age trend',
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
                categoryKey: 'age group',
                categoryValue: 'adults ages 65 and older',
                valueKey: 'population proportion',
                valueValue: 0.18,
              },
              {
                categoryKey: 'age group',
                categoryValue: 'other adults',
                valueKey: 'population proportion',
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
                categoryKey: 'age group',
                categoryValue: '65-and-older',
                valueKey: 'percentage of older Americans',
                valueValue: 0.2,
              },
              {
                categoryKey: 'age group',
                categoryValue: '65-and-older',
                valueKey: 'percentage of older Americans',
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
                categoryKey: 'population category',
                categoryValue: 'centenarians',
                valueKey: 'population count',
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
                categoryKey: 'category of centenarian population',
                categoryValue: 'U.S.',
                valueKey: 'centenarian population estimate',
                valueValue: 108000,
              },
              {
                categoryKey: 'category of centenarian population',
                categoryValue: 'U.S. (Census Bureau)',
                valueKey: 'centenarian population estimate',
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
                categoryKey: 'country',
                categoryValue: 'Japan',
                valueKey: 'number of people in their 100s',
                valueValue: 146000,
              },
              {
                categoryKey: 'country',
                categoryValue: 'China',
                valueKey: 'number of people in their 100s',
                valueValue: 60000,
              },
              {
                categoryKey: 'country',
                categoryValue: 'India',
                valueKey: 'number of people in their 100s',
                valueValue: 48000,
              },
              {
                categoryKey: 'country',
                categoryValue: 'Thailand',
                valueKey: 'number of people in their 100s',
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
                categoryKey: 'category of population',
                categoryValue: 'centenarians',
                valueKey: 'proportion of overall population',
                valueValue: 0.01,
              },
              {
                categoryKey: 'category of population',
                categoryValue: 'world’s population ages 100 and older',
                valueKey: 'proportion of overall population',
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
                categoryKey: 'country',
                categoryValue: 'Japan',
                valueKey: 'proportion of centenarians',
                valueValue: 0.75,
              },
              {
                categoryKey: 'country',
                categoryValue: 'Thailand',
                valueKey: 'proportion of centenarians',
                valueValue: 0.75,
              },
              {
                categoryKey: 'country',
                categoryValue: 'U.S.',
                valueKey: 'proportion of centenarians',
                valueValue: 0.75,
              },
              {
                categoryKey: 'country',
                categoryValue: 'China',
                valueKey: 'proportion of centenarians',
                valueValue: 0.25,
              },
              {
                categoryKey: 'country',
                categoryValue: 'India',
                valueKey: 'proportion of centenarians',
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
                categoryKey: 'country',
                categoryValue: 'Japan',
                valueKey: 'centenarians per 10,000 people',
                valueValue: 12,
              },
              {
                categoryKey: 'country',
                categoryValue: 'Thailand',
                valueKey: 'centenarians per 10,000 people',
                valueValue: 5,
              },
              {
                categoryKey: 'country',
                categoryValue: 'U.S.',
                valueKey: 'centenarians per 10,000 people',
                valueValue: 3,
              },
              {
                categoryKey: 'country',
                categoryValue: 'China',
                valueKey: 'centenarians per 10,000 people',
                valueValue: 1,
              },
              {
                categoryKey: 'country',
                categoryValue: 'India',
                valueKey: 'centenarians per 10,000 people',
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
                categoryKey: 'category of population growth',
                categoryValue: 'global centenarian population',
                valueKey: 'projected population',
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
                categoryKey: 'Country',
                categoryValue: 'China',
                valueKey: 'Number of Centenarians',
                valueValue: 1,
              },
              {
                categoryKey: 'Country',
                categoryValue: 'U.S.',
                valueKey: 'Number of Centenarians',
                valueValue: 2,
              },
              {
                categoryKey: 'Country',
                categoryValue: 'India',
                valueKey: 'Number of Centenarians',
                valueValue: 3,
              },
              {
                categoryKey: 'Country',
                categoryValue: 'Japan',
                valueKey: 'Number of Centenarians',
                valueValue: 4,
              },
              {
                categoryKey: 'Country',
                categoryValue: 'Thailand',
                valueKey: 'Number of Centenarians',
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
                categoryKey: 'country',
                categoryValue: 'Thailand',
                valueKey: 'proportion of centenarians',
                valueValue: 0.0049,
              },
              {
                categoryKey: 'country',
                categoryValue: 'Japan',
                valueKey: 'proportion of centenarians',
                valueValue: 0.004,
              },
              {
                categoryKey: 'country',
                categoryValue: 'U.S.',
                valueKey: 'proportion of centenarians',
                valueValue: 0.0014,
              },
              {
                categoryKey: 'country',
                categoryValue: 'China',
                valueKey: 'proportion of centenarians',
                valueValue: 0.0006,
              },
              {
                categoryKey: 'country',
                categoryValue: 'India',
                valueKey: 'proportion of centenarians',
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
                categoryKey: 'category of K-12 STEM education',
                categoryValue: 'United States',
                valueKey: 'comparison of K-12 STEM education with other wealthy nations',
                valueValue: 0,
              },
              {
                categoryKey: 'category of K-12 STEM education',
                categoryValue: 'other wealthy nations',
                valueKey: 'comparison of K-12 STEM education with other wealthy nations',
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
                categoryKey: 'country',
                categoryValue: 'U.S.',
                valueKey: 'math test scores',
                valueValue: 0,
              },
              {
                categoryKey: 'country',
                categoryValue: 'other wealthy nations',
                valueKey: 'math test scores',
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
                categoryKey: "category of students' performance",
                categoryValue: "America's students",
                valueKey: 'performance in science',
                valueValue: NaN,
              },
              {
                categoryKey: "category of students' performance",
                categoryValue: 'pupils in other countries',
                valueKey: 'performance in science',
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
                categoryKey: 'category of comparison',
                categoryValue: 'U.S. STEM education',
                valueKey: 'comparison with other wealthy countries',
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
                categoryKey: 'Perception of K-12 STEM Education',
                categoryValue: 'Americans',
                valueKey: 'Proportion of Average or Below Average Perception',
                valueValue: 0.67,
              },
              {
                categoryKey: 'Perception of K-12 STEM Education',
                categoryValue: 'Americans',
                valueKey: 'Proportion of Above Average Perception',
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
                categoryKey: 'category of K-12 education quality',
                categoryValue: 'U.S. adults',
                valueKey:
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
                categoryKey: 'Perception of U.S. K-12 STEM Education',
                categoryValue: 'Average',
                valueKey: 'Proportion of Responses',
                valueValue: 0.33,
              },
              {
                categoryKey: 'Perception of U.S. K-12 STEM Education',
                categoryValue: 'Below Average or Worst',
                valueKey: 'Proportion of Responses',
                valueValue: 0.32,
              },
              {
                categoryKey: 'Perception of U.S. K-12 STEM Education',
                categoryValue: 'Other',
                valueKey: 'Proportion of Responses',
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
                categoryKey: 'Demographic Group',
                categoryValue: 'White Americans',
                valueKey: 'Pessimism Level',
                valueValue: 24,
              },
              {
                categoryKey: 'Demographic Group',
                categoryValue: 'Black Americans',
                valueKey: 'Pessimism Level',
                valueValue: 31,
              },
              {
                categoryKey: 'Demographic Group',
                categoryValue: 'Hispanic Americans',
                valueKey: 'Pessimism Level',
                valueValue: 37,
              },
              {
                categoryKey: 'Demographic Group',
                categoryValue: 'English-speaking Asian Americans',
                valueKey: 'Pessimism Level',
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
                categoryKey: 'Gender',
                categoryValue: 'Women',
                valueKey: 'Proportion of respondents',
                valueValue: 0.25,
              },
              {
                categoryKey: 'Gender',
                categoryValue: 'Men',
                valueKey: 'Proportion of respondents',
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
                categoryKey: 'Political Affiliation',
                categoryValue: 'Democrats and Democratic-leaning independents',
                valueKey: 'Percentage rating K-12 STEM education as at least above average',
                valueValue: 31,
              },
              {
                categoryKey: 'Political Affiliation',
                categoryValue: 'Republicans and GOP leaners',
                valueKey: 'Percentage rating K-12 STEM education as at least above average',
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
                categoryKey: 'Survey Year',
                categoryValue: '2019',
                valueKey: 'Views Similarity',
                valueValue: 0,
              },
              {
                categoryKey: 'Survey Year',
                categoryValue: '2023',
                valueKey: 'Views Similarity',
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
                categoryKey: 'category of survey response',
                categoryValue: 'U.S. K-12 STEM education',
                valueKey: 'proportion of positive responses',
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
                categoryKey: 'Country',
                categoryValue: 'U.S.',
                valueKey: 'STEM test scores',
                valueValue: NaN,
              },
              {
                categoryKey: 'Country',
                categoryValue: 'Other countries',
                valueKey: 'STEM test scores',
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
                categoryKey: 'OECD countries',
                categoryValue: 'U.S.',
                valueKey: 'math ranking',
                valueValue: 2,
              },
              {
                categoryKey: 'OECD countries',
                categoryValue: 'average',
                valueKey: 'math ranking',
                valueValue: 1,
              },
              {
                categoryKey: 'OECD countries',
                categoryValue: 'U.S.',
                valueKey: 'science ranking',
                valueValue: 1,
              },
              {
                categoryKey: 'OECD countries',
                categoryValue: 'average',
                valueKey: 'science ranking',
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
                categoryKey: 'category of academic performance',
                categoryValue: 'U.S.',
                valueKey: 'math performance compared to OECD average',
                valueValue: 0,
              },
              {
                categoryKey: 'category of academic performance',
                categoryValue: 'OECD average',
                valueKey: 'math performance compared to OECD average',
                valueValue: 30,
              },
              {
                categoryKey: 'category of academic performance',
                categoryValue: 'U.S.',
                valueKey: 'science performance compared to OECD average',
                valueValue: 30,
              },
              {
                categoryKey: 'category of academic performance',
                categoryValue: 'OECD average',
                valueKey: 'science performance compared to OECD average',
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
                categoryKey: 'OECD member countries',
                categoryValue: 'U.S. students',
                valueKey: 'math ranking',
                valueValue: 28,
              },
              {
                categoryKey: 'OECD member countries',
                categoryValue: 'Japanese students',
                valueKey: 'math ranking',
                valueValue: 1,
              },
              {
                categoryKey: 'OECD member countries',
                categoryValue: 'Colombian students',
                valueKey: 'math ranking',
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
                categoryKey: 'Time Period',
                categoryValue: '2018',
                valueKey: 'U.S. Average Math Score',
                valueValue: 0,
              },
              {
                categoryKey: 'Time Period',
                categoryValue: '2022',
                valueKey: 'U.S. Average Math Score',
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
                categoryKey: 'country',
                categoryValue: 'U.S.',
                valueKey: 'rank in OECD countries',
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
                categoryKey: 'students',
                categoryValue: 'Japanese',
                valueKey: 'rank',
                valueValue: 1,
              },
              {
                categoryKey: 'students',
                categoryValue: 'Mexican',
                valueKey: 'rank',
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
                categoryKey: 'category of score',
                categoryValue: 'U.S average science score',
                valueKey: 'score value',
                valueValue: 100,
              },
              {
                categoryKey: 'category of score',
                categoryValue: 'U.S average science score trend',
                valueKey: 'trend value',
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
                categoryKey: 'subject of scores',
                categoryValue: 'science scores',
                valueKey: 'decline in scores',
                valueValue: 0,
              },
              {
                categoryKey: 'subject of scores',
                categoryValue: 'math scores',
                valueKey: 'decline in scores',
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
                categoryKey: 'OECD countries',
                categoryValue: 'Seven OECD countries',
                valueKey: 'mean science scores',
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
                categoryKey: 'age group',
                categoryValue: '15-year-old students',
                valueKey: 'frequency of testing',
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
                categoryKey: 'OECD countries',
                categoryValue: '37',
                valueKey: '',
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
                categoryKey: 'category of age gap',
                categoryValue: 'age gap between husbands and wives',
                valueKey: 'age gap value',
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
                categoryKey: 'Age difference between husbands and wives',
                categoryValue: '2022',
                valueKey: 'Age difference in years',
                valueValue: 2.2,
              },
              {
                categoryKey: 'Age difference between husbands and wives',
                categoryValue: '2000',
                valueKey: 'Age difference in years',
                valueValue: 2.4,
              },
              {
                categoryKey: 'Age difference between husbands and wives',
                categoryValue: '1880',
                valueKey: 'Age difference in years',
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
                categoryKey: 'category of age gap',
                categoryValue: 'age gap between U.S. husbands and wives',
                valueKey: 'age gap value',
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
                categoryKey: 'category of marriages',
                categoryValue: 'marriages in which the husband is several years older than the wife',
                valueKey: 'share of marriages',
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
                categoryKey: 'category of marriages',
                categoryValue: 'marriages where the wife is significantly older than the husband',
                valueKey: 'frequency of occurrence',
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
                categoryKey: 'category of marriages',
                categoryValue: 'opposite-sex marriages in 2022',
                valueKey: 'proportion of marriages',
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
                categoryKey: 'category of opposite-sex marriages',
                categoryValue: 'spouses age difference',
                valueKey: 'percentage of marriages',
                valueValue: 51,
              },
              {
                categoryKey: 'category of opposite-sex marriages',
                categoryValue: 'spouses age difference',
                valueKey: 'percentage of marriages',
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
                categoryKey: 'category of marriages',
                categoryValue: 'marriages with husband 3+ years older',
                valueKey: 'percentage of marriages',
                valueValue: 40,
              },
              {
                categoryKey: 'category of marriages',
                categoryValue: 'marriages with husband 3+ years older',
                valueKey: 'percentage of marriages',
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
                categoryKey: 'category of marriages',
                categoryValue: 'marriages with a wife three or more years older',
                valueKey: 'share of marriages',
                valueValue: 10,
              },
              {
                categoryKey: 'category of marriages',
                categoryValue: 'marriages with a wife three or more years older',
                valueKey: 'peak share of marriages',
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
                categoryKey: 'category of same-age marriage',
                categoryValue: 'spouses within two years',
                valueKey: 'historical trend',
                valueValue: 100,
              },
              {
                categoryKey: 'category of same-age marriage',
                categoryValue: 'spouses within four years',
                valueKey: 'historical trend',
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
                categoryKey: 'category of husbands with education level',
                categoryValue: 'husbands with at least a bachelor’s degree',
                valueKey: 'percentage in same-age marriage',
                valueValue: 55,
              },
              {
                categoryKey: 'category of husbands with education level',
                categoryValue: 'husbands with some college education or less',
                valueKey: 'percentage in same-age marriage',
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
                categoryKey: 'category of marriage status',
                categoryValue: 'first marriage',
                valueKey: 'percentage of husbands same age as wife',
                valueValue: 56,
              },
              {
                categoryKey: 'category of marriage status',
                categoryValue: 'more than once married',
                valueKey: 'percentage of husbands same age as wife',
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
                categoryKey: 'type of marriage',
                categoryValue: 'first marriage',
                valueKey: 'percentage of husbands with a wife three or more years younger',
                valueValue: 35,
              },
              {
                categoryKey: 'type of marriage',
                categoryValue: 'remarried',
                valueKey: 'percentage of husbands with a wife three or more years younger',
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
                categoryKey: "Husband's Ethnicity",
                categoryValue: 'White',
                valueKey: 'Likelihood of Same-Age Marriage',
                valueValue: 53,
              },
              {
                categoryKey: "Husband's Ethnicity",
                categoryValue: 'Hispanic',
                valueKey: 'Likelihood of Same-Age Marriage',
                valueValue: 46,
              },
              {
                categoryKey: "Husband's Ethnicity",
                categoryValue: 'Black',
                valueKey: 'Likelihood of Same-Age Marriage',
                valueValue: 45,
              },
              {
                categoryKey: "Husband's Ethnicity",
                categoryValue: 'Asian',
                valueKey: 'Likelihood of Same-Age Marriage',
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
                categoryKey: 'Race',
                categoryValue: 'Asian',
                valueKey: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 49,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Hispanic',
                valueKey: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 42,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'Black',
                valueKey: 'Percentage of husbands with a wife three or more years younger',
                valueValue: 43,
              },
              {
                categoryKey: 'Race',
                categoryValue: 'White',
                valueKey: 'Percentage of husbands with a wife three or more years younger',
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
                categoryKey: 'category of marriage patterns',
                categoryValue: "wife's characteristics",
                valueKey: 'similarity in marriage patterns',
                valueValue: 0,
              },
              {
                categoryKey: 'category of marriage patterns',
                categoryValue: "husband's characteristics",
                valueKey: 'similarity in marriage patterns',
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
                categoryKey: 'marital status',
                categoryValue: 'first marriage',
                valueKey: 'likelihood of similar age',
                valueValue: 0,
              },
              {
                categoryKey: 'marital status',
                categoryValue: 'married more than once',
                valueKey: 'likelihood of similar age',
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
                categoryKey: 'category of age difference',
                categoryValue: 'husbands and wives',
                valueKey: 'age difference value',
                valueValue: 0,
              },
              {
                categoryKey: 'category of age difference',
                categoryValue: 'husbands and wives',
                valueKey: 'age difference value',
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
                categoryKey: 'marital status',
                categoryValue: 'widowed',
                valueKey: 'likelihood',
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
                categoryKey: 'category of marriages',
                categoryValue: 'marriages where the husband is older than his wife',
                valueKey: 'share of marriages',
                valueValue: NaN,
              },
              {
                categoryKey: 'category of widowhood',
                categoryValue: 'widowhood among older women',
                valueKey: 'rate of widowhood',
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
                categoryKey: 'category of widows',
                categoryValue: 'women ages 65 and older',
                valueKey: 'percentage of widows',
                valueValue: 30,
              },
              {
                categoryKey: 'category of widows',
                categoryValue: 'women ages 65 and older',
                valueKey: 'percentage of widows',
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
                categoryKey: 'category of online sales',
                categoryValue: 'retail e-commerce sales',
                valueKey: 'total online sales in the fourth quarter',
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
                categoryKey: 'quarterly average',
                categoryValue: 'first nine months of the year',
                valueKey: 'value in billion USD',
                valueValue: 245.6,
              },
              {
                categoryKey: 'current quarter',
                categoryValue: 'current quarter',
                valueKey: 'value in billion USD',
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
                categoryKey: 'category of retail sales',
                categoryValue: 'online share',
                valueKey: 'share of all retail sales',
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
                categoryKey: 'category of retail sales',
                categoryValue: 'online sales',
                valueKey: 'proportion of retail sales',
                valueValue: 0.163,
              },
              {
                categoryKey: 'category of retail sales',
                categoryValue: 'other retail sales',
                valueKey: 'proportion of retail sales',
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
                categoryKey: 'category of online shopping',
                categoryValue: 'online shopping',
                valueKey: 'growth in the fourth quarter of 2023',
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
                categoryKey: 'category of retail sales',
                categoryValue: 'retail e-commerce',
                valueKey: 'proportion of all retail sales',
                valueValue: 0.149,
              },
              {
                categoryKey: 'category of retail sales',
                categoryValue: 'other retail sales',
                valueKey: 'proportion of all retail sales',
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
                categoryKey: 'category of online sales',
                categoryValue: 'online sales',
                valueKey: 'growth rate of online sales',
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
                categoryKey: 'year',
                categoryValue: '2000-2020',
                valueKey: 'online share of retail sales',
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
                categoryKey: 'category of sales',
                categoryValue: 'online sales',
                valueKey: 'sales during pandemic',
                valueValue: NaN,
              },
              {
                categoryKey: 'category of sales',
                categoryValue: 'online share of total sales',
                valueKey: 'share during pandemic',
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
                categoryKey: 'online share of total retail sales',
                categoryValue: 'online share of total retail sales',
                valueKey: 'percentage of online sales',
                valueValue: 0.7,
              },
              {
                categoryKey: 'online share of total retail sales',
                categoryValue: 'online share of total retail sales',
                valueKey: 'percentage of online sales',
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
                categoryKey: 'category of online sales',
                categoryValue: 'online sales',
                valueKey: 'online sales rate',
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
                categoryKey: 'time segment',
                categoryValue: 'second quarter of 2020',
                valueKey: 'e-commerce sales',
                valueValue: 205.3,
              },
              {
                categoryKey: 'time segment',
                categoryValue: 'second quarter of 2019',
                valueKey: 'e-commerce sales',
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
                categoryKey: 'category of retail sales',
                categoryValue: 'e-commerce',
                valueKey: 'proportion of retail sales',
                valueValue: 0.167,
              },
              {
                categoryKey: 'category of retail sales',
                categoryValue: 'other retail sales',
                valueKey: 'proportion of retail sales',
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
                categoryKey: 'category of retail sales',
                categoryValue: 'e-commerce share',
                valueKey: 'e-commerce share value',
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
                categoryKey: 'category of retail sales',
                categoryValue: 'online sales',
                valueKey: 'percentage of retail sales',
                valueValue: 16.3,
              },
              {
                categoryKey: 'category of retail sales',
                categoryValue: 'online sales',
                valueKey: 'percentage of retail sales',
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
                categoryKey: 'retailer category',
                categoryValue: 'retailer',
                valueKey: 'online sales benefit',
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
                categoryKey: 'category of retailers',
                categoryValue: 'retailers without physical stores',
                valueKey: 'share of online sales',
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
                categoryKey: 'Retail Category',
                categoryValue: 'Nonstore retailers',
                valueKey: 'E-commerce Sales Proportion',
                valueValue: 0.62,
              },
              {
                categoryKey: 'Retail Category',
                categoryValue: 'Other retailers',
                valueKey: 'E-commerce Sales Proportion',
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
                categoryKey: 'category of sales growth',
                categoryValue: 'E-commerce sales at nonstore retailers',
                valueKey: 'year over year growth rate',
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
                categoryKey: 'category of sales increase',
                categoryValue: 'general merchandise stores',
                valueKey: 'online sales increase rate',
                valueValue: 8.7,
              },
              {
                categoryKey: 'category of sales increase',
                categoryValue: 'food and beverage stores',
                valueKey: 'online sales increase rate',
                valueValue: 5.1,
              },
              {
                categoryKey: 'category of sales increase',
                categoryValue: 'health and personal care stores',
                valueKey: 'online sales increase rate',
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
                categoryKey: 'category of sales',
                categoryValue: 'electronics and appliance stores',
                valueKey: 'sales percentage change',
                valueValue: -1.6,
              },
              {
                categoryKey: 'category of sales',
                categoryValue: 'motor vehicle and parts dealers',
                valueKey: 'sales percentage change',
                valueValue: -3.2,
              },
              {
                categoryKey: 'category of sales',
                categoryValue: 'furniture and home furnishings stores',
                valueKey: 'sales percentage change',
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
                categoryKey: 'category of restaurants in the United States',
                categoryValue: 'Asian food serving restaurants',
                valueKey: 'proportion of all restaurants',
                valueValue: 0.12,
              },
              {
                categoryKey: 'category of restaurants in the United States',
                categoryValue: 'Other restaurants',
                valueKey: 'proportion of all restaurants',
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
                categoryKey: 'category of population',
                categoryValue: 'Asian American',
                valueKey: 'percentage of population',
                valueValue: 7,
              },
              {
                categoryKey: 'category of population',
                categoryValue: 'other population',
                valueKey: 'percentage of population',
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
                categoryKey: 'Type of Food',
                categoryValue: 'Chinese',
                valueKey: 'Proportion of Asian Restaurants',
                valueValue: 0.71,
              },
              {
                categoryKey: 'Type of Food',
                categoryValue: 'Japanese',
                valueKey: 'Proportion of Asian Restaurants',
                valueValue: 0.71,
              },
              {
                categoryKey: 'Type of Food',
                categoryValue: 'Thai',
                valueKey: 'Proportion of Asian Restaurants',
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
                categoryKey: 'Asian origin groups',
                categoryValue: 'Chinese',
                valueKey: 'Proportion of Asian restaurants',
                valueValue: 0.3,
              },
              {
                categoryKey: 'Asian origin groups',
                categoryValue: 'Japanese',
                valueKey: 'Proportion of Asian restaurants',
                valueValue: 0.3,
              },
              {
                categoryKey: 'Asian origin groups',
                categoryValue: 'Thai',
                valueKey: 'Proportion of Asian restaurants',
                valueValue: 0.3,
              },
              {
                categoryKey: 'Asian origin groups',
                categoryValue: 'Other',
                valueKey: 'Proportion of Asian restaurants',
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
                categoryKey: 'the category of U.S. Asian population',
                categoryValue: 'These groups',
                valueKey: 'the proportion of U.S. Asian population',
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
                categoryKey: 'type of Asian restaurant',
                categoryValue: 'Chinese food',
                valueKey: 'proportion of Asian restaurants serving Chinese food',
                valueValue: 0.39,
              },
              {
                categoryKey: 'type of Asian restaurant',
                categoryValue: 'Other Asian food',
                valueKey: 'proportion of Asian restaurants serving other Asian food',
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
                categoryKey: 'category of Asians living in the U.S.',
                categoryValue: 'Chinese Americans',
                valueKey: 'proportion of Asians living in the U.S.',
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
                categoryKey: 'type of food',
                categoryValue: 'Japanese food',
                valueKey: 'share of U.S. population',
                valueValue: 0,
              },
              {
                categoryKey: 'type of food',
                categoryValue: 'Thai food',
                valueKey: 'share of U.S. population',
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
                categoryKey: '',
                categoryValue: '',
                valueKey: '',
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
                categoryKey: 'category of Asian restaurants in the U.S.',
                categoryValue: 'Japanese food',
                valueKey: 'proportion of Asian restaurants',
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
                categoryKey: 'population category',
                categoryValue: 'Japanese Americans',
                valueKey: 'proportion of U.S. Asian population',
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
                categoryKey: 'cuisine type',
                categoryValue: 'Thai',
                valueKey: 'proportion of all Asian restaurants',
                valueValue: 0.11,
              },
              {
                categoryKey: 'ethnicity',
                categoryValue: 'Thai',
                valueKey: 'proportion of Asian Americans',
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
                categoryKey: 'category of diplomacy',
                categoryValue: 'Thai restaurants',
                valueKey: 'number of Thai restaurants',
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
                categoryKey: 'category of Asian restaurants',
                categoryValue: 'Indian restaurants',
                valueKey: 'proportion of Asian restaurants in the U.S.',
                valueValue: 0.07,
              },
              {
                categoryKey: 'category of Asian restaurants',
                categoryValue: 'Filipino restaurants',
                valueKey: 'proportion of Asian restaurants in the U.S.',
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
                categoryKey: 'state',
                categoryValue: 'California',
                valueKey: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                categoryKey: 'state',
                categoryValue: 'New York',
                valueKey: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                categoryKey: 'state',
                categoryValue: 'Texas',
                valueKey: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                categoryKey: 'state',
                categoryValue: 'New Jersey',
                valueKey: 'Asian American population proportion',
                valueValue: 0.11,
              },
              {
                categoryKey: 'state',
                categoryValue: 'Washington',
                valueKey: 'Asian American population proportion',
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
                categoryKey: 'location category',
                categoryValue: 'five states',
                valueKey: 'proportion of Asian restaurants',
                valueValue: 0.45,
              },
              {
                categoryKey: 'location category',
                categoryValue: 'other states',
                valueKey: 'proportion of Asian restaurants',
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
                categoryKey: 'State',
                categoryValue: 'Hawaii, California, Washington, Nevada, New York',
                valueKey: 'Proportion of Restaurants Serving Asian Food',
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
                categoryKey: 'category of restaurants',
                categoryValue: 'Asian restaurants',
                valueKey: 'proportion of all restaurants',
                valueValue: 0.06,
              },
              {
                categoryKey: 'category of restaurants',
                categoryValue: 'Other restaurants',
                valueKey: 'proportion of all restaurants',
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
                categoryKey: 'category of counties in the U.S.',
                categoryValue: 'counties with at least one Asian restaurant',
                valueKey: 'proportion of counties with at least one Asian restaurant',
                valueValue: 0.73,
              },
              {
                categoryKey: 'category of counties in the U.S.',
                categoryValue: 'counties without any Asian restaurant',
                valueKey: 'proportion of counties without any Asian restaurant',
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
                categoryKey: 'type of restaurant',
                categoryValue: 'Asian restaurants',
                valueKey: 'proportion of food establishments',
                valueValue: 0.25,
              },
              {
                categoryKey: 'location',
                categoryValue: 'California',
                valueKey: 'proportion of counties',
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
                categoryKey: 'category of restaurants',
                categoryValue: 'Asian food',
                valueKey: 'proportion of restaurants serving Asian food',
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
                categoryKey: 'category of U.S. counties',
                categoryValue: 'Chinese restaurants',
                valueKey: 'proportion of U.S. counties',
                valueValue: 0.7,
              },
              {
                categoryKey: 'category of U.S. counties',
                categoryValue: 'Other restaurants',
                valueKey: 'proportion of U.S. counties',
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
                categoryKey: 'restaurant type',
                categoryValue: 'Japanese',
                valueKey: 'proportion of restaurants',
                valueValue: 0.45,
              },
              {
                categoryKey: 'restaurant type',
                categoryValue: 'Thai',
                valueKey: 'proportion of restaurants',
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
                categoryKey: 'type of Asian food',
                categoryValue: 'Vietnamese and Indian',
                valueKey: 'percentage of U.S. counties',
                valueValue: 20,
              },
              {
                categoryKey: 'type of Asian food',
                categoryValue: 'Filipino, Pakistani, Mongolian, Burmese',
                valueKey: 'percentage of U.S. counties',
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
                categoryKey: 'category of Asian restaurants in the U.S.',
                categoryValue: 'Asian restaurants offering cuisines from multiple origin groups',
                valueKey: 'proportion of Asian restaurants in the U.S. offering cuisines from multiple origin groups',
                valueValue: 0.09,
              },
              {
                categoryKey: 'category of Asian restaurants in the U.S.',
                categoryValue: 'Asian restaurants not offering cuisines from multiple origin groups',
                valueKey:
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
                categoryKey: 'Type of Establishment',
                categoryValue: 'Chinese and Japanese food combinations',
                valueKey: 'Percentage of Establishments',
                valueValue: 36,
              },
              {
                categoryKey: 'Type of Establishment',
                categoryValue: 'Chinese and Thai food',
                valueKey: 'Percentage of Establishments',
                valueValue: 18,
              },
              {
                categoryKey: 'Type of Establishment',
                categoryValue: 'Japanese and Thai food',
                valueKey: 'Percentage of Establishments',
                valueValue: 15,
              },
              {
                categoryKey: 'Type of Establishment',
                categoryValue: 'Japanese and Korean food',
                valueKey: 'Percentage of Establishments',
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
                categoryKey: 'type of restaurant',
                categoryValue: 'Pakistani restaurants in the U.S.',
                valueKey: 'proportion serving Indian food',
                valueValue: 0.78,
              },
              {
                categoryKey: 'type of restaurant',
                categoryValue: 'Indian restaurants in the U.S.',
                valueKey: 'proportion serving Pakistani food',
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
                categoryKey: 'candidate',
                categoryValue: 'Kamala Harris',
                valueKey: 'support rate',
                valueValue: 0,
              },
              {
                categoryKey: 'candidate',
                categoryValue: 'Donald Trump',
                valueKey: 'support rate',
                valueValue: 0,
              },
              {
                categoryKey: 'candidate',
                categoryValue: 'Robert F. Kennedy Jr.',
                valueKey: 'support rate',
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
                categoryKey: 'Candidate Preference',
                categoryValue: 'Kamala Harris',
                valueKey: 'Voter Preference',
                valueValue: 0,
              },
              {
                categoryKey: 'Candidate Preference',
                categoryValue: 'Donald Trump',
                valueKey: 'Voter Preference',
                valueValue: -30,
              },
              {
                categoryKey: 'Candidate Preference',
                categoryValue: 'Robert F. Kennedy Jr.',
                valueKey: 'Voter Preference',
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
                categoryKey: 'Candidate Preference',
                categoryValue: 'Harris',
                valueKey: 'Proportion of Black Voters',
                valueValue: 0.77,
              },
              {
                categoryKey: 'Candidate Preference',
                categoryValue: 'Trump',
                valueKey: 'Proportion of Black Voters',
                valueValue: 0.13,
              },
              {
                categoryKey: 'Candidate Preference',
                categoryValue: 'Kennedy',
                valueKey: 'Proportion of Black Voters',
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
                categoryKey: 'category of support',
                categoryValue: "Black voters' support for the top of the Democratic ticket",
                valueKey: 'support rate',
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
                categoryKey: 'the category of voters',
                categoryValue: 'Black voters',
                valueKey: 'the support rate for Biden',
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
                categoryKey: 'Voter Support Category',
                categoryValue: 'Black Voters Supporting Trump',
                valueKey: 'Proportion of Black Voters',
                valueValue: 0.75,
              },
              {
                categoryKey: 'Voter Support Category',
                categoryValue: 'Black Voters Supporting Kennedy',
                valueKey: 'Proportion of Black Voters',
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
                categoryKey: 'Demographic',
                categoryValue: 'Black voters',
                valueKey: 'Support for Harris',
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
                categoryKey: 'age group',
                categoryValue: 'Black voters 50 and older',
                valueKey: 'support for Harris',
                valueValue: 86,
              },
              {
                categoryKey: 'age group',
                categoryValue: 'Black voters 18 to 49',
                valueKey: 'support for Harris',
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
                categoryKey: 'Survey Entity',
                categoryValue: 'Biden',
                valueKey: 'Age Difference',
                valueValue: 0,
              },
              {
                categoryKey: 'Survey Entity',
                categoryValue: 'April 2024 Survey',
                valueKey: 'Age Difference',
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
                categoryKey: 'age group',
                categoryValue: '18 to 49',
                valueKey: 'support for Harris',
                valueValue: 49,
              },
              {
                categoryKey: 'age group',
                categoryValue: '50 and older',
                valueKey: 'support for Harris',
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
                categoryKey: 'Black voters with',
                categoryValue: 'college degrees',
                valueKey: 'support for Harris',
                valueValue: 84,
              },
              {
                categoryKey: 'Black voters with',
                categoryValue: 'without degrees',
                valueKey: 'support for Harris',
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
                categoryKey: 'category of education level',
                categoryValue: 'college graduates',
                valueKey: 'support percentage for Harris',
                valueValue: 56,
              },
              {
                categoryKey: 'category of education level',
                categoryValue: 'those without bachelor’s degrees',
                valueKey: 'support percentage for Harris',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'support for Harris',
                valueValue: 0,
              },
              {
                categoryKey: 'category of voters',
                categoryValue: 'Black voters by gender',
                valueKey: 'support for Harris',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'view Harris favorably',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'favorability rating',
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
                categoryKey: 'Demographic Group',
                categoryValue: 'Black voters',
                valueKey: 'Favorability of Harris',
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
                categoryKey: 'share of sentiment',
                categoryValue: 'happy',
                valueKey: 'proportion of sentiment',
                valueValue: 0.8,
              },
              {
                categoryKey: 'share of sentiment',
                categoryValue: 'other',
                valueKey: 'proportion of sentiment',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'favorable view of Biden',
                valueValue: 68,
              },
              {
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'favorable view of Trump',
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
                categoryKey: 'category of view',
                categoryValue: 'Harris',
                valueKey: 'percentage of positive views',
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
                categoryKey: 'Time Segment',
                categoryValue: 'July 2023',
                valueKey: 'Favorable View Percentage',
                valueValue: 65,
              },
              {
                categoryKey: 'Time Segment',
                categoryValue: 'May 2024',
                valueKey: 'Favorable View Percentage',
                valueValue: 67,
              },
              {
                categoryKey: 'Time Segment',
                categoryValue: 'August 2024',
                valueKey: 'Favorable View Percentage',
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
                categoryKey: 'category of opinion shift',
                categoryValue: 'Black voters',
                valueKey: 'opinion shift rate',
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
                categoryKey: 'Opinion of Harris among Women',
                categoryValue: 'Black women',
                valueKey: 'Favorable opinion percentage',
                valueValue: 67,
              },
              {
                categoryKey: 'Opinion of Harris among Women',
                categoryValue: 'Black women',
                valueKey: 'Favorable opinion percentage',
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
                categoryKey: 'Age Group',
                categoryValue: 'Black voters ages 18 to 49',
                valueKey: 'Favorability of Harris',
                valueValue: 52,
              },
              {
                categoryKey: 'Age Group',
                categoryValue: 'Black voters ages 18 to 49',
                valueKey: 'Favorability of Harris',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters with college degrees',
                valueKey: 'favorability ratings',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'positive views increase',
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
                categoryKey: 'category of favorability ratings',
                categoryValue: 'Democrats and Democratic leaners',
                valueKey: 'favorability ratings',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters',
                valueKey: 'motivation to vote',
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
                categoryKey: 'demographic and political groups',
                categoryValue: 'voters',
                valueKey: 'motivation to cast a ballot',
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
                categoryKey: 'Time Segment',
                categoryValue: 'July',
                valueKey: 'Motivation Level Among Black Voters',
                valueValue: 56,
              },
              {
                categoryKey: 'Time Segment',
                categoryValue: 'August',
                valueKey: 'Motivation Level Among Black Voters',
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
                categoryKey: 'category of demographic',
                categoryValue: 'women',
                valueKey: 'increase rate',
                valueValue: NaN,
              },
              {
                categoryKey: 'category of education',
                categoryValue: 'college degrees',
                valueKey: 'increase rate',
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
                categoryKey: 'time period',
                categoryValue: 'July',
                valueKey: 'motivation level of Black women to vote',
                valueValue: 51,
              },
              {
                categoryKey: 'time period',
                categoryValue: 'August',
                valueKey: 'motivation level of Black women to vote',
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
                categoryKey: 'category of voters',
                categoryValue: 'Black voters with college degrees',
                valueKey: 'motivation to vote',
                valueValue: 63,
              },
              {
                categoryKey: 'category of voters',
                categoryValue: 'Black voters with college degrees',
                valueKey: 'motivation to vote',
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
