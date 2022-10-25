import {MigrationInterface, QueryRunner} from "typeorm";

export class Tile1647519852582 implements MigrationInterface {
    name = 'Tile1647519852582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tile` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `titel` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, UNIQUE INDEX `IDX_ed099197482378c4f4c83b42a2` (`uuid`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_ed099197482378c4f4c83b42a2` ON `tile`");
        await queryRunner.query("DROP TABLE `tile`");
    }

}
