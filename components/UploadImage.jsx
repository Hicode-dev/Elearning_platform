import React, { useState } from "react";
import Image from 'next/image'
import axios from "axios";

const UploadImage = () => {
  const [data, setData] = useState("");

  const handleUpload = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setData(reader.result);
    };
  };

  const postImage = () => {
    // Make sure there is data (image) to upload
    if (data) {
      const url = "http://localhost:1234/images"; // Replace with your server endpoint for handling image upload

      // Prepare the data to send in the POST request
      const imageData = {
        image: data,
      };

      // Send the POST request using axios
      axios
        .post(url, imageData)
        .then((response) => {
          // Handle the response after the image is uploaded successfully, if needed
          console.log("Image uploaded successfully:", response);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto p-5 border-spacing-1 border-gray shadow-xl flex items-center justify-between ">
        <input
          onChange={handleUpload}
          type="file"
          name="imageUploader"
          id="imageUploader"
        />
        <button
          onClick={postImage}
          className="bg-gray-800 text-white font-bold py-1 px-3 rounded-md"
        >
          Add Image
        </button>
        {data ? (
          <imgmg className="w-14 h-14 rounded-3xl" src={data} alt="Uploaded" />
        ) : null}
      </div>
    </div>
  );
};

export default UploadImage;
