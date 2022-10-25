import {MigrationInterface, QueryRunner} from "typeorm";

export class User1643103202457 implements MigrationInterface {
    name = 'User1643103202457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, `gender` varchar(255) NOT NULL, `role` enum ('ADMIN', 'EDITOR', 'USER') NOT NULL DEFAULT 'USER', UNIQUE INDEX `IDX_a95e949168be7b7ece1a2382fe` (`uuid`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_a95e949168be7b7ece1a2382fe` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
