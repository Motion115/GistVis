import './style/page.css';
import HomePage from './userstudy/homePage';
import InteractivePage from './userstudy/articlePage';
import PublicityPage from './demo/Demo';
import LLMConfigurationPage from './demo/LLMConf';
import GistTest from './demo/GistTest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './introductionPage/IntroPage';

const App = () => {
  const rootRoute = import.meta.env.VITE_SITE_BASE_URL as string;
  console.log(rootRoute);
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path={rootRoute} element={<IntroPage />} />
          <Route path={`${rootRoute}/home`} element={<PublicityPage />} />
          <Route path={`${rootRoute}/gisttest`} element={<GistTest />} />
          {/* <Route path="/publicity" element={<PublicityPage />} /> */}
          <Route path={`${rootRoute}/interactive`} element={<HomePage />} />
          <Route path={`${rootRoute}/interactive/:pageType/:pageId`} element={<InteractivePage />} />
          <Route path={`${rootRoute}/llm_setting`} element={<LLMConfigurationPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
