# Apilogin Panel (Vue3, Laravel)

Vue3 minimal client panel with Laravel backend rest api (client profil, address, avatar upload, change password, change theme, change locale, dark mode, user profil menu, delete account).

## Install

- Set the database and smtp server credentials in the .env configuration file.
- Set settings from [atomjoy/apilogin](https://github.com/atomjoy/apilogin) README.md if somthing went wrong.

```sh
# notifications, storage
php artisan notifications:table
php artisan storage:link

# db tables
php artisan migrate:fresh
php artisan migrate:fresh --env=testing

# images public link
php artisan storage:link

# install packages
npm install

# install packages
composer update
composer dump-autoload -o

# build vue
npm run build

# run server
php artisan serve --host=localhost --port=8000

# Go to the registration page from your browser, create an account, then confirm your email address and log in.
http://localhost:8000/register
```

## Translations

If the translations were not loaded automatically.

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

## Database

Database and user configuration.

### Create mysql database

```sql
CREATE DATABASE IF NOT EXISTS laravel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS laravel_testing CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Create mysql user password

```sql
GRANT ALL PRIVILEGES ON *.* TO root@localhost IDENTIFIED BY 'toor' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO root@127.0.0.1 IDENTIFIED BY 'toor' WITH GRANT OPTION;
```

### Settings

```sh
# .env
APP_ENV=local
APP_DEBUG=false

# Mysql settings
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=toor

# Smtp (etc. gmail, mailgun or localhost)
MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=25
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS="hello@local.host"
MAIL_FROM_NAME="${APP_NAME}"

# Gmail smtp
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=atomjoy.official@gmail.com
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="atomjoy.official@gmail.com"
MAIL_FROM_NAME="${APP_NAME}"
```

## Screens

<img src="https://raw.githubusercontent.com/atomjoy/apilogin-panel/main/screenshots/apilogin-panel-white.png" width="100%">
<img src="https://raw.githubusercontent.com/atomjoy/apilogin-panel/main/screenshots/apilogin-panel-dark.png" width="100%">
