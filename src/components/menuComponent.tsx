// components/MenuComponent.tsx

import React from "react";
import { MenuData } from "@/data/menuData";
import { MenuCategory } from "@/types/types";
import MenuItemComponent from "@/components/menuItem";

interface Props {
  params?: { category: string }; // Make params optional
}

const MenuComponent: React.FC<Props> = ({ params }) => {
  const toTitleCase = (str: string) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  if (params && params.category) {
    // Dynamic rendering based on params
    const category: MenuCategory | undefined = MenuData.find(
      (category) => category.category.toLowerCase() === params.category
    );

    if (!category) {
      return <div className="text-center text-red-600">Category not found</div>;
    }

    const items = category.items;

    if (!items.length) {
      return <div className="text-center">No items found in this category</div>;
    }

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-left text-Highlight mb-4">
          {toTitleCase(params.category)}
        </h2>
        <ul className="space-y-4">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-lg">
              <MenuItemComponent item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    // Static rendering of all menu categories
    const menuData: MenuCategory[] = MenuData;

    return (
      <div className="max-w-4xl mx-auto p-6">
        <ul className="space-y-8">
          {menuData.map((category, index) => (
            <li key={index} className="text-lg">
              <h2 className="text-3xl font-bold text-left text-Highlight mb-4">
                {toTitleCase(category.category)}
              </h2>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <MenuItemComponent item={item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default MenuComponent;
