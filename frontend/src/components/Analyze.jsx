
import { useState, useRef } from "react"
import "./Analyze.css"
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const Analyze = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  const fileInputRef = useRef(null)

  //**************FILE USAGE******************* */
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    handleFile(file)
  }

  const handleDrop = (event) => {
    event.preventDefault() //Prevent default behavior from browser
    event.stopPropagation()

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0]
      handleFile(file)
    }
  }

  const handleFile = (file) => {
    if (file) {
      //Verify size file 5MB
      if (file.size > 5 * 1024 * 1024) {
        alert("El archivo es demasiado grande. El tamaño máximo es 5MB.")
        return
      }

      //Verify file type
      if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
        alert("Solo se permiten archivos JPG o PNG.")
        return
      }

      setSelectedFile(file)

      //Create URL for previsualization
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="photo-upload-container">
      

      <div className="photo-section">
        <h2>Upload a photo</h2>
        <p>Upload an existing photo to analyze it</p>
        
        {/*Add class with-preview if previewUrl has some value*/}
        <div
          className={`upload-area ${previewUrl ? "with-preview" : ""}`} 
          onClick={handleUploadClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
        {/*Conditional. If previewUrl has a value or not*/}
          {previewUrl ? (
            <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="preview-image" />
          ) : (
            <>
              <FileUploadIcon size={40} className="upload-icon" />
              <p className="upload-text">Click to upload or drag and drop</p>
              <p className="upload-format">PNG, JPG (MAX. 5MB)</p>
            </>
          )}
          {/*Formats and type*/}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
            className="file-input"
          />
        </div>
      </div>
    </div>
  )
}


