import './style/page.css';
import HomePage from './userstudy/homePage';
import InteractivePage from './userstudy/articlePage';
import PublicityPage from './demo/Demo';
import LLMConfigurationPage from './demo/LLMConf';
import GistTest from './demo/GistTest';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<PublicityPage />} />
          <Route path={`/gisttest`} element={<GistTest />} />
          {/* <Route path="/publicity" element={<PublicityPage />} /> */}
          <Route path={`/interactive`} element={<HomePage />} />
          <Route path={`/interactive/:pageType/:pageId`} element={<InteractivePage />} />
          <Route path={`/llm_setting`} element={<LLMConfigurationPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
