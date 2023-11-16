import React from 'react';
import { Button, Table } from 'react-bootstrap';

export const DataTable = ({ usersData, setUsersData }: any) => {

    const handleDelete = (dataToBeRemoved: any) => {
        setUsersData((data: any) => data.filter((d: any) => d !== dataToBeRemoved));
    }
    return (
        <Table responsive bordered hover striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Branch ID</th>
                    <th>Name</th>
                    <th>Postion</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    (usersData?.length === 0) ? <tr><td colSpan={5} className='text-center'>No Users Found.</td></tr> :

                        usersData?.map((data: any, index: number) => (
                            <tr key={index} className='text-capitalize'>
                                <td>{index}</td>
                                <td>{data.branchId}</td>
                                <td>{data.firstName} {data.lastName}</td>
                                <td>{data.position}</td>
                                <td><Button variant='secondary' className='rounded-4' onClick={() => { handleDelete(data) }}>Remove</Button></td>
                            </tr>

                        ))
                }
            </tbody>
        </Table>
    )
}
