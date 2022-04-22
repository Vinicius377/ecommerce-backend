-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `urlFile` CHAR(255) NOT NULL,
    `price` DOUBLE NOT NULL,
    `score` INTEGER NOT NULL,
    `name` CHAR(255) NOT NULL,

    UNIQUE INDEX `products_urlFile_key`(`urlFile`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
