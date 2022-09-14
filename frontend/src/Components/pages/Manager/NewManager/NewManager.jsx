import React, { useState, useEffect } from 'react';
import './NewManager.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';
import { ImCamera } from 'react-icons/im'

const NewManager = () => {

    const [user, setUser] = useState({
        name: "", email: "", phone: "", country: "", company: "", password: ""
    })
    let name,value;

    const handleInput = (e) => {

        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
     
    }

    const sendData = async (e)=>{
        e.preventDefault();

        const { name, email, phone, country, company, password} =user;

      const res = await  fetch("/adduser",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, country, company, password
            })

        })

        const data = await res.json();

        if(res.status === 400 || !data){
            window.alert("invalid creation")
            console.log("user cannot  created");
        }
        if(res.status === 422){
            window.alert("email allready exist")
            console.log("email exist already");
        }
        else{
            window.alert('user created')
            console.log("user created");
        }

    }


    const [file, setFile] = useState("");

    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="create-user-wrapper">
                <h2>Add new Manager</h2>
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
                            <label htmlFor="select-image">upload image</label>

                        </div>
                    </div>
                    <div className="create-form-wrapper" data-aos='fade-up'>
                        <div className="field">
                            <div className="input">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" placeholder='Robert' name='name' value={user.name} onChange={handleInput} /></div>
                                <div className="input select-input" >

                                <label htmlFor="company">Company</label>
                                <select name="company" id="company">
                                    <option value="company">company </option>
                                    <option value="company">company </option>
                                    <option value="company">company </option>
                                </select>
                              
                              </div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="email">Email</label><input type="text" placeholder='robert@gmail.com' name='email' value={user.email} onChange={handleInput} /></div><div className="input"> <label htmlFor="password">password</label><input type="text" placeholder='r@b#e$' name='password' value={user.password} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="phone">phone</label><input type="text" placeholder='+91' name='phone' value={user.phone} onChange={handleInput} /></div><div className="input"><label htmlFor="country">Country</label><input type="text" placeholder='Country' name='country' value={user.country} onChange={handleInput} /></div>
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

export default NewManager;
