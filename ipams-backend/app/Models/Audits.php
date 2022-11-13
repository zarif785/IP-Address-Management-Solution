<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audits extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','isLogin','logged_at','isRegistered','is_address_added','is_label_changed'];
}
