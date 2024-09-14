import React, { useState } from "react";
import Billing from "./Billing";
import CatalogueList from "./CatalogueList";
import { withUser } from "./withProvider";
import { UserContextType } from "./providers/userProvider";

interface CatalogueProps extends UserContextType {
}

const Catalogue: React.FC<CatalogueProps> = () => {
  const [newTotal, setNewTotal] = useState<number>(0);

  return (
    <div className="w-11/12 bg-white overflow-auto my-10 p-2 pb-10">
      <div className="bg-white max-w-6xl mx-auto flex flex-col">
        <CatalogueList setNewTotal={setNewTotal} />
        <Billing newTotal={newTotal} />
      </div>
    </div>
  );
};

export default withUser(Catalogue);