"use client";
import React, { useEffect, useState } from "react";

const testimonials = [
  { id: 1, text: "Great service!", author: "John Doe" },
  { id: 2, text: "Very professional.", author: "Jane Smith" },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 bg-gray-100 rounded-md">
      <p className="text-lg text-woodsmoke950">{testimonials[index].text}</p>
      <p className="text-sm font-bold text-woodsmoke950">
        - {testimonials[index].author}
      </p>
    </div>
  );
};

export default Reviews;
