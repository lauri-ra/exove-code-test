# Task setup & prequisities

The solution is in the file [**query.sql**](https://github.com/lauri-ra/exove-code-test/blob/main/2B-SQL-Query/query.sql)

This repository alos provides a Dockerized setup for PostgreSQL along with instructions to build and run the task solution
Make sure you have Docker installed on your machine along with PostgreSQL.

I chose Docker for the easy setup and I also wanted a database for testing that the query works as intended.
The Dockerfile sets the database up with envirnoment variables and runs the database initialization queries.
PostgreSQL database was chosen since that's what I was familiar with before.

## About the solution
The goal of the task was to retrieve and combine data from two tables. The end result was to get a single table where you have all the records from the People table with matching numbers on single rows for each individual (or N/A for missing numbers).

Here is a short summary about how I came to the solution:

   ```
   SELECT CONCAT(People.first_name, ' ', People.last_name) AS name, 
       COALESCE(STRING_AGG(Phones.number, ','), 'N/A') AS numbers
   FROM People
   LEFT JOIN Phones ON People.id = Phones.user_id
   GROUP BY People.first_name, People.last_name
   ORDER BY People.last_name, People.first_name;
   ```

#### SELECT
Select two columns. One with concatenated first and last names. Then the second one with where we combine all the numbers for one person. STRING_AGG is used to concatenate the numbers from the Phone table with ',' in between. COALESCE checks if the retunrned number is NULL and when needed changes it to 'N/A'.

#### FROM
Select where the People data is coming from

#### LEFT JOIN
Perform LEFT JOIN with People and Phones tables. This way we all the records from the left table and the matching records from the right table. This makes sure all the People are included in the result, even if they don't have a number in the database.

#### GROUP BY & ORDER BY
The results are grouped by the first_name and last_name columns, making sure that data is aggregated for each individual user. The records are then ordered by last name and first name.

## Build and run PostgreSQL container

1. **Build the Docker Image:**
   ```
   docker build -t sql_db .
   ```
2. **Run the container**
   ```
   docker run -p 5432:5432 -d sql_db
   ```
4. **Connect to the database**

   When prompted type in the password 1234 (specified in the Dockerfile)
   ```
   psql -h localhost -p 5432 -U admin -d exovetest_database
   ```
5. **Run the query**
   
   ```
   \i query.sql
   ```

   Or alternatively with the direct query

   ```
   SELECT CONCAT(People.first_name, ' ', People.last_name) AS name, 
       COALESCE(STRING_AGG(Phones.number, ','), 'N/A') AS numbers
   FROM People
   LEFT JOIN Phones ON People.id = Phones.user_id
   GROUP BY People.first_name, People.last_name
   ORDER BY People.last_name, People.first_name;
   ```
