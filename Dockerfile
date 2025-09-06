# Use official PHP image with required extensions
FROM php:8.2-cli

# Set working directory
WORKDIR /var/www

# Install dependencies for Laravel
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port
EXPOSE 8000

# Run Laravel with artisan serve (no Nginx, just PHP's built-in server)
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
