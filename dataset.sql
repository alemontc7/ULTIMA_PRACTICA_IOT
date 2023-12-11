SELECT 
    FROM_UNIXTIME(timestamp / 1000, 'UTC-4') AS date_time,
    thing_name,
    temperatura
FROM 
    apagallamas_dataset
WHERE 
    thing_name IS NOT NULL
    AND temperatura IS NOT NULL
    AND timestamp IS NOT NULL}