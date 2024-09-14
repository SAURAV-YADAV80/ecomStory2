import  { memo } from "react";
import { Link } from "react-router-dom";
import { withCart, withUser } from "./withProvider";
import { UserContextType } from "./providers/userProvider";
import { CartContextType } from "./providers/cartProvider";


interface HeaderProps extends CartContextType, UserContextType{
  countCart: number;
}

function Header({ countCart, user, setUser }: HeaderProps) {
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <div className="fixed w-full bg-gray-100 px-4 py-2 shadow-md z-10">
      <div className="flex max-w-6xl mx-auto justify-between items-center text-gray-800">
        <div className="flex flex-col sm:flex-row items-center">
          <Link to="/" className="flex items-center">
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
              alt="amazon-icon"
            />
          </Link>
          {user && (
            <h1 className="ml-4 text-xl md:text-2xl text-gray-800">
              Hey, {user.full_name}
            </h1>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {!user ? (
            <Link
              to="/SignUp"
              className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition"
            >
              SignUp
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition"
            >
              Logout
            </button>
          )}
          <Link to="/Catalogue" className="relative flex items-center">
          <svg
  className="w-12 text-gray-600 hover:text-blue-500 transition-colors duration-150"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M4 4h2l3 9h11l3-9H6" />
  <circle cx="8" cy="19" r="1" />
  <circle cx="16" cy="19" r="1" />
</svg>
            {countCart >= 0 && (
              <p className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {countCart}
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

const newHeader = memo(Header);
export default withUser(withCart(newHeader));