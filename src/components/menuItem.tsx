import React from "react";
import { MenuItem } from "@/types/types"; // Ensure the correct path to your types

interface Props {
  item: MenuItem;
}

const MenuItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-base">{item.description}</p>{" "}
      <p className="text-gray-800 mt-2 text-lg">{item.price}</p>
    </div>
  );
};

export default MenuItemComponent;
