import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { approveRoom, denyRoom } from "../../api/rooms";
import { toast } from "react-hot-toast";

const AllRooms = () => {
    const { data: manageRooms = [], refetch: statusFetch } = useQuery(
        ["manageRooms"],
        async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
            return res.json();
        }
    );

    const givingApprove = (id, status) => {
        console.log(id);
        if (status !== "approve") {
            approveRoom(id, statusFetch);
            toast.success("You approved this room");
        }
    };

    const givingDenied = (id, status) => {
        console.log(id);
        if (status !== "denied") {
            denyRoom(id, statusFetch);
            toast.error("You deny this room")
        }
    };

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
                                            Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Name
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
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        manageRooms.map((manageRoom, index) => <tr key={manageRoom._id}>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{index + 1}</td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <div className='flex items-center'>
                                                    <Link to={`/room/${manageRoom._id}`}>
                                                        <div className='flex-shrink-0'>
                                                            <div className='block relative'>
                                                                <img
                                                                    alt='profile'
                                                                    src={manageRoom?.image}
                                                                    className='mx-auto object-cover rounded h-10 w-15 '
                                                                />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className='ml-3 md:block hidden'>
                                                        <p className='text-gray-900 whitespace-no-wrap'>{manageRoom?.title}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{manageRoom?.location}</td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{manageRoom?.host?.name}</td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{manageRoom?.host?.email}</td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <div className={`${manageRoom.status === 'approve' ? 'bg-green-200 rounded-lg' : 'bg-red-200 rounded-lg'} text-black`}>
                                                    {manageRoom?.status}
                                                </div>
                                            </td>
                                            <td className="flex gap-5 px-5 py-7 border-b border-gray-200 bg-white text-sm">
                                                <div
                                                    onClick={() => givingApprove(manageRoom?._id, manageRoom.status)}
                                                >
                                                    <span
                                                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight'>
                                                        <span aria-hidden='true'
                                                            className="absolute  inset-0 bg-green-200 opacity-50 rounded-full">
                                                        </span>
                                                        <span className='relative'>Approve</span>
                                                    </span>
                                                </div>
                                                <div
                                                    onClick={() => givingDenied(manageRoom?._id, manageRoom.status)}
                                                >
                                                    <span
                                                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight'>
                                                        <span aria-hidden='true'
                                                            className="absolute  inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                        <span className='relative'>Deny</span>
                                                    </span>
                                                </div>
                                            </td>
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

export default AllRooms;