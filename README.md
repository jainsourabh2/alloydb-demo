Create a VM with MongoDB Community and Redis Community installed. Take a note of the private IP for the VM.
Create an Alloy DB instance by following the steps at https://cloud.google.com/alloydb/docs/instance-primary-create and note the primary IP for the VM.
Login into the PostgreSQL instance and create the database & table via the script at https://github.com/jainsourabh2/alloydb-demo/blob/main/database.sql
Login into the MongoDB Cluster and create the DB(alloydb_demo) and collection(alloydb_demo).
Download the code on the VM for this repository.
Install NodeJS and NPM.
Execute the below steps:
cd alloydb-demo
npm install
node index.js
Hit the URL : http://localhost:8081/ and validate the records in MongoDB and AlloyDB.
You can now run queries in AlloyDB to get the PnL in real time.
