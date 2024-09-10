import { Navigate } from 'react-router-dom';
import { withUser } from './withProvider';
import { ReactNode } from 'react';

// Define the type for the UserRoute props
interface UserRouteProps {
  user: any; // Change 'any' to the specific type for your user object if available
  children: ReactNode;
}

function UserRoute({ user, children }: UserRouteProps) {
  if (!user) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
}

export default withUser(UserRoute);
