SELECT timestamp() AS timestamp , topic (3) AS thing_name, state.reported.fireState AS fireState , state.reported.sensorFlama AS sensorFlama FROM '$aws/things/+/shadow/update'