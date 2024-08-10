<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Authentification\AuthController;

Route::get('/', [HomeController::class,'index'])->name('welcome');
Route::get('/login', [AuthController::class,'login'])->name('login');
Route::get('/signup', [AuthController::class,'signup'])->name('signup');
