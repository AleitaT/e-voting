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
    voterCredentials : {}
};

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
    
    // If user entered the required info
    //approvalToken ? location.href = "/voter/ballot" : (alert("Info does not match");

    if (approvalToken) { 

        // manually put address
        thisVoter.address = "2500 Monroe Avenue, Corvallis, Oregon";

        let passInfo = "voterName=" + thisVoter.fName + " " + thisVoter.lName;
            passInfo += "&voterAddress=" + thisVoter.address;
            passInfo += "&voterAuthToken=" + thisVoter.token;

        var payload  = {
            id: thisVoter.id,
            fName: thisVoter.fName,
            lName: thisVoter.lName,
            bDay: thisVoter.Birthdate,
            token: thisVoter.token,
            address: thisVoter.address
        };

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
   
    //document.getElementById('submitLogin').addEventListener('click', function(event) {

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
        const enteredValues = {
            userId: inputValues.voterCredentials["id"],
            userToken: inputValues.voterCredentials["token"],
            userFName: inputValues.voterCredentials["fName"],
            userLName: inputValues.voterCredentials["lName"],
            userBDay: inputValues.voterCredentials["Birthdate"]
        };

        // Validate that the user has entered all information
        if (!enteredValues.userId || !enteredValues.userToken || !enteredValues.userFName || !enteredValues.userLName || !enteredValues.userBDay) 
            accessGranted = false; 

        // If user entered the required info
     //   accessGranted ? approval() : reEnterInfo();
     //   event.preventDefault();
     //})
};



