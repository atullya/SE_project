import React, { useEffect, useState } from "react"; // Import useState to manage data
import Aside from "../Aside";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
function AllUserPost() {
  const [posts, setPosts] = useState([]); // State to store the fetched posts

  const fetchAllPost = async () => {
    try {
      // Await the axios request
      let res = await axios.get("/api/blog/uploadedblog", {
        withCredentials: true, // This is the correct way to include cookies in axios
      });
      console.log(res.data);

      if (res.data) {
        setPosts(res.data.posts); // Set the fetched posts data into state
      }
    } catch (error) {
      console.error("Error fetching posts:", error); // Handle any errors
    }
  };

  const deleteBlog = async (delid) => {
    alert(delid);
  };

  useEffect(() => {
    fetchAllPost(); // Call the function to fetch posts when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex cursor-pointer">
      <Aside />
      <div className="w-full  mr-10">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="border-2 border-gray-700 rounded-[5px] mt-16 p-6 flex justify-between group"
            >
              <div className=" flex gap-2 ">
                {post.images && post.images[0] ? (
                  <img
                    src={`http://localhost:4000/uploads/${post.images[0]
                      .split("\\")
                      .pop()}`}
                    className="h-20 w-30"
                  />
                ) : (
                  "No Image Found"
                )}
                <div>
                  <h3
                    style={{ fontFamily: "'Roboto Flex', serif" }}
                    className="text-2xl"
                  >
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-center gap-[20px]">
                    <h3 className="font-mono">
                      {new Date(post.createdAt).toISOString().slice(0, 10)}
                    </h3>
                    <h3 className="border-2 rounded-[10px] p-2 border-gray-500">
                      {post.category}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 ">
                <div className="flex items-center gap-[20px] group">
                  <h2 className="text-2xl">Atullya</h2>

                  {/* Hidden "Show" by default */}
                  <h2 className="hidden group-hover:block ">Show</h2>
                  {/* <h2 className="hidden group-hover:block">Delete</h2> */}
                  <FaTrash
                    className="hidden group-hover:block"
                    onClick={() => deleteBlog(post._id)}
                  />

                  {/* Hidden FaUserCircle by default */}
                  <FaUserCircle className="text-2xl group-hover:hidden" />
                </div>
                <div className="flex gap-6 items-center text-[#90A4AE]">
                  <FaShare className="text-2xl" />
                  <div className="flex gap-3">
                    <p className="text-black">0</p>
                    <MdModeComment className="text-2xl text-black" />
                  </div>
                  <div className="flex gap-3">
                    <p className="text-black">{post.views}</p>

                    <GrView className="text-2xl text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found.</p> // Show a message if no posts are available
        )}
      </div>
    </div>
  );
}

export default AllUserPost;
