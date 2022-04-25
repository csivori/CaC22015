import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
  if (true) {
      return children;
  } else {
      return <Navigate to="/Login" replace={true} />;
  }
};

export default ProtectedRoutes