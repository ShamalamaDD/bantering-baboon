import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

export default function UploadZone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Dropped files:", acceptedFiles);
    // TODO: handle file upload here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "audio/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
        isDragActive ? "border-pink-400 bg-gray-700" : "border-gray-600 bg-gray-800"
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto mb-2 text-pink-400" size={36} />
      {isDragActive ? (
        <p>Drop your voice note here...</p>
      ) : (
        <p>Drag & drop your voice note, or click to select</p>
      )}
    </div>
  );
}
