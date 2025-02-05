import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class PublicItems1738773509513 implements MigrationInterface {
    private readonly logger = new Logger(PublicItems1738773509513.name);
    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Up')
        await queryRunner.query('UPDATE items SET public = 1');
    }

    public async down(): Promise<void> {
        this.logger.log('Down')
    }

}
