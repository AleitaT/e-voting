document.addEventListener('DOMContentLoaded', login);

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

/*
document.getElementById("voterName").innerHTML = voter.fName + ' ' + voter.lName;
document.getElementById("voterAddress").innerHTML = voter.address;
document.getElementById("voterAuthToken").innerHTML = voter.authToken;

document.getElementById("Ofc1").innerHTML = ballot.Ofc1;
document.getElementById("Ofc2").innerHTML = ballot.Ofc2;

document.getElementById("Ofc1Cnd1").innerHTML = ballot.Ofc1Cnd1;
document.getElementById("Ofc1Cnd2").innerHTML = ballot.Ofc1Cnd2;
document.getElementById("Ofc2Cnd1").innerHTML = ballot.Ofc2Cnd1;
document.getElementById("Ofc2Cnd2").innerHTML = ballot.Ofc2Cnd2;
*/

// Test correct info
function correctInfo() {
    document.getElementById("id").value = "ID_9247547";
    document.getElementById("fName").value = "Rini";
    document.getElementById("lName").value = "Chatterjee";
    document.getElementById("Birthdate").value = "1967-04-12";
    document.getElementById("token").value = "0111US890";
}

// Test incorrect info
function incorrectInfo() {
    document.getElementById("id").value = "ID_11111111";
    document.getElementById("fName").value = "Rini";
    document.getElementById("lName").value = "Chatterjee";
    document.getElementById("Birthdate").value = "1967-04-12";
    document.getElementById("token").value = "011111111";
}

var notApproved = function() {
    alert("Info does not match");  
}


var approval = function() {

    // Used for storing validation
    var approvalToken = 0;
    
	var thisVoter = inputValues.voterCredentials;
	if((thisVoter.fName == voter.fName) && (thisVoter.lName == voter.lName) && (thisVoter.Birthdate == voter.Birthdate) && (thisVoter.token == voter.token)) {
        approvalToken = 1;
	} else {
	    approvalToken = 0; 
	}
    console.log("approvaltoken", approvalToken);
    
    // If user entered the required info
    //approvalToken ? location.href = "/voter/ballot" : (alert("Info does not match");

    if (approvalToken) { 

        // manually put address
        thisVoter.address = "2500 Monroe Avenue, Corvallis, Oregon";

        let passInfo = "voterName=" + thisVoter.fName + " " + thisVoter.lName;
            passInfo += "&voterAddress=" + thisVoter.address;
            passInfo += "&voterAuthToken=" + thisVoter.token;

        var req = new XMLHttpRequest();

        // call the ballot page and send credentials so we know which ballot to load
        req.open('GET', '/voter/ballot?' + passInfo, true);
        req.addEventListener('load',function(){ 
            if(req.status >= 200 && req.status < 400){
            
                var response = JSON.parse(req.responseText);

                console.log(response);

            }
            else {
                console.log("Error in network request: " + req.statusText);
        }});

	    req.send(null);
    }
    else  
        notApproved();

}

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

var reEnterInfo = function() {
    console.log("Not granted");
}

function login() {
   
    document.getElementById('submitLogin').addEventListener('click', function(event) {
        
        event.preventDefault();

        // Manually enter test data correctInfo or incorrectInfo
        correctInfo();

        // Used to confirm access
        let accessGranted = true;

        // Get elements entered by user
        var x = document.getElementById("login").elements;
        
        // var voterCredentials = {};

        for( var i=0 ; i < x.length ; i++ ) {
            var item = x.item(i);
            inputValues.voterCredentials[item.name] = item.value;
        }

        // Get values
        const enteredId = inputValues.voterCredentials["id"];
        const enteredToken = inputValues.voterCredentials["token"];
        const enteredFName = inputValues.voterCredentials["fName"];
        const enteredLName = inputValues.voterCredentials["lName"];
        const enteredBDay = inputValues.voterCredentials["Birthdate"];

        // Validate that the user has entered all information
        if (!enteredId || !enteredToken || !enteredFName || !enteredLName || !enteredBDay) 
            accessGranted = false; 

        // If user entered the required info
        accessGranted ? approval() : reEnterInfo();

    })
};


// var votedCandidates = login();
