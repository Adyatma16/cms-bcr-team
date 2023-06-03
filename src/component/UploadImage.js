import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import Segment from "./segment";
import Button from "./Button";
import { FormGroup, FormText } from "reactstrap";

const fileTypes = ["JPG", "PNG", "GIF"];

function UploadImage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const [isUpload, setIsUpload] = useState();
  console.log(file);

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
      <FormGroup
        className="upload-file d-flex align-items-center justify-content-start"
        style={{
          marginBottom: "0px",
          background: "white",
          height: "100%",
          width: "338px",
          borderRadius: "2px",
          border: "solid",
          borderColor: "#D0D0D0",
          cursor: "pointer",
          borderWidth: "1px",
          //   paddingLeft: "4px",
        }}
      >
        {file ? (
          <img
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
            src={URL.createObjectURL(file)}
          />
        ) : (
          <p
            className="d-flex m-0 py-2 "
            style={{
              paddingLeft: "13px",
              fontSize: "12px",
              fontWeight: "300px",
              color: "#A0A0A0",
            }}
          >
            Upload Foto Mobil
          </p>
        )}
      </FormGroup>
      <i className="fa-solid fa-cloud-arrow-up"></i>
      <FormText className="form-text-info m-0" tag="p">
        File size max. 2MB
      </FormText>
    </FileUploader>
  );
}

export default UploadImage;
