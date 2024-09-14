import React, { ComponentType, useContext } from 'react';
import { CartContext, UserContext } from './Contexts';

type ContextProvider<T> = React.Context<T | undefined>;

const withProvider = <T,>(provider: ContextProvider<T>) => {
  return <P extends Omit<T, keyof P>>(IncomingComponent: ComponentType<P>) => {
    return (props: Omit<P, keyof T>) => {
      const contextData = useContext(provider);

      if (!contextData) {
        throw new Error('Context data is undefined');
      }

      return <IncomingComponent {...props as P} {...contextData} />;
    };
  };
};

export default withProvider;

export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);