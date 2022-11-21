<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IP_Address extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','ip_address','label'];
    // protected $fillable = ['ip_address','label'];
    
}


