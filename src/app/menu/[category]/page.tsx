// pages/menu/[category].tsx

import MenuComponent from "@/components/menuComponent";

export default function MenuCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return <MenuComponent params={{ category: params.category as string }} />;
}
