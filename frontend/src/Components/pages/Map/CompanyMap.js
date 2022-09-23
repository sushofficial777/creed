import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ShowMap from './ShowMap';
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
