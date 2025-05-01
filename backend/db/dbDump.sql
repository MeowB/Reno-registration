-- MySQL DDL for users, merchant_profiles, and agent_profiles

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('merchant', 'agent') NOT NULL
);

CREATE TABLE IF NOT EXISTS merchant_profiles (
    user_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    company_name VARCHAR(255),
    business_email VARCHAR(255) NOT NULL,
    industry VARCHAR(100),
    phone_number VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS agent_profiles (
    user_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    region VARCHAR(100),
    phone_number VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
