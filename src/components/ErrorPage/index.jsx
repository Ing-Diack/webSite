import{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/");
  },[]);
  return 0
}

export default Error