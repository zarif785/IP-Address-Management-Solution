<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;


class AuthController extends Controller
{
    public function register(Request $request){
        auth()->user()->tokens()->delete();
        $formFields = $request->validate(
            [
                'name'=> 'required|string',
                'email'=> ['required','email',Rule::unique('users','email')],
                'password'=>'required|string|confirmed|min:6'

            ]
            );

            $user = User::create([
                'name'=> $formFields['name'],
                'email'=>$formFields['email'],
                'password'=>bcrypt($formFields['password'])
            ]);

            $token = $user->createToken('bearer')->plainTextToken;


            return [
                'user'=>$user,
                'token'=>$token
            ];
    }

    public function logout(){
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }


    public function login(Request $request){
        // auth()->user()->tokens()->delete();
        $formFields = $request->validate(
            [
                'email'=> ['required','email'],
                'password'=>'required|string|min:6'
            ]
            ); 
            
            $user = User::where('email',$formFields['email'])->first();

            if(!$user||!Hash::check($formFields['password'],$user->password)){
                return[
                    'message'=>'Invalid Credentials'
                ];
            }

            $token = $user->createToken('bearer')->plainTextToken;


            return [
                'user'=>$user,
                'token'=>$token,
                "sth"=>auth()->user()->tokens()
            ];

    }
}
