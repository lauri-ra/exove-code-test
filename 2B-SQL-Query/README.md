To run the database and queries in Dokcer run these commands

docker build -t sql_db .

docker run -p 5432:5432 -d sql_db

psql -h localhost -p 5432 -U admin -d exovetest_database
