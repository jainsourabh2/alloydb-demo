1. Create a VM with MongoDB Community and Redis Community installed. Take a note of the private IP for the VM.<br>
2. Create an Alloy DB instance by following the steps at https://cloud.google.com/alloydb/docs/instance-primary-create and note the primary IP for the VM.<br>
3. Login into the PostgreSQL instance and create the database & table via the script at https://github.com/jainsourabh2/alloydb-demo/blob/main/database.sql<br>
4. Login into the MongoDB Cluster and create the DB(alloydb_demo) and collection(alloydb_demo).<br>
5. Download the code on the VM for this repository.<br>
6. Install NodeJS and NPM.<br>
7. Execute the below steps:<br>
8. cd alloydb-demo<br>
9. npm install<br>
10. node index.js<br>
11. Hit the URL : http://localhost:8081/ and validate the records in MongoDB and AlloyDB.<br>
12. You can now run queries in AlloyDB to get the PnL in real time.<br>
