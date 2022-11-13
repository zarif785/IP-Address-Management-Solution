<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        $formFields['user_id'] = auth()->id();
        $data = IP_Address::create($formFields);
        return $data;
    }

    public function update(Request $request, IP_Address $ip_address){

        $user =User::where('id',auth()->id())->first();
        if($ip_address['user_id']==$user['id']){
            $formFields = $request->validate([
                'label'=>'required'
            ]);
    
            return $ip_address->update($formFields);
        }
        $message='Not the owner of this post';
        return $message;

    }

    public function myAddress(){
        $id = auth()->id();
        $address = IP_Address::where('user_id',$id)->get();
        return 
            $address;
    }

    
} 

