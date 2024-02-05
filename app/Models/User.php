<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Atomjoy\Apilogin\Contracts\HasProfilAddress;
use Atomjoy\Apilogin\Contracts\HasRolesPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
	use HasApiTokens, HasFactory, Notifiable, HasProfilAddress;
	use HasRolesPermissions;
	use HasRoles;

	/**
	 * Model table.
	 */
	protected $table = 'users';

	/**
	 * Auth guard.
	 */
	protected $guard = 'web';

	/**
	 * Append user relations (optional).
	 */
	// protected $with = ['profile', 'address'];
	protected $with = ['profile', 'roles', 'roles_permissions'];

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'name',
		'email',
		'password',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
		'password' => 'hashed',
	];
}
