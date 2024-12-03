import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";

export const viewAllBlog = async (req, res) => {
  try {
    const getAllAvailableBlog = await Blog.find({});
    console.log(getAllAvailableBlog);

    // Store user IDs and names
    let storeUserName = [];

    for (const blog of getAllAvailableBlog) {
      // Convert author to string if it's an ObjectId
      const userId = blog.author.toString();

      // Fetch the user's name by their ID
      const user = await User.findById(userId);

      if (user) {
        storeUserName.push({
          blogId: blog._id,
          userId: user._id,
          userName: user.username, // Assuming `name` exists in the User model
        });
      }
    }

    if (!getAllAvailableBlog || getAllAvailableBlog.length === 0) {
      return res.status(200).json({ message: "No Blog Available" });
    }

    return res.status(200).json({
      success: true,
      Blogs: getAllAvailableBlog,
      Authors: storeUserName, // Include author details
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: `Internal Server Error: ${error.message}`,
    });
  }
};
