# Apilogin Panel (Vue3, Laravel)

Vue3 minimal client panel with Laravel backend rest api (client profil, address, avatar upload, change password, change theme, change locale, dark mode, user profil menu, delete account).

## Install

Set the database and smtp server credentials in the .env configuration file.

```sh
# db tables
php artisan migrate:fresh

# images public link
php artisan storage:link

# install packages
npm install

# install packages
composer update

# build
npm run build

# run server
php artisan serve --host=localhost --port=8000

# Go to the registration page from your browser, create an account, then confirm your email address and log in.
<http://localhost:8000/register>
```

## Translations

If the translations were not loaded automatically

```sh
# create app/lang translations
php artisan lang:publish

# copy dir
Then copy apilogin/lang dir to laravel app/lang dir
```

## Tests

```sh
# tests
php artisan test --stop-on-failure --testsuite=Apilogin

# seeder
php artisan db:seed --class=ApiloginSeeder
```

## Screens

<img src="<https://raw.githubusercontent.com/atomjoy/apilogin-panel/main/screenshots/apilogin-panel-white.png>" width="100%">
<img src="<https://raw.githubusercontent.com/atomjoy/apilogin-panel/main/screenshots/apilogin-panel-dark.png>" width="100%">
