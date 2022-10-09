import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Divider, Link, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Colors from "./Colors";

const DropzoneField: FC = () => {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    for (let file of acceptedFiles) {
      try {
        console.log(file);
      } catch (err: Error | any) {
        console.log("Error uploading file: ", err);
      }
    }

    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box sx={{ pt: 4, pb: 4, display: "flex" }}>
      <Box
        sx={{
          width: 140,
          height: 140,
          borderRadius: "100%",
          border: "1px dotted",
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography variant="body2">Drop image Here</Typography>
        ) : (
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
            <Typography variant="body2" textAlign={"center"} sx={{ mt: 1 }}>
              Drop an Image or <Link>browse</Link>
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          pl: 3,
          pr: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider orientation="vertical" sx={{ height: "40%" }} />
        <Typography>or</Typography>
        <Divider orientation="vertical" sx={{ height: "40%" }} />
      </Box>
      <Colors />
    </Box>
  );
};

export default DropzoneField;
