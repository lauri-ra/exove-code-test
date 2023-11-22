CREATE TABLE People (
  id INT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE Phones (
  id INT PRIMARY KEY,
  user_id INT,
  number VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES People(id)
);

INSERT INTO People (id, first_name, last_name)
VALUES
  (1, 'John', 'Smith'),
  (2, 'Mary', 'Jones'),
  (3, 'Gerhard', 'Feuerhaufen'),
  (4, 'Rami', 'Pitkäniemi'),
  (5, 'Anna', 'Kråkström');

INSERT INTO Phones (id, user_id, number)
VALUES
  (1, 2, '+1 213 621 0002'),
  (2, 2, ' +1 800 444 4444'),
  (3, 1, '+1 604 444 4444'),
  (4, 1, '+44 20 8759 9036'),
  (5, 4, '+358 50 333 3333'),
  (6, 5, '+46 771 793 336 ');
