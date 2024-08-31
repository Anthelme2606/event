<?php

namespace App\Http\Services\Authentification;

use Illuminate\Http\Request;

class AuthService
{
   
    public function log_in(array $data){
       $email=$data['email'];
       $password=$data['password'];
       if($email==="admin@example.com" && $password ==="Admin1010"){
        return redirect()->route('dashboard')->with('success','Vous étes connectés avec success');

       }
       else{
        return redirect()->back()->with('error','erreur d\'identification');
       }
    }
}
