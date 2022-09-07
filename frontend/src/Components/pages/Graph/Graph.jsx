import React, { useState, useEffect } from 'react';
import './Graph.css'
import Sidebar from '../../Sidebar/Sidebar';
import Menubar from '../../Menubar/Menubar';

const Graph = () => {

  const [data, setData] = useState([]);

  const fetchManager = () => {
    fetch('/getmanager').then((res) => {

      return res.json();

    }).then((managerData) => {
      const manager = managerData;
      setData(manager.data);
      console.log(manager.data);

    })
  }
  useEffect(() => {
    fetchManager();

  }, [])

  ///fetch teamleaders
  const [TlData, setTlData] = useState([]);
  console.log(TlData);
  const fetchTl = () => {
    fetch('/getteamlead').then((res) => {

      return res.json();
      console.log(`jhfdjhdjhj ${res}`);

    }).then((TlData) => {
      const Tl = TlData;
      setTlData(Tl.data);
     

    })
  }
  useEffect(() => {
    fetchManager();
    fetchTl();


  }, [])


   ///fetch employees
   const [EmpData, setemplData] = useState([]);
 
   const fetchEmployee = () => {
     fetch('/getemployee').then((res) => {
 
       return res.json();
 
     }).then((data) => {
       const empdata = data;
       setemplData(empdata.data);
      
 
     })
   }
   useEffect(() => {
     fetchManager();
     fetchTl();
     fetchEmployee();
 
 
   }, [])
 

  return (
    <>
      <Sidebar />
      <Menubar />
      <div className="graph-wrapper">
        <div className="graph">
          <div className="section1">

            {data.map((data) => (
              <div className="node">
                
               {data.name}
               <p>{data.role}</p>
              </div>
            ))}

          </div>
          {/* ///////sectuion2 is starting */}
          <div className="section2">
           
          {TlData.map((TlData) => (
              <div className="node">
                
               {TlData.name}
               <p>{TlData.role}</p>
              </div>
            ))}
          </div>
          {/* ///////sectuion3 is starting */}
          <div className="section3">
          {EmpData.map((EmpData) => (
              <div className="node">
                
               {EmpData.name}
               <p>{EmpData.role}</p>
              </div>
            ))}
          </div>
        </div>



      </div>



    </>
  );
}

export default Graph;
