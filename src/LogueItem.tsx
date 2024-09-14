import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface LogueItemProps {
  product: Product;
  quantity: number;
  onRemove: (productId: number) => void;
  onChange: (newQuantity: number, productId: number) => void;
}

const LogueItem: React.FC<LogueItemProps> = ({ product, quantity, onRemove, onChange }) => {
  const handleRemove = () => {
    onRemove(product.id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +event.target.value;
    onChange(newQuantity, product.id);
  };

  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <div className="flex items-center justify-between border-b border-l border-r border-gray-300 p-4 bg-white">
      <span className="flex items-center w-2/5">
        <button className="mr-4 p-2" onClick={handleRemove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
          </svg>
        </button>
        <img
          className="w-20 h-16 object-cover"
          src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt={product.title}
        />
        <p className="ml-4 text-red-600 font-bold truncate w-full">
          {product.title}
        </p>
      </span>
      <span className="w-1/5 text-center text-gray-600">${product.price.toFixed(2)}</span>
      <span className="w-1/5 text-center">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleChange}
          className="w-20 border border-gray-300 rounded p-1 text-center"
        />
      </span>
      <span className="w-1/5 text-center text-gray-600">${subtotal}</span>
    </div>
  );
};

export default LogueItem;