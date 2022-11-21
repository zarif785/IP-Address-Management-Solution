<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Audits;
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

        Audits::create([
            'user_id'=>$data['user_id'],
            'logged_at'=>$data['updated_at'],
            'is_address_added'=>true

        ]);
        return [
            'status'=>200,
            'message'=>"IP Added Successfully"
        ];
    }

    public function update(Request $request, IP_Address $ip_address){

        
        if($ip_address['user_id']==auth()->id()){
            $formFields = $request->validate([
                'label'=>'required'
            ]);
            Audits::create([
                'user_id'=>$ip_address['user_id'],
                'logged_at'=>$ip_address['updated_at'],
                'is_label_changed'=>true

            ]);
    
            return $ip_address->update($formFields);
        }
        
        return abort(403,"Not Authorized");

    }

    public function myAddress(){
        $id = auth()->id();
        $address = IP_Address::where('user_id',$id)->get();
        return 
            $address;
    }

    
} 

