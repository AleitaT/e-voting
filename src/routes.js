"use strict";

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
      title: 'login', 
    });
  }); 
  app.get("/voter/ballot", (req, res) => {
    res.render('voter/ballot', {
      status: 200, 
      status: 'ok', 
      title: 'Ballot', 
    });
  });
  app.get("/voter/ballot-verify", (req, res) => {
    res.render('voter/ballot-verify', {
      status: 200, 
      status: 'ok', 
      title: 'Ballot Verify', 
    });
  });
};  
