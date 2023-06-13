import React from 'react'
import { FASILITAS_HOTEL } from '../constant'

const AdminFasilitasHotel = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4">
            <div className="flex flex-col h-screen gap-5">
                <div className="mx-auto w-full h-[11%] shadow-md rounded p-8 mt-[110px] mb-10">
                    <h1 className="md:text-7xl sm:text-5xl text-6xl font-bold py-6 text-white">
                        Edit Fasilitas Hotel
                    </h1>
                </div>
                <div className="bg-white mx-auto w-full h-auto rounded-xl">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 mt-3">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Fasilitas
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Keterangan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {FASILITAS_HOTEL.map((name, index) => {
                                    return (
                                      <tr class="bg-white border-b" key={index}>
                                        <td
                                          scope="row"
                                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                          {name.Fasilitas}
                                        </td>
                                        <td class="px-6 py-4">
                                          {name.Keterangan}
                                        </td>
                                        <td class="px-6 py-4">{name.image}</td>
                                        <td class="px-6 py-4">{name.Aksi}</td>
                                      </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminFasilitasHotel