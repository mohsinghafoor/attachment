import React, { useRef, Fragment } from "react";
import ActionSheet from "actionsheet-react";
import { SingleImageUpload } from "./SingleImage";
import MultipleImageUpload from "./MultipleImages";
import MultipleImageUploadTest from "./MultipleImagesTest";
import Test2 from "./New";

const Action = () => {
  const ref = useRef();

  const handleOpen = () => {
    ref.current.open();
  };

  const handleClose = () => {
    ref.current.close();
  };

  return (
    <Fragment>
      <button onClick={handleOpen} className="message-btn">
        Message
      </button>
      <ActionSheet ref={ref}>
        <div style={style.content}>
          <Test2 />
        </div>
      </ActionSheet>
    </Fragment>
  );
};

const style = {
  content: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Action;
