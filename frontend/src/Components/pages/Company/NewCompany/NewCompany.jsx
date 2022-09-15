import React, { useState, useEffect } from 'react';
import './NewCompany.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';


import { ToastContainer, toast } from 'react-toastify';

const NewCompany = () => {

    const [company, setCompany] = useState({
         companyName: ""
    })
   const [file, setFile] = useState("");
   console.log(file);
    let name, value;

    

    const handleInput = (e) => {

        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setCompany({ ...company, [name]: value });

    }
    const sendData = async (e) => {
        e.preventDefault();

        const { companyName } = company;
      
        console.log(`nmdndn ${companyName}`);
        console.log(`image ${file[0]}`);

        const res = await fetch("/addcompany", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               companyName, file
            })

        })
        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("invalid creation")
            console.log("user cannot  created");
        }
        if (res.status === 422) {
            window.alert("email allready exist")
            console.log("email exist already");
        }
        else {
            window.alert('user created')
            console.log("user created");
        }
    }

  

    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="create-user-wrapper">
                <h2>Add new Company</h2>
                <form action="" method='POST' className='create-user-form'>

                    <div className="user-image-wrapper-employee">
                        <div className="user-image"><img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt="" /></div>
                        <div className="user-image-upload">
                            <input type="file" name='select-image' accept="image/*" id="select-image"
                                onChange={(e) => setFile(e.target.files[0])} />
                            <label htmlFor="select-image">upload logo</label>

                        </div>
                    </div>
                    <div className="create-form-wrapper" data-aos='fade-up'>
                        <div className="field department-input">
                            <div className="input ">
                                <label htmlFor="name">Company Name</label>
                                <input type="text" placeholder='Robert' name='companyName' value={company.companyName} onChange={handleInput} />

                            </div>
                            <div className="input select-input dep-com" >

                                <label htmlFor="company">Company</label>
                                <select name="company" id="company" className='dep-sel'>

                                </select>

                            </div>


                        </div>


                        <div className="field">

                            <div className="input"><button onClick={sendData}>Submit</button></div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewCompany;
