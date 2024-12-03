import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Include Quill's snow theme styles
import Aside from "../Aside";
import axios from "axios";

// Quill toolbar options
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // Toggled buttons
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }], // Header buttons
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], // List buttons
  [{ script: "sub" }, { script: "super" }], // Superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // Indentation buttons
  [{ direction: "rtl" }], // Text direction
  [{ size: ["small", false, "large", "huge"] }], // Font size
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
  [{ font: [] }], // Fonts
  [{ align: [] }], // Alignment
  ["link", "image", "video", "formula"], // Media
  ["clean"], // Remove formatting
];

const UploadNewPost = () => {
  const [isActive, setIsActive] = useState(false); // Manage title input focus
  const [title, setTitle] = useState(""); // Manage title input value
  const { quill, quillRef } = useQuill({
    modules: { toolbar: toolbarOptions },
    theme: "snow", // Use Quill's snow theme
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log("Text change!");
        console.log("Text:", quill.getText()); // Log plain text content
        console.log("Content:", quill.root.innerHTML); // Log HTML content
      });
    }
  }, [quill]);

  const handleSubmit = async () => {
    alert("asdklfhasdf")
    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }

    if (!quill) {
      alert("Quill editor is not ready yet.");
      return;
    }

    const content = quill.root.innerHTML; // Extract the HTML content
    const formData = new FormData();
    formData.append("title", title); // Add title to FormData
    formData.append("content", content); // Add content to FormData

    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/api/blog/upload", // Replace with your API endpoint
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   if (response.data.success) {
    //     alert("Blog uploaded successfully!");
    //   } else {
    //     alert("Failed to upload the blog.");
    //   }
    // } catch (error) {
    //   console.error("Error uploading blog:", error);
    //   alert("An error occurred. Please try again.");
    // }
  };

  return (
    <div className="flex">
      <Aside />
      <div className="flex flex-col w-full p-6">
        {/* Title Input */}
        <div className="relative mb-6">
          <label
            className={`absolute left-4 transition-all duration-300 ${
              isActive
                ? "top-[-2px] text-sm text-[#F57C00]"
                : "top-4 text-base text-gray-500"
            }`}
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={(e) => setIsActive(e.target.value !== "")}
            className="border-b-2 w-full border-[#F57C00] outline-none p-3"
          />
        </div>

        {/* Quill Editor */}
        <div style={{ width: "100%", height: "400px" }}>
          <div ref={quillRef} />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-2 bg-[#F57C00] text-white rounded hover:bg-[#d66a00]"
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default UploadNewPost;
