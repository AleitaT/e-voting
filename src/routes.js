"use strict";

const express = require('express');
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

    console.log("INSERTS: " + JSON.stringify(obj));

    res.render('voter/ballot', obj);
  });

  // app.get("/voter/ballot", (req, res) => {
  //   res.render('voter/ballot', {
  //     status: 200, 
  //     status: 'ok', 
  //     title: 'Ballot', 
  //   });
  // });

  app.get("/voter/ballot-verify", (req, res) => {
    res.render('voter/ballot-verify', {
      status: 200, 
      status: 'ok', 
      title: 'Ballot Verify', 
    });
  });
};  
