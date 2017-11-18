
var approval = function() {
	var approvalToken = 0;
	var thisVoter = inputValues.voterCredentials;
	if((thisVoter.fName == voter.fName) && (thisVoter.lName == voter.lName) && (thisVoter.Birthdate == voter.Birthdate) && (thisVoter.token == voter.token)) {
	// just used for storing validation
  approvalToken = 1;
	} else {
	approvalToken = 0; 
	}
	console.log("approvaltoken", approvalToken);
	// call the ballot page and send credentials so we know which ballot to load
	var req = new XMLHttpRequest();
	req.open('GET', '/voter/ballot', true);
//	req.addEventListener('load', function() {
//		if(req.status >=200 && req.status < 400) {
//
	req.send(null);
	return approvalToken;
}


var voter = {	
	voterID: "ID_9247547",
    	token: "0111US890",
   	address: "2500 Monroe Avenue, Corvallis, Oregon",
   	fName: "Rini",
    	lName: "Chatterjee",
	Birthdate: "1967-04-12"	
};

var ballot = {
    authToken: "0111US890",
    Ofc1: "Mayor",
    Ofc1Cnd1: "Aleita Train, Green Party",
    Ofc1Cnd2: "Katie Beth, Democratic Party",
    Ofc2: "Counsellor",
    Ofc2Cnd1: "Matt Castillo, Communist Party",
    Ofc2Cnd2: "Sean Solberg, Socialist Party"
};

var inputValues = {
    votes : {},
    voterCredentials : {},

}

document.getElementById("voterName").innerHTML = voter.fName + ' ' + voter.lName;
document.getElementById("voterAddress").innerHTML = voter.address;
document.getElementById("voterAuthToken").innerHTML = voter.authToken;

document.getElementById("Ofc1").innerHTML = ballot.Ofc1;
document.getElementById("Ofc2").innerHTML = ballot.Ofc2;

document.getElementById("Ofc1Cnd1").innerHTML = ballot.Ofc1Cnd1;
document.getElementById("Ofc1Cnd2").innerHTML = ballot.Ofc1Cnd2;
document.getElementById("Ofc2Cnd1").innerHTML = ballot.Ofc2Cnd1;
document.getElementById("Ofc2Cnd2").innerHTML = ballot.Ofc2Cnd2;

function getBallot() {
    var x = document.getElementById("postBallot").elements;
    // var votes = {};
    for( var i=0 ; i < x.length ; i++ ) {
        var item = x.item(i);
        inputValues.votes[item.name] = item.value;
    }
    console.log(inputValues.votes);


};

// var voterInputs = getBallot();

function login() {
    var x = document.getElementById("login").elements;
    // var voterCredentials = {};
    for( var i=0 ; i < x.length ; i++ ) {
        var item = x.item(i);
        inputValues.voterCredentials[item.name] = item.value;
    }
    console.log(inputValues.voterCredentials);
		console.log(approval());

};


// var votedCandidates = login();
