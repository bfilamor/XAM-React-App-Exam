import React, { useState } from 'react'
import { useLogin } from '../context/LoginContext';
import { users } from '../data/users_data';
import { Button, Container, Form, Row, Alert } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Swal from 'sweetalert2'

export const LoginForm = () => {
    const { loginData, setLoginData, setIsLoggedIn, isLoggedIn } = useLogin();

    const [errorMessage, setErroMessage] = useState('');
    const [error, setError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [branchIdError, setBranchIdError] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const existingUser = users.find((user) => user.userName === loginData.userName);
        if (existingUser) {
            setError(false);
            setErroMessage('');
            setUserNameError(false);

            if ((existingUser.branchId !== parseInt(loginData.branchId)) || (existingUser.password !== loginData.password)) {
                setError(true);
                setErroMessage("Error: Wrong Password or Wrong Branch Id");
                setPasswordError(true);
                setBranchIdError(true);
            } else {
                localStorage.setItem('token', loginData.userName);
                Swal.fire({
                    title: "Success",
                    text: "Login Successful",
                    icon: "success"
                });

                setIsLoggedIn(true);
                setError(false);
                setErroMessage('');
                setPasswordError(false);
                setBranchIdError(false);
            }
        } else {
            setError(true);
            setUserNameError(true)
            setErroMessage("Error: User Name Not Found")
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <Container>
            <Row className='justify-content-center'>
                <div className='col-lg-5'>
                    <Form className='py-lg-5 p-3 rounded-3 border border-dark bg-light' data-testid="form" onSubmit={(e) => { handleLogin(e) }}>
                        <FloatingLabel
                            label="Branch id"
                            className="mb-3"
                            controlId="branchId"
                        >
                            <input className={branchIdError ? "border-danger form-control" : "border-dark form-control"} name="branchId" type="number" placeholder="Enter Branch ID"
                                value={loginData.branchId}
                                onChange={(e) => { handleInputChange(e) }}
                                required
                                data-testid="branchId"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            label="User name"
                            className="mb-3"
                            controlId="userName"
                        >
                            <input className={userNameError ? "border-danger form-control" : "border-dark form-control"} name="userName" type="text" placeholder="Enter User Name"
                                value={loginData.userName}
                                onChange={(e) => { handleInputChange(e) }}
                                required
                                data-testid="username"


                            />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Password"
                            className="mb-3"
                            controlId="password"
                        >
                            <input className={passwordError ? "border-danger form-control" : "border-dark form-control"} name="password" type="password" placeholder="Enter Password"
                                value={loginData.password}
                                onChange={(e) => { handleInputChange(e) }}
                                required
                                data-testid="password"
                            />
                        </FloatingLabel>

                        <div className='text-center'>
                            <Button size='lg' type='submit' data-testid="submit">Login</Button>
                        </div>
                        {(error) ?
                            <Alert className='my-3' variant={"danger"}>
                                {errorMessage}
                            </Alert> : null}

                        {isLoggedIn ? <p data-testid="alert">Log in Succcesfull</p> : null}

                    </Form>

                </div>

            </Row>
        </Container>

    )
}
