import React from 'react';
import './Manager.css'
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Menubar from '../Dashboard/Menubar/Menubar';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Manager = () => {
   
    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="container">

              
            </div>

        </>
    );
}

export default Manager;
