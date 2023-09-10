import { createClient, defineScript } from 'redis';
import { MongoClient } from 'mongodb';
import pg from 'pg'
import express from 'express';

const app = express();


// Initial Balance Up
const initialBalanceUp = 50;

// MongoDB Connection
const url = 'mongodb://x.x.x.x:27017';
const client = new MongoClient(url);
const dbNameMongo = 'alloydb_demo';
const db = client.db(dbNameMongo);
const collection = db.collection('pnl');

// Redis Connection
const client_redis = createClient({
  url: 'redis://x.x.x.x:6379',
  scripts: {
    mincr: defineScript({
      NUMBER_OF_KEYS: 1,
      SCRIPT:
        'return {' +
        'redis.pcall("INCRBY", KEYS[1], ARGV[1]),' +
        '}',
      transformArguments(key1, increment) {
        return [key1, increment.toString()];
      },
    }),
  }
});

// PostgreSQL Connection
const client_pg = new pg.Client({
  host: 'x.x.x.x',
  port: 5432,
  database: 'guestbook',
  user: 'postgres',
  password: 'xxxxxxxx',
})


// Use connect method to connect to the server
await client.connect();
await client_redis.connect();
await client_pg.connect()


async function main() {
 
    client_redis.on('error', err => console.log('Redis Client Error', err));

    let sumParts = 0;
    let random_int = Math.floor(Math.random() * (200 - 100 + 1) + 100);
    let cm_net_amt = Math.ceil(Math.random() * (random_int - sumParts));
    sumParts += cm_net_amt;
    let tm_net_amt = Math.ceil(Math.random() * (random_int - sumParts));
    sumParts += tm_net_amt;
    let dm_net_amt = Math.ceil(Math.random() * (random_int - sumParts));
    sumParts += dm_net_amt;
    let sm_net_amt = Math.ceil(Math.random() * (random_int - sumParts));
    sumParts += sm_net_amt;    
    let m_net_amt = (random_int - sumParts);


    let val_cm_net_amt = -1 * cm_net_amt;
    let val_tm_net_amt = -1 * tm_net_amt;
    let val_dm_net_amt = -1 * dm_net_amt;
    let val_sm_net_amt = -1 * sm_net_amt;
    let val_m_net_amt = -1 * m_net_amt;

    const insertResult = await collection.insertMany([{
      "cm_name": "CM",
      "cm_net_amt": val_cm_net_amt,
      "tm_name": "TM1",
      "tm_net_amt": val_tm_net_amt,
      "dm_name": "DM1",
      "dm_net_amt": val_dm_net_amt,
      "sm_name": "SM1",
      "sm_net_amt": val_sm_net_amt,
      "m_name": "M1",
      "m_net_amt": val_m_net_amt,
      "p_name": "P1",
      "p_net_amt": random_int
    }]);
    console.log(`Added data to MongoDB`);

    let value = await client_redis.get('PNetAmount');
    console.log("Initial Balance Up :" + initialBalanceUp)
    console.log("Preivous Value :" + value)
    console.log("New Incoming Value :" + random_int)
    await client_redis.mincr('PNetAmount', random_int);
    value = await client_redis.get('PNetAmount');
    console.log("Latest Value :" + value)
    console.log(`Updated data to Redis`);

    let res = await client_pg.query("INSERT INTO pnl (cm_name, cm_net_amt,tm_name, tm_net_amt,dm_name, dm_net_amt,sm_name, sm_net_amt,m_name, m_net_amt,p_name, p_net_amt) values ('CM', " + val_cm_net_amt + " ,'TM', " + val_tm_net_amt + " ,'DM', " + val_dm_net_amt + " ,'SM', " + val_sm_net_amt + " ,'M', " + val_m_net_amt + " ,'P', " + random_int + ");")
    res = await client_pg.query("SELECT SUM(p_net_amt) FROM pnl;")
    console.log(`Added data to AlloyDB`);

  return 'Done.';
}

app.get('/', function (req, res) {
    main()
      .then(res.send('Message Posted'))
      .catch(console.error)
})


const server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
