import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import { RESEPSIONIS_CHECK } from '../constant'

const CheckInCheckOut = () => {

    const [value, setValue] = useState({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="w-full max-w-[1240px] mx-auto px-4">
            <div className="flex flex-col h-screen gap-5">
                <form className="bg-white mx-auto w-full h-[11%] shadow-md rounded p-8 mt-[200px]">
                    <div className="w-full flex justify-between items-center">
                        <Datepicker
                            inputClassName={"w-full bg-purple-100 p-2.5 rounded-lg"}
                            useRange={false}
                            asSingle={true}
                            placeholder={"Masukkan Tanggal"}
                            primaryColor={"purple"}
                            value={value}
                            onChange={handleValueChange}
                            showShortcuts={false}
                            readOnly={true}
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-2.5 ml-[100px] mr-[400px]"
                        />
                    </div>
                </form>
                <div className="bg-white mx-auto w-full h-auto">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 mt-3">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Tamu
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tanggal Cek In
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tanggal Cek Out
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {RESEPSIONIS_CHECK.map((name, index) => {
                                    return (
                                        <tr class="bg-white border-b" key={index}>
                                            <td
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                {name.NamaTamu}
                                            </td>
                                            <td class="px-6 py-4">{name.TanggalCheckIn}</td>
                                            <td class="px-6 py-4">{name.TanggalCheckOut}</td>
                                            <td class="px-6 py-4">{name.Aksi}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckInCheckOut