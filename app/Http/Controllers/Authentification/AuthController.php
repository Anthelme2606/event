<?php

namespace App\Http\Controllers\Authentification;

use Illuminate\Http\Request;

class AuthController
{
    public function login(){
        return view('authentification.login');
    }
    public function signup(){
        return view('authentification.signup');
    }
}
