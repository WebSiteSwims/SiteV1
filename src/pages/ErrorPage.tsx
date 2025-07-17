import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff4e6] px-4">
      <h1
        className="text-6xl font-extrabold text-[#ff7300] mb-4"
        style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
      >
        Oups&nbsp;!
      </h1>
      <p
        className="text-2xl font-bold text-[#181818] mb-2"
        style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}
      >
        Cette page n'existe pas ou n'est pas encore disponible.
      </p>
      <p className="text-lg text-[#181818] mb-8">
        Retournez à l'accueil ou contactez-nous si besoin.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-[#ff7300] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-[#ff8c1a] transition-all"
        style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default ErrorPage;