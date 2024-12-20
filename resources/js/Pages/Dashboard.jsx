import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, klasifikasiCagarBudaya }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-start flex-wrap">
                        {klasifikasiCagarBudaya.map((row) => (
                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg w-1/2 md:w-[19%] mr-[0.5%] ml-[0.5%] mb-4">
                                <div className="p-6 text-gray-900 dark:text-gray-100">
                                    <h3 className="font-bold text-primary">
                                        {row.nama}
                                    </h3>
                                    <span className="text-xs text-accent">
                                        Jumlah Cagar Budaya: 16
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
