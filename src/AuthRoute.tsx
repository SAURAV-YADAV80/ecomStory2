import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContextType } from './providers/userProvider';
import { withUser } from './withProvider';

interface AuthRouteProps extends UserContextType{
  children: React.ReactNode;
};

const AuthRoute: React.FC<AuthRouteProps> = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default withUser(AuthRoute);
