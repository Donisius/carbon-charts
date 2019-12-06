export interface MigrationInterface {
    version: string;
    migrate: (option: any) => any;
}
