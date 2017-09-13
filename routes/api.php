<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('posts','PostController@index');
Route::get('posts/{post}','PostController@show');


Route::post('register','Auth\RegisterController@register');
