import React,{useEffect} from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ShowMap from './ShowMap';
import { useNavigate } from 'react-router-dom';
const CompanyMap = () => {
     
    return (

        <>
        <Sidebar/>
        <div className='create-user-wrapper'>
        <ShowMap/>
        </div>
       
        </>
    );
}

export default CompanyMap;
