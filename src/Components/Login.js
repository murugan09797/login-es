import React, { useState } from 'react'
import { TextField, Box } from '@mui/material/';
import validate from './Validation';
import { toast } from "react-toastify";

const Login = () => {

    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        userName: "",
        password: "",
        userNameValid:false ,
        passwordValid:false ,
        userNameError: "",
        passwordError: ""
    })

    const handleChange = ({ target }) => {
        let { name, value } = target;
        setState((pre) => ({ ...pre, [name]: value }));
        const data = validate(name, value);
        setState((previousData) => ({
            ...previousData,
            [name + "Valid"]: data.valid,
            [name + "Error"]: data.error,
        }));
    };

    const handleCilck = async (e) => {
        let validData = state.userNameValid && state.passwordValid
        if (validData) {
            let data = {
                userName: state.userName,
                password: state.password
            }
            try {
                let res = await fetch("http://192.168.2.96:8080/add/admin", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                toast.success("successfully submitted")
                console.log(res)
            } catch (err) {
                toast.error("something went wrong")
            }
        } else {
            toast.warn("Please give valid data required feilds")
        }
    }
 
    return (
        <>
            <div className='maincard' >
                <div className='maincard2'>
                    <div className='containar1'> <img src="images/vehicle.jpg" alt="ggggg" style={{
                        height: "100%",
                        width: "100%"
                    }} /> </div>
                    <div className='containar2'>
                        <div >
                            <h3 className='header'>Sign in to your Account </h3>
                            <div className="userfields">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '40ch',color:"white" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="standard-basic"
                                        name='userName'
                                        label="username"
                                        variant="standard"
                                        autoComplete="off"
                                        required
                                        error={state.userNameError !== ""}
                                        value={state.userName}
                                        helperText={state.userNameError}
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic"
                                        name="password"
                                        label="password"
                                        type={show ? "type" : "password"}
                                        variant="standard"
                                        autoComplete="off"
                                        required
                                        error={state.passwordError !== ""}
                                        value={state.password}
                                        helperText={state.passwordError}
                                        onChange={handleChange}
                                    />
                                    <i className={show ? "bi bi-eye" : "bi bi-eye-slash-fill"} onClick={() => { setShow(!show) }} style={{ fontSize: "1.5rem",    position: "absolute",
    paddingTop: "20px" }}></i>
                                </Box>

                            </div>
                            <a href='' className='forgotPassword'>
                                <p>forgot your password</p>
                            </a>
                            <div className='signinbutton'>
                                <button className='buttonStyles' onClick={handleCilck}>
                                    Sign in
                                </button>
                            </div>
                            <div className='account'>
                                Don't have account? <a href="" className='signin' >Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login