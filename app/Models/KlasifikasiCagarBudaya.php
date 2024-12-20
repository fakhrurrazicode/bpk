<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KlasifikasiCagarBudaya extends Model
{
    use HasFactory;
    protected $table = 'klasifikasi_cagar_budaya';
    protected $fillable = ['nama', 'deskripsi'];
}
