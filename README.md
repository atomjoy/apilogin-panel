# Apilogin Panel (Vue3, Laravel)

Vue3 minimal client panel with Laravel backend rest api (client profil, address, avatar upload, change password, change theme, change locale, dark mode, user profil menu, delete account).

## Install

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
```

## Translations

If translations has not been loaded automaticaly

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
```
