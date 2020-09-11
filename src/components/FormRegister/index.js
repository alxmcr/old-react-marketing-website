import React, { useState, useEffect } from 'react'

import './FormRegister.css'

export default function FormRegister() {
    // useState
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

    // Input Handlers
    const handleChangeFirstName = (e) => setFirstname(e.target.value)
    const handleChangeLastName = (e) => setLastname(e.target.value)
    const handleChangeUsername = (e) => setUsername(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    // Button Handlers
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Information sent successfully.")
    }
    const handleReset = (e) => {
        setFirstname("")
        setLastname("")
        setUsername("")
        setPassword("")
    };

    // useEffect
    useEffect(() => {
        const allFieldsCompleted = firstname.length > 0 &&
            lastname.length > 0 &&
            username.length > 0 &&
            password.length > 0;

        if (allFieldsCompleted) {
            setIsDisabledSubmit(false)
        } else {
            setIsDisabledSubmit(true)
        }

    }, [firstname, lastname, username, password])

    return <form className="register">
        <div>
            <label className="register__label"
                htmlFor="firstname">First Name:</label>
            <input className="register__input" type="text"
                id="firstname" name="firstname" value={firstname}
                onChange={handleChangeFirstName} />
        </div>
        <div>
            <label className="register__label"
                htmlFor="lastname">Last Name:</label>
            <input className="register__input" type="text"
                id="lastname" name="lastname" value={lastname}
                onChange={handleChangeLastName} />
        </div>
        <div>
            <label className="register__label"
                htmlFor="username">Username:</label>
            <input className="register__input" type="text"
                id="username" name="username" value={username}
                onChange={handleChangeUsername} />
        </div>
        <div>
            <label className="register__label"
                htmlFor="password">Password:</label>
            <input className="register__input" type="password"
                id="password" name="password" value={password}
                onChange={handleChangePassword} />
        </div>
        <div className="register__actions">
            <button className="register__button" type="submit" disabled={isDisabledSubmit} onClick={handleSubmit}>Register</button>
            <button className="register__button" type="reset" onClick={handleReset}>Reset</button>
        </div>
    </form>
}