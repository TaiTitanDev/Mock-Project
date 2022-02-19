<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CustomAuthentication extends Controller
{
    public function registration(Request $request)
    {  
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
           
        $data = $request->all();
        $user = $this->create($data);
        $user->save();
        return response(['success' => 'true'], Response::HTTP_OK);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) 
        {
            return response(['success' => 'true'], Response::HTTP_OK);
        }
  
        return response(['success' => 'false'], Response::HTTP_FORBIDDEN);
    }

    public function logout() 
    {
        Session::flush();
        Auth::logout();
        return response(['success' => 'true'], Response::HTTP_OK);
    }

    public function create(array $data)
    {
      return User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password'])
      ]);
    }
}
