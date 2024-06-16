import React from "react";
import BlogCard from "./BlogCard";

const Dashboard = () => {
  const blogs = [
    {
      coverImg:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      title:
        "AI Revolution: How Artificial Intelligence is Transforming Industries",
      authorImg:
        "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Jane Smith",
      publishedDate: new Date().toDateString(),
    },
    {
      coverImg:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Blockchain Beyond Bitcoin: Exploring the Future of Decentralized Finance",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      authorName: "Tom Johnson",
      publishedDate: new Date().toDateString(),
    },
    {
      coverImg:
        "https://images.unsplash.com/photo-1617839625591-e5a789593135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Quantum Computing: The Next Frontier in Computational Power",
      authorImg:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      authorName: "Emily Brown",
      publishedDate: new Date().toDateString(),
    },
  ];
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-black to-gray-900 flex justify-center items-center mt-16">
      <div className="max-w-6xl mx-auto ">
        <div className="h-60 text-white text-center">
          <h1 className="text-4xl font-bold">Trends Of Tech</h1>
          <p className="text-xl mt-5">
            Passionate about brain optimization, life hacks, and healthy success
            habits to empower individuals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-32">
          {blogs.map((blog, index) => {
            return <BlogCard blog={blog} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
