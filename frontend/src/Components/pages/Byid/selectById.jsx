import React,{useState,useEffect} from 'react';
import "./selectById.css"

const SelectById = () => {

    const [getData, setGetData] = useState({});
    console.log(getData);

const data = {
    name: ["My Name"],
    age: ["33 Years"],
    address: ["My Address"]
}

useEffect(() => {
    if (data) {
        for (const input in data) {
            if (Error.hasOwnProperty(input)) {
                setGetData({...getData, [input]: data[input][0]});
            }
        }
    }
}, [data]);

// console.log(getData);
    return (
       <>
       <h3>hello</h3>
       </>
    );
}

export default SelectById;
