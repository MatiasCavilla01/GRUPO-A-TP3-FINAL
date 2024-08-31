const db = require('mongoose')

db.connect('mongodb+srv://matiascavilla20038:perfumeria@cluster0.uxjw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  
  })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB', err);
  });