import React from 'react';
import { Routes, Route } from "react-router-dom";
import CartProvider from './providers/cartProvider';
import UserProvider from './providers/userProvider';
import Header from './Header';
import ProductListPage from './poductListPage';
import ProdDet from './ProdDet';
import Catalogue from './Catalogue';
import LogIn from './LogIn';
import ForgotPassword from './Forgot-Password';
import SignUp from './SignUp';
import NotFound from './NotFound';
import MemoizedFooter from './Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 grow flex flex-col min-h-screen">
      <UserProvider>
        <CartProvider>
            <Header />
            <div className="p-4">
            </div>
            <div className="grow flex justify-center mt-8">
              <Routes>
                <Route index element={<ProductListPage />} />
                <Route path="/ProdDet/:id" element={<ProdDet />} />
                <Route path="/Catalogue" element={<Catalogue />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/Forgot-Password" element={<ForgotPassword />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <MemoizedFooter />
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;