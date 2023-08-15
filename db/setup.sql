-- Every created table should always have a DROP TABLE IF EXISTS statement at the top
DROP TABLE IF EXISTS students;

-- CREATE TABLE statements
CREATE TABLE students(
    id INT GENERATED ALWAYS AS IDENTITY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    age INT,
    PRIMARY KEY(id)
);