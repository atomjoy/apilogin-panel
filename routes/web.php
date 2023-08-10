<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Laravel

// require 'demo/notifications.php';

Route::get('/', function () {
	return view('vue');
});

// Vue

if (!app()->runningUnitTests()) {
	// Vue catch all
	Route::fallback(function () {
		return view('vue');
	})->name('login');
}
