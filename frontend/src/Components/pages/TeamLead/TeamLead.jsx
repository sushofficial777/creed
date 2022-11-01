import React, { useState, useEffect } from 'react';

import './TeamLead.css'
import Sidebar from '../../Sidebar/Sidebar';
import Menubar from '../../Menubar/Menubar';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useMemo } from 'react';
import {Link} from 'react-router-dom'

const TeamLead = () => {



    const columns = useMemo(() => [
        { field: '_id', headerName: 'Id',width:100 },
        { field: 'role', headerName: 'role', width:200},
        { field: 'firstName', headerName: 'name',width:200 },
        { field: 'email', headerName: 'email',width:200 },
        { field: 'departmentname', headerName: 'department',width:200 },
       
    ], [])


    //fetching data from database
    const [data, setData] = useState([]);
    console.log(data);
    const fetchteamlead = () => {
        fetch('/getteamlead').then((res) => {

            return res.json();

        }).then((teamleadData) => {
            const teamleads = teamleadData;
            setData(teamleads.data);
            console.log(teamleads.data);

        })
    }
    useEffect(() => {
        fetchteamlead();

    }, [])

    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="teamlead-wrapper">
                <div className="teamlead-container">
                    <DndProvider backend={HTML5Backend}  >
                        <Box
                            sx={{
                                height: 650,
                                width: '100%'
                            }}
                        >
                            <Typography
                                variant='h5'
                                component='h3'
                                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
                            >
                                <div className="grid-title">
                                <h2>TeamLead Data</h2>

                                <Link to="/admin/Dashboard/teamleads/new"><button>New TeamLead</button></Link>

                            </div>
                            </Typography>
                            <DataGrid
                                columns={columns}
                                rows={data}
                                getRowId={row => row._id}
                            />
                           




                        </Box>
                    </DndProvider>
                </div>



            </div>
        </>
    );
}

export default TeamLead;
