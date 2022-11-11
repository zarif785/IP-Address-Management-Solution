<?php

namespace App\Http\Controllers;

use App\Models\IP_Address;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class IP_AddressController extends Controller
{
    public function index(){
        $data = IP_Address::latest()->get();
        return $data;

    }

    public function store(Request $request){

        $formFields = $request->validate([
            'ip_address'=>['required','ipv4',Rule::unique('i_p__addresses', 'ip_address')],
            'label'=>'required'

        ]);

        $data = IP_Address::create($formFields);
        return $data;
    }

    
} 

