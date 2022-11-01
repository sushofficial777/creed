import React, { useState,useEffect } from 'react';

import './Company.css'
import Sidebar from '../../Sidebar/Sidebar';
import Menubar from '../../Menubar/Menubar';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useMemo } from 'react';
import { Link } from 'react-router-dom'

const Company = () => {



    const columns = useMemo(() => [
        { field: '_id', headerName: 'Id', width:100},
        { field: 'companyName', headerName: 'company name', width:200},
        { field: 'firstName', headerName: 'manager name',    width:200},
        { field: 'email', headerName: 'manager email', width:200 },
        { field: 'phone', headerName: 'manager phone',width:200 },
      
    ], [])
   

    //fetching data from database
const [data,setData ] = useState([]);
console.log(data);
    const fetchcompany = () => {
        fetch('/getcompany').then((res) => {
            
            return res.json();
  
        }).then((companyData) => {
            const companys =companyData;
            setData(companys.data);
            console.log(companys.data);
           
        })
    }
    useEffect(() => {
        fetchcompany();
     
        }, [])

    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="company-wrapper">
                <div className="company-container">
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
                                sx={{ textAlign: 'center', mt: 3, mb:3 }}
                            >
                               <div className="grid-title">
                                <h2>Company Data</h2>
                                
                                <Link to="/admin/Dashboard/company/new"><button>New Company</button></Link>

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

export default Company;
