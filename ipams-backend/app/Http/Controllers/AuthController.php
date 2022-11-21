<?php

namespace App\Http\Controllers;

use App\Models\Audits;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function register(Request $request){
        // auth()->user()->tokens()->delete();
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

            if(auth('sanctum')->check()){
                auth()->user()->tokens()->delete();
            }
            $token = $user->createToken('bearer')->plainTextToken;

            Audits::create([
                'user_id'=>$user['id'],
                'logged_at'=>$user['updated_at'],
                'isRegistered'=>true

            ]);

            $mytime = Carbon::now();

            return [
                'status'=>200,
                'username'=>$user->name,
                'id'=>$user->id,
                'token'=>$token,
                'message'=>'Account created successfully'
            ];
    }

    public function logout(){
        auth()->user()->tokens()->delete();

        return [
            'status'=>200,
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

            if(auth('sanctum')->check()){
                auth()->user()->tokens()->delete();
            }

            $token = $user->createToken('bearer')->plainTextToken;
            $user->touch();

            Audits::create([
                'user_id'=>$user['id'],
                'logged_at'=>$user['updated_at'],
                'isLogin'=>true

            ]);
            
            return [
                'status'=>200,
                'id'=>$user->id,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Logged in Successfully'
            ];

    }
}
