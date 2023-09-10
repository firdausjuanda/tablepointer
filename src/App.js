import './App.css';
import { ConfigProvider } from 'antd';
import Main from './pages/main';
import ContactDetailPage from './pages/contact-details';
import ResultPage from './pages/result';
import { Routes, Route } from 'react-router-dom';
import SavingResult from './output/pdf/SavingResult';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1367C6', colorFillSecondary: '#147CFC',}, components:{Select:{multipleItemBg:'rgba(0, 0, 0, 0.06)'} } }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="contact-details" element={<ContactDetailPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="result/pdf" element={<SavingResult />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
