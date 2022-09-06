import React, { useState, useEffect } from 'react';
import './NewDepartment.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';
import { ImCamera } from 'react-icons/im'

const NewDepartment = () => {

    const [user, setUser] = useState({
        name: "", email: "", address: "", country: "", username: "", password: ""
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

        const { name, email, address, country, username, password} =user;

      const res = await  fetch("/adduser",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, address, country, username, password
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
                <h2>Add new Deparment</h2>
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
                                <input type="text" placeholder='Robert' name='name' value={user.name} onChange={handleInput} /></div><div className="input" >

                                <label htmlFor="username">Username</label><input type="text" placeholder='robert@123' name='username' value={user.username} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="email">Email</label><input type="text" placeholder='robert@gmail.com' name='email' value={user.email} onChange={handleInput} /></div><div className="input"> <label htmlFor="password">password</label><input type="text" placeholder='r@b#e$' name='password' value={user.password} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="address">Address</label><input type="text" placeholder='main street newyork' name='address' value={user.address} onChange={handleInput} /></div><div className="input"><label htmlFor="country">Country</label><input type="text" placeholder='Country' name='country' value={user.country} onChange={handleInput} /></div>
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

export default NewDepartment;
