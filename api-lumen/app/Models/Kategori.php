<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    // kolom mana yang boleh diedit/diisi
    protected $fillable = ['kategori', 'keterangan'];
    // $table->string('a')->nullable();
}
