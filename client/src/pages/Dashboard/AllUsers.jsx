import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { becomeAdmin, becomeHost } from '../../api/auth';
import { toast } from 'react-hot-toast';
// import Swal from 'sweetalert2';

const AllUsers = () => {
    const { role } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery(['users'],
        async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
            return res.json();
        })

    const makeAdmin = email => {
        if (role !== "admin") {
            becomeAdmin(email, refetch);
            toast.success("You Have Changed a role of a user to Admin");
        }
    };

    const makeHost = email => {
        if (role !== "host") {
            becomeHost(email, refetch);
            toast.success("You Have Changed a role of user to host");
        }
    };

    // const handleDelete = user => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'User has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 })
    //         }
    //     })
    // }

    return (
        <div>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            #
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Admin
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Host
                                        </th>
                                        {/* <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => <tr key={user._id}>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{index + 1}</td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{user?.email}</td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{user?.role}</td>
                                            <td className='border-b border-gray-200'>
                                                <button
                                                    onClick={() => makeAdmin(user?.email)}
                                                    disabled={user?.role === "admin"}
                                                    className="px-3 py-1 rounded-lg bg-red-200"
                                                >
                                                    Make Admin
                                                </button>
                                            </td>
                                            <td className='border-b border-gray-200'>
                                                <button
                                                    onClick={() => makeHost(user?.email)}
                                                    disabled={user?.role === "host"}
                                                    className="px-3 py-1 rounded-lg bg-green-200"
                                                >
                                                    Make Host
                                                </button>
                                            </td>
                                            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'><span
                                                className='relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight'
                                            >
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                                                ></span>
                                                <span
                                                    onClick={() => handleDelete(user)} className='relative'>Delete User</span>
                                            </span>
                                            </td> */}
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;