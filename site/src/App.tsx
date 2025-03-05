import './style/page.css';
import HomePage from './userstudy/homePage';
import InteractivePage from './userstudy/articlePage';
import PublicityPage from './demo/Demo';
import LLMConfigurationPage from './demo/LLMConf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TestPage from './demo/testPages/Annotator';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<PublicityPage />} />
          {/* <Route path="/publicity" element={<PublicityPage />} /> */}
          <Route path="/interactive" element={<HomePage />} />
          <Route path="/interactive/:pageType/:pageId" element={<InteractivePage />} />
          <Route path="/llm_setting" element={<LLMConfigurationPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
