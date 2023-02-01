"""Migration for a given Submitty course database."""


def up(config, database, term, course):
    """
    Run up migration.

    :param config: Object holding configuration details about Submitty
    :type config: migrator.config.Config
    :param database: Object for interacting with given database for environment
    :type database: migrator.db.Database
    :param term: term of the course being migrated
    :type term: str
    :param course: Code of course being migrated
    :type course: str
    """
    sql = "ALTER TABLE queue_settings ADD COLUMN IF NOT EXISTS message VARCHAR(400) DEFAULT NULL"
    database.execute(sql)

def down(config, database, term, course):
    """
    Run down migration (rollback).

    :param config: Object holding configuration details about Submitty
    :type config: migrator.config.Config
    :param database: Object for interacting with given database for environment
    :type database: migrator.db.Database
    :param term: term of the course being migrated
    :type term: str
    :param course: Code of course being migrated
    :type course: str
    """
    sql = "ALTER TABLE queue_settings DROP COLUMN message"
    database.execute(sql)
    pass
