import React from 'react';
import { useLocation, useNavigate, useParams, Location, NavigateFunction } from 'react-router-dom';

interface WithRouterProps {
  match: {
    params: Record<string, string | undefined>;
  };
  location: Location;
  navigate: NavigateFunction;
}

function withRouter<P extends WithRouterProps>(WrappedComponent: React.ComponentType<P>): React.FC<Omit<P, keyof WithRouterProps>> {
  return (props: Omit<P, keyof WithRouterProps>) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <WrappedComponent
        {...(props as P)}
        match={{ params }}
        location={location}
        navigate={navigate}
      />
    );
  };
}

export default withRouter;