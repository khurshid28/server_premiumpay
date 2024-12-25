/*
  Warnings:

  - Made the column `bank_id` on table `zayavka` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `zayavka` DROP FOREIGN KEY `Zayavka_bank_id_fkey`;

-- DropIndex
DROP INDEX `Zayavka_bank_id_fkey` ON `zayavka`;

-- AlterTable
ALTER TABLE `fillial` ADD COLUMN `max_amount` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `zayavka` MODIFY `bank_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `Zayavka` ADD CONSTRAINT `Zayavka_bank_id_fkey` FOREIGN KEY (`bank_id`) REFERENCES `Bank`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
