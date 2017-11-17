

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

document.getElementById("voterName").innerHTML = voter.fName + ' ' + voter.lName;
document.getElementById("voterAddress").innerHTML = voter.address;
document.getElementById("voterAuthToken").innerHTML = voter.authToken;

document.getElementById("Ofc1").innerHTML = ballot.Ofc1;

document.getElementById("Ofc1Cnd1").innerHTML = ballot.Ofc1Cnd1;
document.getElementById("Ofc1Cnd2").innerHTML = ballot.Ofc1Cnd2;

function test() {
    
    console.log(document.getElementById("postBallot").elements.value);
};
