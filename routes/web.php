<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use Atomjoy\Apilogin\Notifications\Contracts\NotifyMessage;
use Atomjoy\Apilogin\Notifications\DbNotify;

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

	// Add example notification for user
	// $msg = new NotifyMessage();
	// $msg->setContent('Hello max your links from us.');
	// $msg->setLink('order', 'https://example.com/signup', 'Last Order');
	// $msg->setLink('promo', 'https://example.com/signin', 'Promotions');

	// $msg1 = new NotifyMessage();
	// $msg1->setContent('Witaj! Twoja aplikacja została zaakceptowana. Zapraszamy na stronę sklepu.');

	// $user = User::first();
	// $user->notify(new DbNotify($msg));
	// $user->notifyNow(new DbNotify($msg1));

	return view('vue');
});

// Vue

if (!app()->runningUnitTests()) {
	// Vue catch all
	Route::fallback(function () {
		return view('vue');
	})->name('login');
}
