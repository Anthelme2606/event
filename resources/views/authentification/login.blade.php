@extends('layouts.setup')
@section('title','Connexion')
@section('navbar')
<x-navbar/>
@endsection



@section('contents')
<style>
   

    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        width: 360px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        overflow: hidden;
    }

    .login-header {
        width: 100%;
        height: 150px;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .login-header img {
        width: 50px;
        height: 50px;
    }

    .login-body {
        padding: 20px;
        display: flex;
        border-top-left-radius:50%;
        justify-content:center;
        flex-direction: column;
        align-items: center;
    }

    .login-body h4 {
        margin-bottom: 20px;
        color: black;
        font-size: 24px;
    }

    .login-body input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    .login-body button {
        width: 100%;
        padding: 10px;
        background: black;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    .login-footer {
        text-align: center;
        padding: 10px;
        color: #666;
    }

    .login-footer a {
        color: black;
        text-decoration: none;
    }
</style>

<div class="login-container">
    <div class="login-header">
        <img src="{{asset('assets/images/event.png')}}" alt="Logo">
    </div>
    <div class="login-body">
        <h4>Login</h4>
        <form action="" method="post">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button type="submit" name="login">Login</button>
        </form>
    </div>
    <div class="login-footer">
        Don't have any account? <a href="#">Sign Up</a>
    </div>
</div>
@endsection

