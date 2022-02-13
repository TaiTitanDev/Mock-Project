<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('shop-items/all', 'App\Http\Controllers\Api\ShopItemController@index');
Route::get('shop-items/firsts', 'App\Http\Controllers\Api\ShopItemController@get');
Route::post('shop-items/create', 'App\Http\Controllers\Api\ShopItemController@store');