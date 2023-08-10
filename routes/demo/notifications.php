<?php

use App\Models\User;
use Atomjoy\Apilogin\Notifications\Contracts\NotifyMessage;
use Atomjoy\Apilogin\Notifications\DbNotify;
use Illuminate\Support\Facades\Route;

Route::get('/demo/notifications', function () {
	$msg = new NotifyMessage();
	$msg->setContent('Hello max your link_signup and link_signin link (Register link_signup).');
	$msg->setLink('link_signup', 'https://example.com/signup', 'Sign Up');
	$msg->setLink('link_signin', 'https://example.com/signin', 'Sign In');

	$user = User::first();
	$user->notify(new DbNotify($msg));
	$user->notifyNow(new DbNotify($msg));

	return User::first()->notifications()->offset(0)->limit(15)->get()->each(function ($n) {
		$n->formatted_created_at = $n->created_at->format('Y-m-d H:i:s');
	});

	// Get notifications paginate
	// $page = 0;
	// $perpage = 4;
	// return User::with(['notifications' => function ($q) use ($page, $perpage) {
	// 	$q->latest()
	// 		->skip(($page - 1) * $perpage)
	// 		->take($perpage);
	// 	// $q->where('id', '!=', '2');
	// 	// $query->select('id','notifiable_id','data','created_at')->orderBy('created_at', 'desc');
	// 	// $q->latest()->paginate($perpage);
	// }])->where('id', $user->id)
	// 	->orderBy('created_at', 'desc')
	// 	->get();
});
