import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { VscSave } from "react-icons/vsc";
import { HiChevronLeft } from "react-icons/hi2";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        deskripsi: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/klasifikasi-cagar-budaya");
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Buat Klasifikasi Cagar Budaya Baru
                </h2>
            }
        >
            <Head title="Klasifikasi Cagar Budaya" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href="/klasifikasi-cagar-budaya"
                            className="btn btn-primary"
                        >
                            <HiChevronLeft className="size-4" />

                            <span>Kembali</span>
                        </Link>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-6"
                    >
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-6">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Nama</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Nama Klasifikasi Cagar Budaya"
                                        className="input input-bordered w-full max-w-xs"
                                        name="nama"
                                        id="nama"
                                        value={data.nama}
                                        onChange={(e) =>
                                            setData("nama", e.target.value)
                                        }
                                    />
                                    {errors.nama && (
                                        <div className="label">
                                            <span className="label-text-alt text-red-600">
                                                {errors.nama}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <div className="mb-6">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                            Your bio
                                        </span>
                                    </div>
                                    <textarea
                                        className="textarea textarea-bordered"
                                        placeholder="Deskripsi Klasifikasi Cagar Budaya"
                                        rows={5}
                                        name="deskripsi"
                                        id="deskripsi"
                                        value={data.deskripsi}
                                        onChange={(e) =>
                                            setData("deskripsi", e.target.value)
                                        }
                                    ></textarea>
                                    {errors.deskripsi && (
                                        <div className="label">
                                            <span className="label-text-alt text-red-600">
                                                {errors.deskripsi}
                                            </span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <div className="mb-6 flex justify-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    <VscSave className="size-4" />
                                    <span>Simpan</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
