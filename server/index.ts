import {ServerApp} from './server-app'
import { connectToDatabase,DatabaseOptions } from './database-connection';
import ojs= require('orientjs');
import winston=require('winston');

winston.level='debug';

winston.debug("Initializing Server");

let databaseOptions=new DatabaseOptions();
databaseOptions.username="root";
databaseOptions.password="root";
databaseOptions.name="sanity";
//change or add more options as needed

connectToDatabase(databaseOptions).
then((db:ojs.Db)=>{
	winston.info("Databse connection established, starting server")
	let server=new ServerApp(db);
	server.setRoutes();
	server.start();
}).catch((error:Error)=>{
	winston.error("Problems connecting to the database:"+error.message);
});
