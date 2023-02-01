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
    database.execute("ALTER TABLE course_materials_access DROP CONSTRAINT IF EXISTS fk_course_material_id")
    database.execute("ALTER TABLE course_materials_access ADD CONSTRAINT fk_course_material_id FOREIGN KEY (course_material_id) REFERENCES course_materials(id)")
