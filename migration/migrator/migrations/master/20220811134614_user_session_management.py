"""Migration for the Submitty master database."""

def up(config, database):
    """
    Run up migration.

    :param config: Object holding configuration details about Submitty
    :type config: migrator.config.Config
    :param database: Object for interacting with given database for environment
    :type database: migrator.db.Database
    """
    database.execute("""
        ALTER TABLE sessions
        ADD COLUMN IF NOT EXISTS session_created timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
        ADD COLUMN IF NOT EXISTS browser_name character varying(50) DEFAULT 'Unknown',
        ADD COLUMN IF NOT EXISTS browser_version character varying(15) DEFAULT '',
        ADD COLUMN IF NOT EXISTS platform character varying(50) DEFAULT 'Unknown';
    """)
    database.execute("""
        ALTER TABLE users
        ADD COLUMN IF NOT EXISTS enforce_single_session boolean DEFAULT false;
    """)

def down(config, database):
    """
    Run down migration (rollback).
    """
    pass
