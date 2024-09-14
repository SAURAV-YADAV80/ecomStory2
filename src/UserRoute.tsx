import { Navigate } from 'react-router-dom';
import { withUser } from './withProvider';
import { ReactNode } from 'react';
import { User, UserContextType } from './providers/userProvider';

interface UserRouteProps extends UserContextType{
  user: User;
  children: ReactNode;
}

function UserRoute({ user, children }: UserRouteProps) {
  if (!user) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
}

export default withUser(UserRoute);