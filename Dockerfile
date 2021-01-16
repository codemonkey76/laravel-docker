FROM php:7.4-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql pcntl
RUN apk add --update --no-cache autoconf g++ make
RUN pecl install redis
RUN docker-php-ext-enable redis
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Get latest node
RUN apk add --update npm