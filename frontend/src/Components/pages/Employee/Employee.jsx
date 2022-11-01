import React, { useState,useEffect } from 'react';

import './Employee.css'
import Sidebar from '../../Sidebar/Sidebar';
import Menubar from '../../Menubar/Menubar';
import {Link} from 'react-router-dom'
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useMemo } from 'react';

const Employee = () => {



    const columns = useMemo(() => [
        { field: '_id', headerName: 'Id',width:100,editable:false },
        { field: 'firstName', headerName: 'name', width:200 },
        { field: 'role', headerName: 'role', width:200 },
     
        { field: 'email', headerName: 'email',width:200  },
       
    ], [])
   

    //fetching data from database
const [data,setData ] = useState([]);
console.log(data);
    const fetchEmployee = () => {
        fetch('/getemployee').then((res) => {
            
            return res.json();
  
        }).then((employeeData) => {
            const employees =employeeData;
            setData(employees.data);
            console.log(employees.data);
           
        })
    }
    useEffect(() => {
        fetchEmployee();
     
        }, [])

    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="employee-wrapper">
                <div className="employee-container">
                    <DndProvider backend={HTML5Backend}  >
                        <Box
                            sx={{
                                height: 620,
                                width: '100%'
                            }}
                        >
                            <Typography
                                variant='h5'
                                component='h3'
                                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
                            >
                               <div className="grid-title">
                                <h2>Employee Data</h2>
                                
                                <Link to="/admin/Dashboard/employees/new"><button>New Employee</button></Link>

                                </div>
                            </Typography>
                            <DataGrid
                                columns={columns}
                                rows={data}
                                getRowId= {row=>row._id}
                            />




                        </Box>
                    </DndProvider>
                </div>

            
               
            </div>
        </>
    );
}

export default Employee;
