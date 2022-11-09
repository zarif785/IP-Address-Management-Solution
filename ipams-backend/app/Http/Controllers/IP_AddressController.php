<?php

namespace App\Http\Controllers;

use App\Models\IP_Address;
use Illuminate\Http\Request;

class IP_AddressController extends Controller
{
    public function index(){
        $data = IP_Address::latest()->get();
        return [
            "message"=>"OK",
            "body"=>$data,
            "status"=>true
        ];

    }
}
