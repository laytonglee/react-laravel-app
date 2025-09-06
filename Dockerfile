# Use official PHP image with required extensions
FROM php:8.2-cli

# Set working directory
WORKDIR /var/www

# Install system dependencies for Laravel + Node.js build
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    gnupg \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .

# Install Laravel PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install frontend dependencies and build assets
RUN npm install
RUN npm run build

# Expose port for Laravel server
EXPOSE 8000

# Run migrations and start Laravel
CMD php artisan migrate && php artisan serve --host=0.0.0.0 --port=8000
