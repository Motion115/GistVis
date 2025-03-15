import { paragraphSpec } from 'gist-wsv';

export interface IQuestion {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  questionType?: 'choice' | 'open';
  selected?: number | null;
}

export type UnprocessedArticle = {
  id: string;
  title: string;
  content: string;
  questions: IQuestion[];
  processed: false;
};

export type ProcessedArticle = {
  id: string;
  title: string;
  content: paragraphSpec[];
  questions: IQuestion[];
  processed: true;
};

export type ArticleData = UnprocessedArticle | ProcessedArticle;
