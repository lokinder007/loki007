import React, { useState } from 'react'
import { useHistory } from 'react-router';

// import "./form.css"


const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value });

    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("User", user)
        alert(
            ` ${user.name} you are registered successfully `
          )
          localStorage.setItem("user-info",JSON.stringify(user));
          history.push("/login");
    }

    return (
        <>
            <form className="form " onSubmit={formSubmit}>
                <h1 style={{ fontSize: 30 }}>Register</h1>
                <p style={{ fontSize: 20 }}>Enter Your Details </p>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} required />
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} required />
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} required />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} />
                <button className="button" type="submit">Register</button>
            </form>
        </>

    )
}

export default Register