import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import LogueItem from "./LogueItem";
import SmLogue from "./smLogue";
import { CartContextType } from "./providers/cartProvider";
import { withCart } from "./withProvider";

interface CatalogueListProps extends CartContextType {
  setNewTotal: (total: number) => void;
}

  const CatalogueList: React.FC<CatalogueListProps> = ({ cart, updateCart, setNewTotal }) => {// Include setNewTotal in props
  const [quantityMap, setQuantityMap] = useState<Record<number, number>>({});
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    const map = cart.reduce((acc, cartItem) => {
      acc[cartItem.product.id] = cartItem.quantity;
      return acc;
    }, {} as Record<number, number>);
    setQuantityMap(map);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((acc, cartItem) => {
      const quantity = quantityMap[cartItem.product.id] || cartItem.quantity;
      return acc + cartItem.product.price * quantity;
    }, 0);

    setNewTotal(total); // Use setNewTotal here
  }, [cart, quantityMap, setNewTotal]);

  const handleRemove = (productId: number) => {
    const { [productId]: _, ...newQuantityMap } = quantityMap;
    setQuantityMap(newQuantityMap);
    const updatedCart = cart.filter(item => item.product.id !== productId);
    updateCart(updatedCart);
    toast.info('Product removed from cart');
  };

  const handleChange = (newQuantity: number, productId: number) => {
    setDirty(true);
    setQuantityMap(prevState => ({
      ...prevState,
      [productId]: newQuantity,
    }));
  };

  const handleUpdate = () => {
    const updatedCart = cart.map(item => ({
      ...item,
      quantity: quantityMap[item.product.id] || item.quantity,
    }));
    updateCart(updatedCart);
    setDirty(false);
    toast.success('Cart updated successfully');
  };

  const classText = dirty ? " text-white bg-red-500 " : " text-gray-200 bg-red-200 ";

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 bg-white">
      <BackButton />
      {cart.length === 0 ? (
        <div className="text-center flex justify-center items-center text-gray-600 h-[300px] my-8">
          <p>Your cart is empty. 
            <Link className="text-red-600" to='/'> Shop Now!</Link>
          </p>
        </div>
      ) : (
        <>
          <header className="hidden sm:flex justify-between bg-gray-300 py-2 mt-4 font-bold text-gray-600">
            <span className="w-2/5 text-center">Product</span>
            <span className="w-1/5 text-center">Price</span>
            <span className="w-1/5 text-center">Quantity</span>
            <span className="w-1/5 text-center">Subtotal</span>
          </header>
          <div className="hidden sm:block border-collapse">
            {cart.map((cartItem) => (
              <LogueItem
                key={cartItem.product.id}
                quantity={quantityMap[cartItem.product.id]}
                product={cartItem.product}
                onRemove={() => handleRemove(cartItem.product.id)}
                onChange={(newQuantity) => handleChange(newQuantity, cartItem.product.id)}
              />
            ))}
          </div>
          <div className="sm:hidden border-collapse">
            {cart.map((cartItem) => (
              <SmLogue
                key={cartItem.product.id}
                quantity={quantityMap[cartItem.product.id]}
                product={cartItem.product}
                onRemove={() => handleRemove(cartItem.product.id)}
                onChange={(newQuantity) => handleChange(newQuantity, cartItem.product.id)}
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between border-2 border-gray-300 p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <input
                type="text"
                className="m-2 p-2 border border-gray-300 rounded w-full sm:max-w-xs"
                placeholder="Coupon Code"
              />
              <button className="m-2 px-8 py-2 bg-red-500 rounded-md text-white font-bold hover:bg-red-600 w-full sm:max-w-xs">
                APPLY COUPON
              </button>
            </div>
            <button
              onClick={handleUpdate}
              className={`m-2 px-8 py-2 rounded-md font-bold ${classText} w-full sm:w-auto sm:max-w-xs`}
            >
              UPDATE CART
            </button>
          </div>
        </>
      )}
    </div>
  );  
};

export default withCart(CatalogueList);