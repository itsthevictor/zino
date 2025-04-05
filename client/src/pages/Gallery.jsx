import React, { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import { mainFetch } from "../utils/customFetch";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const newImages = [...images];
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          newImages.push({
            url: reader.result,
            file: file,
          });
          setImages(newImages);
        };

        reader.readAsDataURL(file);
      });
    },
    [images]
  );

  const handleSubmit = async () => {
    const formData = new FormData();

    images.forEach((image) => {
      formData.append("images", image.file);
    });
    console.log(formData);

    try {
      const response = await mainFetch.post("/upload", {
        formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.json();

      // Handle the uploaded image URLs (e.g., display them)
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select   files</p>
          </div>
        )}
      </Dropzone>{" "}
       <button onClick={handleSubmit}>Upload</button>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={`Image ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;

// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import { mainFetch } from "../utils/customFetch";

// const Gallery = () => {
//   const [images, setImages] = useState([]);

//   // Handle the image drop event
//   const onDrop = (acceptedFiles) => {
//     // Add the dropped images to the state
//     setImages((prevImages) => [
//       ...prevImages,
//       ...acceptedFiles.map((file) =>
//         Object.assign(file, {
//           preview: URL.createObjectURL(file), // Preview for local rendering
//         })
//       ),
//     ]);
//   };

//   // Send the images to the server
//   const uploadImages = async () => {
//     const formData = new FormData();
//     images.forEach((image) => {
//       formData.append("images", image);
//     });

//     try {
//       console.log("sending request");

//       const response = await mainFetch.post("/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Images uploaded successfully:", response.data);
//     } catch (error) {
//       console.error("Error uploading images:", error);
//     }
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: "image/*", // Accept only images
//     multiple: true, // Allow multiple image uploads
//   });

//   return (
//     <div>
//       <div
//         {...getRootProps()}
//         style={{
//           border: "2px dashed #007bff",
//           padding: "20px",
//           textAlign: "center",
//           cursor: "pointer",
//           marginBottom: "20px",
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag & drop some images here, or click to select files</p>
//       </div>

//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ margin: "10px" }}>
//             <img
//               src={image.preview}
//               alt={`preview-${index}`}
//               width="100px"
//               height="100px"
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//         ))}
//       </div>

//       {images.length > 0 && (
//         <button onClick={uploadImages} style={{ marginTop: "20px" }}>
//           Upload Images
//         </button>
//       )}

//     </div>
//   );
// };

// export default Gallery;
