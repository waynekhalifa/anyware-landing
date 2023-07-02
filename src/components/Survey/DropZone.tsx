import { FC, useCallback,useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Divider, Link, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Colors from "./Colors";

interface MyProps{
  handleSelectedImage:(image:any)=>void,
  handleSelectedColor:(color:any)=>void
}
const DropzoneField: React.FC<MyProps> = ({handleSelectedColor,handleSelectedImage}) => {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    for (let file of acceptedFiles) {
      try {
        handleSelectedImage(file)
        setSelectedImage(file.name)
        
      } catch (err: Error | any) {
        console.log("Error uploading file: ", err);
      }
    }

    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [selectedImage,setSelectedImage]=useState("")
  const handleImageChange=(event:any)=>{
    // console.log(event.target.files[0])
    // handleSelectedImage(event.target.files[0])
    // setSelectedImage(event.target.files[0].name)
  }
  return (
    <Box sx={{ pt: 4, pb: 4, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
  <Box
    sx={{
      width: { xs: "100%", sm: 140 },
      height: { xs: 140, sm: "auto" },
      borderRadius: "100%",
      border: "1px dotted",
      borderColor: "divider",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: { xs: 3, sm: 0 },
    }}
    {...getRootProps()}
  >
    <input onChange={handleImageChange} {...getInputProps()} />
    {isDragActive ? (
      <Typography variant="body2">Drop image Here</Typography>
    ) : (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "1vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CloudUploadOutlinedIcon fontSize="small" />
          <Typography variant="body2" textAlign="center" sx={{ mt: 1 }}>
            Drop an Image or <Link>browse</Link>
          </Typography>
        </Box>
        {selectedImage !== "" && <label style={{ position: "absolute", top: "115%" }}>{selectedImage}</label>}
      </Box>
    )}
  </Box>
  <Box
    sx={{
      pl: { xs: 0, sm: 3 },
      pr: { xs: 0, sm: 3 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <Divider orientation="vertical" sx={{ height: "40%" }} />
    <Typography>or</Typography>
    <Divider orientation="vertical" sx={{ height: "40%" }} />
  </Box>
  <Colors handleSelectedImage={handleSelectedImage} handleSelectedColor={handleSelectedColor} />
</Box>

  );
};

export default DropzoneField;
