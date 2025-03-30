
import { useState, useRef } from "react"
import "./Analyze.css"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const Analyze = () => {
  const [cameraActive, setCameraActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const videoRef = useRef(null)
  const fileInputRef = useRef(null)
  const streamRef = useRef(null)

  //**************CAMERA USAGE******************* */
  const handleStartCamera = async () => {
    try {
      //Stop previous streams
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }

      //We can try to obtain access to camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })

      streamRef.current = stream //Save stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream //Assign stream to element videoRef
        setCameraActive(true) //Activate state
      }
    } catch (error) {
      console.error("Error al acceder a la cámara:", error)
      alert("No se pudo acceder a la cámara. Por favor, verifica los permisos.")
    }
  }

  const handleStopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop()) //Stop stream
      streamRef.current = null
      setCameraActive(false)
    }
  }

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
        <h2>Take a photo</h2>
        <p>Use your camera to capture your facial expression.</p>

        {cameraActive ? (
          <div className="camera-container">
            <video ref={videoRef} autoPlay playsInline className="camera-preview" />
            <button className="camera-button stop" onClick={handleStopCamera}> {/*If camera is active, show button to stop it*/}
              Stop camera
            </button>
          </div>
        ) : (
          <button className="camera-button" onClick={handleStartCamera}>
            <CameraAltIcon size={20} /> {/*If camera is not active, show button to activate it*/}
            Iniciar cámara
          </button>
        )}
      </div>

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


