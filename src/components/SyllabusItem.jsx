import React, { useState } from "react";

const SyllabusItem = ({ item, onVote, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(item.id, comment);
      setComment("");
    }
  };

  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-md">
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-gray-700">{item.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
            onClick={() => onVote(item.id, 1)}
          >
            Vote Up
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => onVote(item.id, -1)}
          >
            Vote Down
          </button>
        </div>
        <p className="text-gray-800 font-semibold">Votes: {item.votes}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Comments</h4>
        {item.comments.map((comment, index) => (
          <p key={index} className="bg-gray-100 p-2 rounded-md mb-2">
            {comment}
          </p>
        ))}
        <div className="flex mt-2">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            className="flex-grow border border-gray-300 rounded-md p-2 mr-2"
            placeholder="Add a comment"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyllabusItem;
