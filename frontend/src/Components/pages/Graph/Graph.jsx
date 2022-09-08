import React, { useState, useEffect, useRef } from 'react';
import './Graph.css'
import Sidebar from '../../Sidebar/Sidebar';
import Menubar from '../../Menubar/Menubar';

import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@d3/zoomable-circle-packing";

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

  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);



  return (
    <>
      <Sidebar />
      <div className="graph-wrapper">
        <div className="graph">
          <div ref={chartRef} />
        
        </div>
      </div>

    </>
  );
}

export default Graph;
