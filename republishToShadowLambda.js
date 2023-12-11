const AWS = require('aws-sdk');

const iotData = new AWS.IotData({ endpoint: 'a2h727x7dlfrio-ats.iot.us-east-2.amazonaws.com' });

exports.handler = async (event) => {
    console.log("Evento recibido:", JSON.stringify(event, null, 2));
    
    const movimiento = event.movimiento;
    const thingName = event.thing_name;
    const shadowUpdate = {
        state: {
            desired: {
                movimiento: movimiento
            }
        }
    };
    const params = {
        topic: `$aws/things/${thingName}/shadow/update`, 
        payload: JSON.stringify(shadowUpdate),
        qos: 0
    };
    try {
        await iotData.publish(params).promise();
        console.log('Ya lo publique en el shadow');
    } catch (error) {
        console.error('Error al publicar:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('error al publicar')
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify('Publicado correctamente'),
    };
     
};