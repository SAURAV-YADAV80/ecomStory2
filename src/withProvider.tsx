import React, { ComponentType, useContext } from 'react';
import { CartContext, UserContext } from './Contexts';

// Define the type for the context providers
type ContextProvider<T> = React.Context<T | undefined>;

// HOC withProvider
const withProvider = <T,>(provider: ContextProvider<T>) => {
  return <P extends T>(IncomingComponent: ComponentType<P>) => {
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

// Exporting specific HOCs
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);
