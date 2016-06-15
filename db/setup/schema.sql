DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
  id serial PRIMARY KEY,
  title text,
  overview text,
  release_date text,
  inventory text
);

CREATE INDEX movies_movie ON movies (title);
