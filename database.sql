CREATE DATABASE guestbook1;

\c guestbook1;

CREATE TABLE pnl1(
   cm_name VARCHAR(255) ,
   cm_net_amt INTEGER ,
   tm_name VARCHAR(255) ,
   tm_net_amt INTEGER ,
   dm_name VARCHAR(255) ,
   dm_net_amt INTEGER ,
   sm_name VARCHAR(255) ,
   sm_net_amt INTEGER ,
   m_name VARCHAR(255) ,
   m_net_amt INTEGER ,
   p_name VARCHAR(255) ,
   p_net_amt INTEGER ,
   entryid SERIAL PRIMARY KEY
);
