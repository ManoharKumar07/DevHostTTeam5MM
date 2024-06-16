import React from "react";

export default function BlogCard({ blog }) {
  return (
    <div className="w-90 mx-auto sm:w-96 h-100 bg-black relative hover:ring-4 ring-yellow-400 rounded-2xl">
      <div className=" aspect-w-1 aspect-h-1 h-full ">
        <img
          src={blog.coverImg}
          className="object-cover object-center rounded-2xl"
        />
      </div>
      <div className=" absolute w-full h-full top-0 flex flex-col">
        <div className="flex-1 "></div>
        <div className="flex-1 flex flex-col p-10 bg-gradient-to-t from-black rounded-2xl">
          <div className="flex-1"></div>
          <div>
            <div className="flex items-center justify-between text-gray-300">
              <h1>{blog.publishedDate}</h1>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9">
                  <div className=" aspect-w-1 aspect-h-1">
                    <img
                      src={blog.authorImg}
                      className=" rounded-full object-cover object-center"
                    />
                  </div>
                </div>
                <h1>{blog.authorName}</h1>
              </div>
            </div>
            <h1 className="text-xl font-semibold text-white mt-5">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
