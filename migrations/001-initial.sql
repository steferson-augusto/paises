--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS users (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS countries (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL,
  title TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS pages (
  id          INTEGER PRIMARY KEY,
  countryId  INTEGER REFERENCES countries(id) ON DELETE CASCADE,
  subtitle       TEXT    NOT NULL,
  slug       TEXT    NOT NULL,
  icon TEXT NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS topics (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  pageId  INTEGER REFERENCES pages(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS images (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  pageId  INTEGER REFERENCES pages(id) ON DELETE CASCADE,
  topicId  INTEGER REFERENCES topics(id) ON DELETE CASCADE,
  pathway TEXT NOT NULL,
  position TEXT NOT NULL,
  width TEXT,
  height TEXT,
  label TEXT
);

INSERT INTO users (name, email, password) VALUES ('Stéferson Augusto', 'steferson_a@hotmail.com', '123456');

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE users;
DROP TABLE images;
DROP TABLE topics;
DROP TABLE pages;
DROP TABLE countries;