import React from "react";
import MentorCard from "./MentorCard";

const MentorDashboard = () => {
  const mentors = [
    {
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Dr. Jane Doe",
      specialization: "Neuroscience",
      charge: "$200/hr",
      rating: 4.8,
    },
    {
      image:
        "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Prof. John Smith",
      specialization: "Artificial Intelligence",
      charge: "$150/hr",
      rating: 4.7,
    },
    {
      image:
        "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dr. Emily Davis",
      specialization: "Biochemistry",
      charge: "$180/hr",
      rating: 4.9,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-black to-gray-900 flex justify-center items-center">
      <div className="max-w-6xl mx-auto ">
        <div className="h-40 text-white text-center">
          <h1 className="text-4xl font-bold">Meet Our Mentors</h1>
          <p className="text-xl mt-5">
            Expertise in various fields to help you excel and achieve your
            goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-32">
          {mentors.map((mentor, index) => {
            return <MentorCard mentor={mentor} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
