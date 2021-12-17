import React, { Component, useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import CancelIcon from "@material-ui/icons/Cancel";
import "./Styles.css";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
//   deleteicon: {
//     background: "red",
//   },
// }));
const MultipleImageUploadTest = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const onClear = (e) => {
    alert("Pressed");
    const filesArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(undefined)
    );
  };
  const handleImageChange = (e) => {
    // console.log(e.target.files[])

    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <div className="img-box">
          <img
            src={photo}
            style={{ width: 100, padding: 10 }}
            alt=""
            key={photo}
          />
          <CancelIcon className="delete-btn" onClick={onClear} />
        </div>
      );
    });
  };

  return (
    <div className="app">
      <div className="heading">Add Your Files Here</div>
      <div>
        <input
          type="file"
          id="file"
          multiple
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <AddAPhotoIcon />
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
    </div>
  );
};
export default MultipleImageUploadTest;
