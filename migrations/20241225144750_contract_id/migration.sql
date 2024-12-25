/*
  Warnings:

  - You are about to drop the column `creditId` on the `zayavka` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `zayavka` DROP COLUMN `creditId`,
    ADD COLUMN `contract_id` VARCHAR(191) NULL;
