import "./NewManager.css";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import Menubar from "../../Dashboard/Menubar/Menubar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewManager = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <>
    <Sidebar/>
    <Menubar />
 
    </>
  );
};


export default NewManager;
