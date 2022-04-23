/*
  Warnings:

  - You are about to drop the column `descripton` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `descripton`,
    ADD COLUMN `description` CHAR(255) NOT NULL DEFAULT '';
