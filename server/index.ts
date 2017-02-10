import {ServerApp} from './server-app'
// import { DatabaseConnection } from './database-connection';
import orientjs= require('orientjs');
import winston=require('winston');

winston.level='debug';

winston.debug("Initializing Server");

let server=new ServerApp(null);
server.setRoutes();
server.start();

// var afterDbIsConnected=function(err:Error,db:orientjs.Db){

// 	//create server giving it the DB instance 
// 	var serverApp = new ServerApp(db);

// 	//fire up the server
// 	serverApp.setRoutes();
// 	serverApp.startServer();
// }

// //TODO get credentials from env. This is only for dev purposes.
// new DatabaseConnection("root","root","sanity",afterDbIsConnected);
