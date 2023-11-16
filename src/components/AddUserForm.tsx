import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Swal from 'sweetalert2'

export const AddUserForm = ({ usersData, setUsersData }: any) => {
    const initalValues = {
        branchId: '',
        userName: '',
        firstName: '',
        middleName: '',
        lastName: '',
        position: '',
        password: ''
    }
    const [userData, setUserData] = useState(initalValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const existingUser = usersData?.find((user: any) => user.userName === userData.userName || user.branchId === userData.branchId);

        if (existingUser) {
            Swal.fire({
                title: "Error",
                text: "Username or BranchID already exists",
                icon: "error"
            });
        } else {
            setUsersData((prev: any) => {
                return [
                    ...prev,
                    userData
                ]
            })

            Swal.fire({
                title: "Success",
                text: "User Added Succesfully!",
                icon: "success"
            });
        }

    }
    return (
        <div className='p-lg-5 p-3 bg-light rounded-3 border border-dark'>
            <Form onSubmit={(e) => { handleAddUser(e) }}>
                <FloatingLabel
                    label="Branch ID"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="branchId" type="number" placeholder="Enter Branch ID"
                        value={userData.branchId}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    label="Username"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="userName" type="text" placeholder="Enter User Name"
                        value={userData.userName}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    label="First Name"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="firstName" type="text" placeholder="Enter First Name"
                        value={userData.firstName}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    label="Middle Name"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="middleName" type="text" placeholder="Enter Middle Name"
                        value={userData.middleName}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    label="Last Name"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="lastName" type="text" placeholder="Enter Last Name"
                        value={userData.lastName}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    label="Position"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="position" type="text" placeholder="Enter Position"
                        value={userData.position}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    label="Password"
                    className="mb-3"
                >
                    <input className='form-control border-dark' name="password" type="password" placeholder="Enter Password"
                        value={userData.password}
                        onChange={(e) => { handleInputChange(e) }}
                        required
                    />
                </FloatingLabel>

                <div className='d-flex gap-1 justify-content-center pt-3'>

                    <Button className='rounded-4' size='lg' variant='secondary' onClick={() => {
                        setUserData(initalValues);
                    }}>Reset</Button>
                    <Button className='rounded-4' size='lg' type="submit">Add User</Button>
                </div>



            </Form>

        </div>

    )
}
