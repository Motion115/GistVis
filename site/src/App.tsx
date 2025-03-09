import './style/page.css';
import HomePage from './userstudy/homePage';
import InteractivePage from './userstudy/articlePage';
import PublicityPage from './demo/Demo';
import LLMConfigurationPage from './demo/LLMConf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const rootRoute = import.meta.env.VITE_SITE_BASE_URL as string
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path={rootRoute} element={<PublicityPage />} />
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
