import './style/page.css';
import HomePage from './userstudy/homePage';
import InteractivePage from './userstudy/articlePage';
import PublicityPage from './demo/Demo';
import LLMConfigurationPage from './demo/LLMConf';
import GistTest from './demo/GistTest';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './introductionPage/IntroPage';
import DemoPipeline from './demo/pipeline/DemoPipeline';
import LabelPage from './components/LabelPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path={`/home`} element={<PublicityPage />} />
          <Route path={`/Pipeline`} element={<DemoPipeline />} />
          <Route path={`/gisttest`} element={<GistTest />} />
          <Route path={`/interactive`} element={<HomePage />} />
          <Route path={`/interactive/:pageType/:pageId`} element={<InteractivePage />} />
          <Route path={`/llm_setting`} element={<LLMConfigurationPage />} />
          <Route path={`/label`} element={<LabelPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
