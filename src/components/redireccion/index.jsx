import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectToHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default RedirectToHome;