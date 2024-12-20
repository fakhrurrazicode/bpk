<?php

namespace App\Http\Controllers;

use App\Models\KlasifikasiCagarBudaya;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KlasifikasiCagarBudayaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search ? $request->search : '';

        $klasifikasiCagarBudaya = KlasifikasiCagarBudaya::whereAny([
            'nama',
            'deskripsi'
        ], 'LIKE', "%$search%")->paginate(10)->withQueryString();
        return Inertia::render('KlasifikasiCagarBudaya/Index', [
            'klasifikasiCagarBudaya' => $klasifikasiCagarBudaya,
            'request' => $request,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('KlasifikasiCagarBudaya/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        KlasifikasiCagarBudaya::create($request->validate([
            'nama' => ['required'],
            'deskripsi' => ['required'],
        ]));

        return to_route('klasifikasi-cagar-budaya.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KlasifikasiCagarBudaya $klasifikasiCagarBudaya)
    {
        // return $kelasifikasiCagarBudaya;
        return Inertia::render('KlasifikasiCagarBudaya/Edit', [
            'klasifikasiCagarBudaya' => $klasifikasiCagarBudaya
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KlasifikasiCagarBudaya $klasifikasiCagarBudaya)
    {

        $klasifikasiCagarBudaya->update($request->validate([
            'nama' => ['required'],
            'deskripsi' => ['required'],
        ]));

        return to_route('klasifikasi-cagar-budaya.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KlasifikasiCagarBudaya $klasifikasiCagarBudaya)
    {
        $klasifikasiCagarBudaya->delete();
        return redirect()->back();
    }
}
