<?php

namespace App\Http\Controllers\Authentification;

use Illuminate\Http\Request;
use App\Http\Services\Authentification\AuthService;

class AuthController
{
    protected $auth_s;
    public function __construct(AuthService $auth_s){
        $this->auth_s=$auth_s;
    }
    public function login(){
        return view('authentification.login');
    }
    public function signup(){
        return view('authentification.signup');
    }
    public function log_in(Request $request){
        $request->validate([
            'email' =>'email|string|required',
            'password' =>'string|required'
        ]);
        return $this->auth_s->log_in($request->all());
    }
}
