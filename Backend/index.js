const express = require('express');
const app = express();
const db = require('./db');
const moment = require('moment');
const port = 3001;
const mqtt = require('./mqtt');
const topic = 'seletor4000/cor';
const cors = require('cors');

app.use(cors());
app.use(express.json());

mqtt.on('connect', () => {
  console.log('Connected')
  mqtt.subscribe([topic], () => {
    console.log(`Subscribe to topic ${topic}`)
  })
})

mqtt.on('connect', () => {
  console.log('Connected')
  mqtt.subscribe([topic], () => {
    console.log(`Subscribe to topic ${topic}`)
   
  })
  mqtt.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error)
    }
  })
});

mqtt.on('message', (topic, message) => {
  process.env.TZ = 'America/Sao_Paulo';
  const msg = message.toString();
  const data = moment();
  const hora = data.format('HH:mm:ss');
  const dataFormatada = data.format('YYYY:MM:DD');
  console.log(`A mensagem é :  ${msg}`);

    try {
         db.query('INSERT INTO cadastro (descricao,data,hora) VALUES (?,?,?)',[msg,dataFormatada,hora]);
       } catch (error) {
    console.error(error);
  }

});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' }); // Retorna um JSON com a mensagem
});

// Rota GET para obter todos os produtos
// GET Route for all products
app.get('/consulta', async (req, res) => {
  try {
    const [cor] = await db.query('SELECT * FROM cadastro');
    res.json(cor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar cor');
  }
});

app.get('/controle', async (req, res) => {
  try {
    const [cor] = await db.query('SELECT * FROM sumario_cores');
    res.json(cor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar cor');
  }
});

app.get('/totalCores', async (req, res) => {
  try {
    const total = await Sumario_Cores.findOne({
      where: { descricao: 'total' },
      attributes: ['total']
    });

    if (!total) {
      return res.status(404).send('Total não encontrado');
    }

    res.json({ total: total.total });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar total');
  }
});



app.get('/consultaData', async (req, res) => {
  const horaInicial = req.params.horaInicial;
  const horaFinal = req.params.horaFinal;
  try {
    const [consulta] = await db.query('SELECT * FROM cadastro WHERE hora BETWEEN ? AND ?',[horaInicial, horaFinal]);
  
    res.json(consulta);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar cor');
  }
});



// Inicia o servidor
app.listen(port, () => {
  console.log('Servidor iniciado na porta ${port}');








});
mqtt.end;