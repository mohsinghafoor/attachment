import React, { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import CancelIcon from "@material-ui/icons/Cancel";
import "./Styles.css";
const Test2 = () => {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
    <form>
      <div className="form-group-preview">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item} className="img-box">
                <img src={item} alt="" style={{ width: 100 }} />
                <CancelIcon
                  onClick={() => deleteFile(index)}
                  className="delete-btn"
                />
              </div>
            );
          })}
      </div>

      <div className="form-group">
        <input
          type="file"
          disabled={file.length === 5}
          className="form-control"
          id="file"
          onChange={uploadSingleFile}
          multiple
          style={{ display: "none" }}
        />
        <label htmlFor="file" className="label">
          <AddAPhotoIcon />
        </label>
      </div>
      {/* <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button> */}
    </form>
  );
};

export default Test2;
