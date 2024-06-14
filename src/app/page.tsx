import React from "react";

export default function HomePage() {
  const HomePageData = {
    title: "Pizzeria",
    content:
      "Welcome to our pizzeria! We offer the best pizzas in town with fresh ingredients and authentic flavors.",
    address: "123 Mock Address, London",
    openingHours: "Opening Hours: Mon-Fri 11:00-22:00, Sat-Sun 12:00-23:00",
    phone: "Phone: 0340-123456",
  };

  return (
    <main className="max-w-4xl w-full bg-transparent p-6 text-center">
      <h1 className="text-4xl font-bold text-center text-Highlight mb-4">
        {HomePageData.title}
      </h1>
      <p className="text-lg text-gray-300 mb-8">{HomePageData.content}</p>
      <div className="space-y-4 text-gray-800">
        <p className="text-gray-300">{HomePageData.address}</p>
        <p className="text-gray-300">{HomePageData.openingHours}</p>
        <p className="text-gray-300">{HomePageData.phone}</p>
      </div>
    </main>
  );
}
