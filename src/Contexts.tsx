import { createContext } from 'react';
import { CartContextType } from './providers/cartProvider';
import { UserContextType } from './providers/userProvider';

// Define the types for each context

// Create contexts with default values
export const UserContext = createContext<UserContextType | undefined>(undefined);
export const CartContext = createContext<CartContextType | undefined>(undefined);
// src/Contexts.ts

