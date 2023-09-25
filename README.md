1. Create a VM with MongoDB Community and Redis Community installed. Take a note of the private IP for the VM.<br> . 
MongoDB can be installed from : https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04 
Redis can be installed from : https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-20-04
2. Create an Alloy DB instance by following the steps at https://cloud.google.com/alloydb/docs/instance-primary-create and note the primary IP for the VM.<br>
3. Login into the PostgreSQL instance and create the database & table via the script at https://github.com/jainsourabh2/alloydb-demo/blob/main/database.sql<br>
4. Login into the MongoDB Cluster and create the DB(alloydb_demo) and collection(alloydb_demo).<br>
5. Download the code on the VM for this repository.<br>
6. Replace the IPs for MongoDB , Redis and AlloyDB appropriately in index.js file.<br>
7. Install NodeJS and NPM.<br>
8. Execute the below steps:<br>
9. cd alloydb-demo<br>
10. npm install<br>
11. node index.js<br>
12. Hit the URL : http://localhost:8081/ and validate the records in MongoDB and AlloyDB.<br>
13. You can now run queries in AlloyDB to get the PnL in real time.<br>
