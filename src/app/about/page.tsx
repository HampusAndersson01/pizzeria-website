import React from "react";

export default function AboutUs() {
  const aboutData = {
    title: "About Our Pizzeria",
    content:
      "Welcome to Pizzeria, where passion for pizza meets a commitment to quality. Founded in London by pizza enthusiasts, our mission is simple: to serve you the most delicious pizzas made from the finest locally sourced ingredients. Each pizza is crafted with care and cooked to perfection in our wood-fired oven.",
    aboutOwner:
      "Meet our founder, Matteo Andersson. With a passion for Italian cuisine and years of experience in culinary arts, Matteo brings authenticity and innovation to Pizzeria. His vision is to create a welcoming space where pizza lovers can indulge in traditional flavors and exciting new creations alike.",
    ownerImage: "https://placehold.co/400x600",
  };

  return (
    <main className="max-w-4xl w-full bg-transparent p-6 text-center">
      <h1 className="text-4xl font-bold text-center text-Highlight mb-4">
        {aboutData.title}
      </h1>
      <p className="text-lg text-gray-300 mb-8">{aboutData.content}</p>
      <div className="space-y-4 text-gray-800">
        <img
          src={aboutData.ownerImage}
          alt="Owner"
          className="mx-auto rounded-lg shadow-lg"
          style={{ maxWidth: "300px", maxHeight: "600px" }}
        />
        <p className="text-gray-300">{aboutData.aboutOwner}</p>
      </div>
    </main>
  );
}
