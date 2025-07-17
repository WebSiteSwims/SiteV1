import { Routes, Route } from 'react-router-dom';
import { SmoothScrollProvider } from './contexts/SmoothScrollContext';
import HomePage from './pages/1HomePage';
import ErrorPage from './pages/ErrorPage';
import QuiSommeNous from './pages/2QuiSommesNous';
import NosExpertises from './pages/3NosExpertises';
import IntegrateurAVEVA from './pages/4IntegrateurAVEVA';
import BureauDetude from './pages/5BureauDetude';
import AssistanceTechnique from './pages/6AssistanceTechnique';

function App() {

  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/qui-sommes-nous" element={<QuiSommeNous />} />      
        <Route path="/nos-expertises" element={<NosExpertises />} />
        <Route path="/integrateur-aveva" element={<IntegrateurAVEVA />} />
        <Route path="/bureau-detude" element={<BureauDetude />} />
        <Route path="/assistance-technique" element={<AssistanceTechnique />} />
      </Routes>
    </SmoothScrollProvider>
  );
}

export default App;