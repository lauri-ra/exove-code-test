SELECT CONCAT(People.first_name, ' ', People.last_name) AS name, 
       COALESCE(STRING_AGG(Phones.number, ','), 'N/A') AS numbers
FROM People
LEFT JOIN Phones ON People.id = Phones.user_id
GROUP BY People.first_name, People.last_name
ORDER BY People.last_name, People.first_name;