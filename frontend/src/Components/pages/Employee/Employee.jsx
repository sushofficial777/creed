import React, { useState,useEffect } from 'react';

import './Employee.css'
import Sidebar from '../../Sidebar/Sidebar';
import Menubar from '../../Menubar/Menubar';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useMemo } from 'react';

const Employee = () => {



    const columns = useMemo(() => [
        { field: 'role', headerName: 'role', },
        { field: 'name', headerName: 'name', },
        { field: 'email', headerName: 'email', },
        { field: '_id', headerName: 'Id', },
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
                                height: 540,
                                width: '100%'
                            }}
                        >
                            <Typography
                                variant='h5'
                                component='h3'
                                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
                            >
                                 Department1
                            </Typography>
                            <DataGrid
                                columns={columns}
                                rows={data}
                                getRowId= {row=>row._id}
                            />




                        </Box>
                    </DndProvider>
                </div>

                <div className="employee-container">
                    <DndProvider backend={HTML5Backend}  >
                        <Box
                            sx={{
                                height: 540,
                                width: '100%',
                                
                            }}
                        >
                            <Typography
                                variant='h5'
                                component='h3'
                                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
                            >
                               Department2
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
