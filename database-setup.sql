-- Create Categories Table
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create Products Table
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(200) NOT NULL,
  `slug` VARCHAR(200) NOT NULL UNIQUE,
  `description` TEXT,
  `price` DECIMAL(10, 2) NOT NULL,
  `image` VARCHAR(500),
  `category_id` INT,
  `in_stock` BOOLEAN DEFAULT TRUE,
  `featured` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert Sample Categories
INSERT INTO `categories` (`name`, `slug`, `description`) VALUES
('شوكولاتة', 'chocolate', 'منتجات الشوكولاتة الفاخرة'),
('هدايا', 'gifts', 'هدايا مميزة'),
('مناسبات', 'occasions', 'منتجات للمناسبات الخاصة');

-- Insert Sample Products
INSERT INTO `products` (`name`, `slug`, `description`, `price`, `image`, `category_id`, `in_stock`, `featured`) VALUES
('علبة شوكولاتة فاخرة', 'luxury-chocolate-box', 'علبة شوكولاتة فاخرة مع تشكيلة متنوعة', 150.00, 'https://thurayachoco.io/images/products/box1.jpg', 1, TRUE, TRUE),
('شوكولاتة بالحليب', 'milk-chocolate', 'شوكولاتة بالحليب الطبيعي', 50.00, 'https://thurayachoco.io/images/products/milk.jpg', 1, TRUE, FALSE),
('هدية رومانسية', 'romantic-gift', 'هدية مثالية للمناسبات الرومانسية', 200.00, 'https://thurayachoco.io/images/products/romantic.jpg', 2, TRUE, TRUE);
