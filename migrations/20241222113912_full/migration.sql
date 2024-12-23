-- CreateTable
CREATE TABLE `Bank` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `expired_months` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MyId` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `response_id` VARCHAR(191) NULL,
    `comparison_value` DOUBLE NULL,
    `passport` VARCHAR(191) NULL,
    `profile` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accountant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `login` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER') NOT NULL DEFAULT 'ACCOUNTANT',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CallCenter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `login` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER') NOT NULL DEFAULT 'CALLCENTER',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Super` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `login` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER') NOT NULL DEFAULT 'SUPER',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `login` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER') NOT NULL DEFAULT 'USER',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `merchant_id` INTEGER NOT NULL,
    `fillial_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fillial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `region` ENUM('ANDIJON', 'BUXORO', 'FARGONA', 'JIZZAX', 'XORAZM', 'NAMANGAN', 'NAVOIY', 'QASHQADARYO', 'QORAQALPOQ', 'SAMARQAND', 'SIRDARYO', 'SURXONDARYO', 'TOSHKENT', 'TOSHKENT_SHAHAR') NULL,
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `merchant_id` INTEGER NOT NULL,
    `nds` VARCHAR(191) NULL,
    `hisob_raqam` VARCHAR(191) NULL,
    `bank_name` VARCHAR(191) NULL,
    `mfo` VARCHAR(191) NULL,
    `inn` VARCHAR(191) NULL,
    `director_name` VARCHAR(191) NULL,
    `director_phone` VARCHAR(191) NULL,
    `percent_type` ENUM('OUT', 'IN') NOT NULL DEFAULT 'OUT',
    `expired_months` JSON NOT NULL,
    `cashback_percent` DOUBLE NOT NULL DEFAULT 0,
    `cashback_amount` INTEGER NOT NULL DEFAULT 0,

    FULLTEXT INDEX `Fillial_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Merchant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `type` ENUM('MERCHANT', 'AGENT') NOT NULL DEFAULT 'MERCHANT',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    FULLTEXT INDEX `Merchant_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NULL,
    `hash` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `zayavka_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zayavka` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `phone2` VARCHAR(191) NULL,
    `pinfl` VARCHAR(191) NULL,
    `cardNumber` VARCHAR(191) NULL,
    `passport_date` VARCHAR(191) NULL,
    `passport_by` VARCHAR(191) NULL,
    `passport` VARCHAR(191) NULL,
    `birth` VARCHAR(191) NULL,
    `limit` DOUBLE NULL,
    `canceled_reason` VARCHAR(191) NULL,
    `device` JSON NULL,
    `location` JSON NULL,
    `address` JSON NULL,
    `expired_month` INTEGER NULL,
    `percent` INTEGER NULL,
    `amount` DOUBLE NULL,
    `payment_amount` DOUBLE NULL,
    `status` ENUM('PROGRESS', 'CANCELED_BY_SCORING', 'CANCELED_BY_CLIENT', 'CANCELED_BY_DAILY', 'FINISHED') NULL DEFAULT 'PROGRESS',
    `paid_status` ENUM('WAITING', 'PAID', 'CANCELED') NOT NULL DEFAULT 'WAITING',
    `bank_id` INTEGER NULL,
    `agree` BOOLEAN NOT NULL DEFAULT false,
    `step` INTEGER NOT NULL DEFAULT 1,
    `scoring_end` DATETIME(3) NULL,
    `creditId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `fillial_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `myid_id` INTEGER NULL,

    FULLTEXT INDEX `Zayavka_fullname_phone_phone2_passport_idx`(`fullname`, `phone`, `phone2`, `passport`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_merchant_id_fkey` FOREIGN KEY (`merchant_id`) REFERENCES `Merchant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_fillial_id_fkey` FOREIGN KEY (`fillial_id`) REFERENCES `Fillial`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fillial` ADD CONSTRAINT `Fillial_merchant_id_fkey` FOREIGN KEY (`merchant_id`) REFERENCES `Merchant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_zayavka_id_fkey` FOREIGN KEY (`zayavka_id`) REFERENCES `Zayavka`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zayavka` ADD CONSTRAINT `Zayavka_bank_id_fkey` FOREIGN KEY (`bank_id`) REFERENCES `Bank`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zayavka` ADD CONSTRAINT `Zayavka_merchant_id_fkey` FOREIGN KEY (`merchant_id`) REFERENCES `Merchant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zayavka` ADD CONSTRAINT `Zayavka_fillial_id_fkey` FOREIGN KEY (`fillial_id`) REFERENCES `Fillial`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zayavka` ADD CONSTRAINT `Zayavka_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zayavka` ADD CONSTRAINT `Zayavka_myid_id_fkey` FOREIGN KEY (`myid_id`) REFERENCES `MyId`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
