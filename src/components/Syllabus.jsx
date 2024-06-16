import React, { useState } from "react";
import SyllabusItem from "./SyllabusItem";

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React.",
      votes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Advanced React",
      description: "Learn advanced concepts in React.",
      votes: 0,
      comments: [],
    },
    {
      id: 3,
      title: "React Hooks",
      description: "Understand React Hooks in depth.",
      votes: 0,
      comments: [],
    },
  ]);

  const handleVote = (id, increment) => {
    setSyllabus((prevSyllabus) =>
      prevSyllabus.map((item) =>
        item.id === id ? { ...item, votes: item.votes + increment } : item
      )
    );
  };

  const handleAddComment = (id, comment) => {
    setSyllabus((prevSyllabus) =>
      prevSyllabus.map((item) =>
        item.id === id
          ? { ...item, comments: [...item.comments, comment] }
          : item
      )
    );
  };

  return (
    <div className="min-w-[60rem] mt-[6rem] mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
      {syllabus.map((item) => (
        <SyllabusItem
          key={item.id}
          item={item}
          onVote={handleVote}
          onAddComment={handleAddComment}
        />
      ))}
    </div>
  );
};

export default Syllabus;
