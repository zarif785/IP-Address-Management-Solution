<?php

namespace App\Http\Controllers;

use App\Models\Audits;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    public function show(){
        $id = auth()->id();
        $data = Audits::where('user_id',$id)->latest()->get();
        // $data->touch();
        return $data;
    }
}
