import { createContext } from 'react';
import { CartContextType } from './providers/cartProvider';
import { UserContextType } from './providers/userProvider';
export const UserContext = createContext<UserContextType | undefined>(undefined);
export const CartContext = createContext<CartContextType | undefined>(undefined);