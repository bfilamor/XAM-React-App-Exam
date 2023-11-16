import React, { useEffect, useMemo, useState } from 'react'
import { DataTable } from '../components/DataTable'
import { AddUserForm } from '../components/AddUserForm'
import { users } from '../data/users_data'
import { DashboardNavBar } from '../components/DashboardNavBar';

export const Dashboard = () => {
    const [usersData, setUsersData] = useState(localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData") || '' ) : users );


    useEffect(() => {
        localStorage.setItem("usersData", JSON.stringify(usersData));
    },[usersData])

    useEffect(() => {
        if (!localStorage.getItem("usersData")) {
            setUsersData(users);
        } 
    }, [])

    return (
        <div>
            <DashboardNavBar />

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 mb-lg-0  mb-5'>
                            <AddUserForm usersData={usersData} setUsersData={setUsersData} />
                        </div>
                        <div className='col-lg-7'>
                            <DataTable usersData={usersData} setUsersData={setUsersData} />
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}
