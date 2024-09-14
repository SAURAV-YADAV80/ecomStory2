import React, { ComponentType, useContext } from 'react';
import { CartContext, UserContext } from './Contexts';

// Generic HOC for any context provider
type ContextProvider<T> = React.Context<T | undefined>;

const withProvider = <T,>(provider: ContextProvider<T>) => {
  return <P extends {}>(IncomingComponent: ComponentType<P & T>) => {
    return (props: P) => {
      const contextData = useContext(provider);

      // Handle undefined context data more gracefully
      if (!contextData) {
        console.warn('Context data is undefined, rendering without context.');
        return null; // Or fallback UI
      }

      return <IncomingComponent {...props} {...contextData} />;
    };
  };
};

export default withProvider;

// Example specific HOCs
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);