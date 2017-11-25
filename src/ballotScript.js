document.addEventListener('DOMContentLoaded', getBallotInfo);


let titles = {
    positions : {},
    count: 0
};

function getBallotInfo() {
    var req = new XMLHttpRequest();

    // call the ballot page and send credentials so we know which ballot to load
    req.open('GET', '/electionInfo', true);


    req.addEventListener('load',function(){ 
        if(req.status >= 200 && req.status < 400){
            let response = JSON.parse(req.responseText);

            // Information from the ballot database (db.json)
            let candidates = response.elections.offices.candidates;
            let numCandidates = response.elections.offices.candidates.length;
            
            // Used to get the correct user's address
            let address = "";
            let token = document.getElementById("voterAuthToken").textContent;
            let numvoters = response.voters.length;

            // Get the address of the user
            for (let i = 0; i < numvoters; i++) {
                if (response.voters[i].personal.token = token) {
                    address = response.voters[i].details.address + " ";
                    address += response.voters[i].details.addressStreet + ", ";
                    if (response.voters[i].details.addressAptNum != "")
                        address += "#" + response.voters[i].details.addressAptNum + " ";
                    address += response.voters[i].details.city + ", ";
                    address += response.voters[i].details.state + ", ";
                    address += response.voters[i].details.postalCode;
                }
            }

            addAdress = document.getElementById("voterAddress");
            addAdress.textContent = address;

            // Somehow add info into the page
            createBallot(candidates, numCandidates);


        }
        else {
            console.log("Error in network request: " + req.statusText);
    }});

    req.send(null);
}

// I was going to use DOM manipulation to add information into the ballot page
function createBallot(candidates, length){
    let ballot = document.getElementById("ballotInfo");

    let newDiv = document.createElement("div");

    let newHeader = document.createElement("h3");

    let newLabel = document.createElement("label");
}
