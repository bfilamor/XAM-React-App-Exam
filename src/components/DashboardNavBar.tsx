import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLogin } from '../context/LoginContext';

export const DashboardNavBar = () => {
    const { setIsLoggedIn } = useLogin()

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("usersData");
    }
    return (
        <section className='bg-light py-3 sticky-top border-bottom'>
            <Container>
                <div className='row justify-content-between'>
                    <div className='col-auto'>
                        <h1 className='fw-bold'>{localStorage.getItem('token')}</h1>
                    </div>
                    <div className='col-auto'>
                        <Button variant='danger' className='rounded-4' onClick={() => { handleLogout() }}>Logout</Button>
                    </div>
                </div>

            </Container>
        </section>
    )
}
