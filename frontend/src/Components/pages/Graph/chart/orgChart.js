import React, { useState, useRef,useEffect, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import CustomNodeContent from "./customNodeContent";
import CustomExpandButton from "./customExpandButton";
import EmployeeDetailsCard from "./employeeDetailsCard";

const OrganizationalChart = (props) => {
  const d3Container = useRef(null);
  // console.log(d3Container);

  console.log(props.data[1].id);
  const [cardShow, setCardShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  // console.log(props.data);   
  const handleShow = () => setCardShow(true);
  const handleClose = () => setCardShow(false);


  useEffect(() => {
    const toggleDetailsCard = (nodeId) => {
      handleShow();
      setEmployeeId(nodeId);
      
    };
    const chart = new OrgChart();
    if (props.data && d3Container.current) {

      chart

        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 300)
        .nodeHeight((d) => 103)
        // .zoomTransform(200)
        .compactMarginBetween((d) => 50)
        .onNodeClick((d) => {
          toggleDetailsCard(d);
        })
        
        .buttonContent((node, state) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomExpandButton {...node.node} />
            
          );
        })
        .nodeContent((d) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomNodeContent {...d} />
          );
        })


        .render();
    }
    
  }, props, props.data);
// console.log(props.data);
  return (
    <div className="org-chart" ref={d3Container}>
      {cardShow && (
        <EmployeeDetailsCard
          employees={props.data}  
          
          employee={props.data.find((employee) => employee.id === employeeId)}

          handleClose={handleClose}

        />
      )}
    </div>
  );
};

export default OrganizationalChart;
