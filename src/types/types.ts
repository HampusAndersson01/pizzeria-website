export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}
