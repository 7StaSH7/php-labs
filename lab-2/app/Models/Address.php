<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'address',
        'city',
        'street',
        'house',
        'floor',
        'flat',
        'code',
        'created_at',
    ];


    public function brand()
    {
        return $this->belongsTo(User::class);
    }
}
