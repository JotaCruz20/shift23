import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';

const SplashScreen = () => {
  const navigate = useNavigate();
  const myRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (myRef.current) {
      myRef.current.style.backgroundColor = '#A8CF54';
      myRef.current.style.transition = 'background-color 3s linear';
      myRef.current.style.height = '100vh';

      const timer = setTimeout(() => {
        //TODO: SE TA LOGGED IN VAI PARA O MAIN SE N VAI PARA PAGINA DE REGISTO
        navigate('/welcome');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div ref={myRef} className="grid bg-white h-screen place-items-center">
            <img src={Logo} alt="Logo" />
        </div>
  );
};

export default SplashScreen;