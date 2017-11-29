"use strict";

const express = require('express');
var fs = require('fs');
let obj = require("../db.json");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render('voter/login', {
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
      title: 'login', 
    });
  }); 

  app.get("/electionInfo",function(req,res){
    res.send(obj);
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

    //console.log("INSERTS: " + JSON.stringify(obj));

    res.render('voter/ballot', obj);
  });

  // app.get("/voter/ballot", (req, res) => {
  //   res.render('voter/ballot', {
  //     status: 200, 
  //     status: 'ok', 
  //     title: 'Ballot', 
  //   });
  // });

  app.get('/hasVoted', function(req,res){ 
    let numVoters = obj.voters.length;
    let position = 0;

    let jsonFileObject = JSON.parse(fs.readFileSync('db.json')); 
    //console.log(jsonFileObject);

    for (let i = 0; i < numVoters; i++) {
      if (jsonFileObject.voters[i].personal.token == req.query.token){
        jsonFileObject.voters[i].ballot.hasVoted = req.query.voted; 
        position = i; 
        //console.log("HERE: " + obj.voters[i].ballot.hasVoted);
      }
    }

    console.log(jsonFileObject);
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

    res.render('voter/ballot', obj);
  });

  app.get("/voter/ballot-verify", (req, res) => {
    res.render('voter/ballot-verify', {
      status: 200, 
      status: 'ok', 
      title: 'Ballot Verify', 
    });
  });
};  
