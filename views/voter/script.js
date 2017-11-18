

var voter = {
    authToken: "0111US890",
    address: "2500 Monroe Avenue, Corvallis, Oregon",
    fName: "Rini",
    lName: "Chatterjee"
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


};


// var votedCandidates = login();
