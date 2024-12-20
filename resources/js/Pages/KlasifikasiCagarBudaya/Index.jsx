import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import classNames from "classnames";
import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Index({ auth, request, klasifikasiCagarBudaya }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Klasifikasi Cagar Budaya
                </h2>
            }
        >
            <Head title="Klasifikasi Cagar Budaya" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href="/klasifikasi-cagar-budaya/create"
                            className="btn btn-primary"
                            preserveScroll={true}
                            preserveState={true}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>

                            <span>Tambah Baru</span>
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nama</th>
                                            <th>Deskripsi</th>
                                            <th>Di buat pada</th>
                                            <th>Terakhir di ubah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {klasifikasiCagarBudaya.data.map(
                                            (row) => (
                                                <tr
                                                    key={row.id}
                                                    className="hover"
                                                >
                                                    <th>
                                                        <div className="flex justify-between gap-2">
                                                            <Link
                                                                href={`klasifikasi-cagar-budaya/${row.id}/edit`}
                                                                className="btn btn-sm btn-primary"
                                                            >
                                                                <HiOutlinePencilSquare className="size-4" />
                                                            </Link>
                                                            <button
                                                                className="btn btn-sm btn-error"
                                                                onClick={() => {
                                                                    const confirmed =
                                                                        confirm(
                                                                            `Apakah anda yakin ingin menghapus data ${row.nama}?`
                                                                        );

                                                                    if (
                                                                        confirmed
                                                                    ) {
                                                                        router.visit(
                                                                            `/klasifikasi-cagar-budaya/${row.id}`,
                                                                            {
                                                                                method: "DELETE",
                                                                            }
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <RiDeleteBin5Line className="size-4" />

                                                                {/* <span>
                                                                    Delete
                                                                </span> */}
                                                            </button>
                                                        </div>
                                                    </th>
                                                    <td>{row.nama}</td>
                                                    <td>{row.deskripsi}</td>
                                                    <td>{row.created_at}</td>
                                                    <td>{row.updated_at}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="join">
                            {klasifikasiCagarBudaya.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    preserveScroll
                                    className={classNames("join-item btn", {
                                        "btn-active": link.active,
                                    })}
                                >
                                    {link.label
                                        .replace("&laquo;", "<<")
                                        .replace("&raquo;", ">>")}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
