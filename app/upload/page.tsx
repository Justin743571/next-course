"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPuclicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} alt="woman" width={270} height={180} />
      )}
      <CldUploadWidget
        uploadPreset="biipclzo"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPuclicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
