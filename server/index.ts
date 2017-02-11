import {ServerApp} from './server-app'
import { connectToDatabase,DatabaseOptions } from './database-connection';
import ojs= require('orientjs');
import winston=require('winston');

winston.level='debug';

winston.debug("Setting up Server");

let iWantToUseADatabase=false;

if(iWantToUseADatabase){//configure and setup OrientDB database before launching the server
	let databaseOptions=new DatabaseOptions();//<--there are a total of 7 properties
	databaseOptions.username="root";
	databaseOptions.password="root";
	databaseOptions.name="sanity";
	//change or add more properties as needed

	connectToDatabase(databaseOptions).
	then((db:ojs.Db)=>{
		winston.info("Databse connection established, starting server")
		let server=new ServerApp(db);
		server.setRoutes();
		server.start();
	}).catch((error:Error)=>{
		winston.error("Problems connecting to the database:"+error.message);
	});
}else{
	//start the server (the db field of the server will be empty)
	winston.info("Starting server without a database");
	let server=new ServerApp();
	server.setRoutes();
	server.start();
}
