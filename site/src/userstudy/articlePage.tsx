// src/InteractivePage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArtcleProcess from '../modules/visualizer/renderer/renderer';
import { ArticleData, IQuestion } from './articles/articleTypes';
import { articles } from './articles/articledata';
import './us.css';
import { Space } from 'antd';

const InteractivePage: React.FC = () => {
  const { pageType, pageId } = useParams<{
    pageType: string;
    pageId: string;
  }>();
  const [articleIndex, setArticleIndex] = useState(0);
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | null>>({});
  const [questions, setQuestions] = useState<IQuestion[]>([
    {
      id: '',
      text: '',
      options: [],
    },
  ]);
  const [timer, setTimer] = useState(0);
  const [timeUp, setTimeUp] = useState<boolean>(false);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadArticle = () => {
      let articleData: ArticleData | undefined;
      // Check if the pageType is 'processed' or 'unprocessed'
      if (pageType === 'processed') {
        // Filter processed articles and sort them by id (as number)
        const processedArticles = articles.filter((a) => a.processed).sort((a, b) => Number(a.id) - Number(b.id));
        // Get the article based on the rank (pageId) from the sorted list
        articleData = processedArticles[Number(pageId) - 1];
      } else if (pageType === 'unprocessed') {
        // Filter unprocessed articles and sort them by id (as number)
        const unprocessedArticles = articles.filter((a) => !a.processed).sort((a, b) => Number(a.id) - Number(b.id));
        // Get the article based on the rank (pageId) from the sorted list
        articleData = unprocessedArticles[Number(pageId) - 1];
      }
      if (articleData) {
        setArticle(articleData);
        setQuestions(articleData.questions);
        articleData.questions.forEach((_, index) => {
          selectedAnswers[articleData.questions[index].id] = null;
        });
      }
    };

    loadArticle();
  }, [pageId, pageType]);

  const startTimer = () => {
    if (!timerInterval.current) {
      timerInterval.current = setInterval(() => {
        if (isTimerRunning) {
          setTimer((prev) => prev + 1);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
        timerInterval.current = null;
      }
    };
  }, [isTimerRunning]);

  const nextQuestion = () => {
    if (articleIndex < questions.length - 1) {
      setArticleIndex((index) => index + 1);
    }
  };

  const prevQuestion = () => {
    if (articleIndex > 0) {
      setArticleIndex((index) => index - 1);
    }
  };

  const submitAnswers = () => {
    const data = {
      timer,
      selectedAnswers,
      pageId,
    };

    fetch('http://localhost:5000/api/submitAnswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const renderArticleContent = () => {
    if (!article) return null;

    if (article.processed) {
      return (
        <div>
          <h2>Processed Article {pageId}: </h2>
          <h2 style={{ height: '20px' }}></h2>
          <div className="content-wrapper">
            <p className="pre-wrap">
              <ArtcleProcess llmarticle={article.content} />
            </p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h2>Unprocessed Article {pageId}: </h2>
        <div className="content-wrapper">
          <p className="pre-wrap">{article.content}</p>
        </div>
      </div>
    );
  };

  const renderQuestion = (
    question: IQuestion,
    selectedAnswers: Record<string, string | null>,
    handleAnswerChange: (optionId: string) => void
  ) => {
    if (question.questionType === 'choice') {
      return (
        <div>
          <h2>{question.text}</h2>
          {question.options.map((option) => (
            <div
              key={option.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <button
                key={option.id}
                onClick={() => handleAnswerChange(option.id)}
                disabled={selectedAnswers[question.id] === option.id}
                style={{
                  margin: '0 5px',
                  padding: '5px 10px',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  backgroundColor: selectedAnswers[question.id] === option.id ? '#eee' : 'initial',
                }}
              >
                {option.id}
              </button>
              <div style={{ marginLeft: '10px' }}>{option.text}</div>
            </div>
          ))}
          {selectedAnswers[question.id] && (
            <p>Selected: {question.options.find((o) => o.id === selectedAnswers[question.id])?.text}</p>
          )}
        </div>
      );
    } else if (question.questionType === 'open') {
      return (
        <div>
          <h2>{question.text}</h2>
          <textarea
            value={selectedAnswers[question.id] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="请输入你的答案"
            style={{
              width: '100%',
              minHeight: '400px',
              margin: '10px 0',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
      );
    }
  };
  const currentQuestion = article?.questions[articleIndex];

  return (
    <div
      style={{
        display: 'flex',
        height: '90vh',
        justifyContent: 'space-between',
        margin: '40px',
        gap: '40px',
      }}
    >
      <div style={{ flex: 3, padding: '20px' }}>
        <p>{renderArticleContent()}</p>
      </div>
      <div style={{ flex: 2, padding: '20px' }}>
        <div>
          {currentQuestion &&
            renderQuestion(currentQuestion, selectedAnswers, (answer) => {
              const questionId = article.questions[articleIndex].id;
              setSelectedAnswers((prevAnswers) => ({
                ...prevAnswers,
                [questionId]: answer,
              }));
            })}
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={prevQuestion} disabled={articleIndex === 0 || timeUp}>
            Previous
          </button>
          <button onClick={nextQuestion} disabled={articleIndex === questions.length - 1 || timeUp}>
            Next
          </button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h3>
          Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' + (timer % 60) : timer % 60}
        </h3>
        <button onClick={() => setIsTimerRunning(!isTimerRunning)}>{isTimerRunning ? 'Pause' : 'Start'}</button>
        <Space />
        <button onClick={submitAnswers}>Submit</button>
      </div>
    </div>
  );
};

export default InteractivePage;
