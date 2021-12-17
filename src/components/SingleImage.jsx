import React, { Component, useState, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
export const SingleImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const onClear = () => {
    setSelectedFile(undefined);
    return;
  };
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {selectedFile && (
        <img src={preview} style={{ width: 100, padding: 20 }} />
      )}
      <input type="file" onChange={onSelectFile} />

      <CancelIcon onClick={onClear} style={{ color: "gray" }} />
    </div>
  );
};
