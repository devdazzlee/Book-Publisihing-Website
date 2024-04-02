import React, { useState, useEffect } from 'react';
import './Toasify.css';

const CustomToast = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return visible ? <div className="custom-toast">{message}</div> : null;
};

export default CustomToast;
