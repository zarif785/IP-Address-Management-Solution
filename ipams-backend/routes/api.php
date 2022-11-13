<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IP_AddressController;
use App\Models\IP_Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Public Routes
Route::get('/addresses',[IP_AddressController::class,'index']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


//Private Routes
Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::post('/addresses',[IP_AddressController::class,'store']);
    Route::put('/addresses/{ip_address}',[IP_AddressController::class,'update']);
    Route::post('/logout',[AuthController::class,'logout']);
});
