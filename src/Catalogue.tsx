import React, { useState } from "react";
import Billing from "./Billing";
import CatalogueList from "./CatalogueList";
import { withUser } from "./withProvider";
import { UserContextType } from "./providers/userProvider";

// Define the props interface
interface CatalogueProps extends UserContextType {
  // `UserContextType` should include all necessary props, including `isLoggedIn`
}

const Catalogue: React.FC<CatalogueProps> = () => {
  const [newTotal, setNewTotal] = useState<number>(0);

  return (
    <div className="w-11/12 bg-white overflow-auto my-10 p-2 pb-10">
      <div className="bg-white max-w-6xl mx-auto flex flex-col">
        <CatalogueList setNewTotal={setNewTotal} /> {/* Pass setNewTotal here */}
        <Billing newTotal={newTotal} /> {/* BillingProps includes `newTotal`, `user`, and `isLoggedIn` */}
      </div>
    </div>
  );
};

export default withUser(Catalogue);