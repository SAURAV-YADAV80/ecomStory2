import React, { useState } from "react";
import Billing from "./Billing";
import CatalogueList from "./CatalogueList";
import { withUser } from "./withProvider";

// Define the props interface
interface CatalogueProps {
  isLoggedIn: boolean;
  cart: Array<any>; // Replace 'any' with the type of cart items if known
  updateCart: (updatedCart: Array<any>) => void;
}

const Catalogue: React.FC<CatalogueProps> = ({ isLoggedIn }) => {
  const [newTotal, setNewTotal] = useState<number>(0);

  return (
    <div className="w-11/12 bg-white overflow-auto my-10 flex flex-col">
      <CatalogueList setNewTotal={setNewTotal} />
      <Billing newTotal={newTotal} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default withUser(Catalogue);
