"use strict";

const express = require('express');
var fs = require('fs');
let obj = require("../db.json");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render('index', {
      status: 200, 
      status: 'ok', 
      title: 'E-voting', 
    });
  });  
  app.get("/voter/tou", (req, res) => {
    res.render('voter/tou', {
      status: 200, 
      status: 'ok', 
      title: 'Terms of Use', 
    });
  });
  app.get("/voter/login", (req, res) => {
    res.render('voter/login', {
      status: 200, 
      status: 'ok', 
      title: 'E-voting', 
    });
  });  
  app.get("/voter/login", (req, res) => {
    res.render('voter/login', {
      status: 200, 
      status: 'ok', 
      title: 'login', 
    });
  }); 

  app.get("/voter/help", (req, res) => {
    res.render('voter/help', {
      status: 200, 
      status: 'ok', 
      title: 'help', 
    });
  }); 

  app.get("/electionInfo",function(req,res){
    res.send(obj);
  });

    // TEST
  app.post('/voterVerify',function(req,res){
      
      let inserts = [req.body.id, req.body.fName, req.body.lName, req.body.bDay, req.body.token, req.body.address];
      //console.log(req.body);
      obj.user.voterID = req.body.id;
      obj.user.firstName = req.body.fName;
      obj.user.lastName = req.body.lName;
      obj.user.DOB = req.body.Birthdate;
      obj.user.token = req.body.token;

      var i;
      var foundVoter = 0;
      var corrVoter;
      let userElectionID; 
      for(i=0; i<obj.voters.length; i++){

          if(obj.user.voterID == obj.voters[i].id)
          {
              corrVoter = i;
              if(obj.user.firstName == obj.voters[corrVoter].firstName && obj.user.lastName == obj.voters[corrVoter].lastName && obj.user.token == obj.voters[corrVoter].token) {
			foundVoter = 1;		
             		 userElectionID = obj.voters[i].electionID;
		}
              break;
          }
      }
      
      let ballot; 
      if(foundVoter==1){
        if(obj.user.firstName == obj.voters[corrVoter].firstName && obj.user.lastName == obj.voters[corrVoter].lastName && obj.user.token == obj.voters[corrVoter].token) {

	  //get election data by indexing through database
          for(i=0; i<obj.elections.ballot.length; i++){
              	if(obj.elections.ballot[i].electionID  == userElectionID)
             	 ballot = obj.elections.ballot[i];
          }
      

       //let newObj = obj.user;
       let payload = {voter:null, elections:null};
       payload.voter = obj.voters[corrVoter];
       payload.elections = ballot;
       console.log(payload);

       res.status(200);
       res.render('voter/ballot', payload);
      }
      
      else if (foundVoter ==0){
          res.status(200);
          res.render('voter/unf');
      }

  });

  // TEST
  app.post('/voter/ballot',function(req,res){

    let inserts = [req.body.id, req.body.fName, req.body.lName, req.body.bDay, req.body.token, req.body.address];
    
    obj.user.voterID = req.body.id;
    obj.user.firstName = req.body.fName;
    obj.user.lastName = req.body.lName;
    obj.user.DOB = req.body.Birthdate;
    obj.user.token = req.body.token;

        /*
    console.log("OBJ: " + obj);
    console.log("DATA: " + req.query.myData);
    console.log("QUERY: " + req.query);
    console.log("RESULT: " + req.result);
    console.log("INSERTS: " + req.body.id);
    console.log("INSERTS: " + JSON.stringify(obj));
    */

    res.render('voter/ballot', obj);
  });

  app.get('/hasVoted', function(req,res){ 
    let numVoters = obj.voters.length;
    let position = 0;
    
    let newFile = fs.open('test.json', 'r+', function(err,fd){
      if (err) {
        return console.error(err);
     }
    });
    
    let jsonFileObject = JSON.parse(fs.readFileSync('db.json')); 
    for (let i = 0; i < numVoters; i++) {
      if (jsonFileObject.voters[i].token == req.query.token){
        jsonFileObject.voters[i].hasVoted = req.query.voted; 
        position = i; 
        //console.log("HERE: " + obj.voters[i].ballot.hasVoted);
      }
    }
    
    //let openFile = fs.open('db.json', 'r+', function(err,fd){
    //let openFile = fs.writeFile('db.json', jsonFileObject, function(err){
        
    //  });
    //});


    //console.log(jsonFileObject);

    //console.log("TEST: " + obj);
   // console.log("Other: " + jsonFileObject);

    //fs.writeFileSync('db.json', jsonFileObject); 

    /*
    for (var dataIndex in jsonFileObject.result.data) {
      if (jsonFileObject.result.data[dataIndex].feedId === feedId) {
         jsonFileObject.result.data[dataIndex].region = updatedRegion;
      }
   }
   */
   // console.log("THIS: " + JSON.stringify(obj.voters[position].ballot));
   
   // console.log("QUERY: " + req.query.voted);
   // console.log("INSERTS: " + req.query.token);
    //res.render('voter/ballot', obj);
  //    res.render('voter/ballot', obj);
  });

  app.get('/voter/ballot-verify', (req, res) => {
    res.render('voter/ballot-verify', {
      status: 200,
      title: 'Confirm your vote'
    });
  });

  app.post('/confirmation', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('voter/ballotSubmitted', req.body);
  });

};  
