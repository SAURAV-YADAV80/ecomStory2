import  { useContext, ComponentType, FC } from 'react';
import { UserContext } from './Contexts';

interface WithUserProps {
  user: any;
  setUser: any;
}

function withUser<P extends Omit<WithUserProps, 'user' | 'setUser'>>(WrappedComponent: ComponentType<P & WithUserProps>): FC<Omit<P, keyof WithUserProps>> {
  const OutgoingComponent: FC<Omit<P, keyof WithUserProps>> = (props) => {
    const { user, setUser } = useContext(UserContext);
    
    return <WrappedComponent {...props as P} user={user} setUser={setUser} />;
  };

  return OutgoingComponent;
}

export default withUser;