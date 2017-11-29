document.addEventListener('DOMContentLoaded', getBallotInfo);

$(document).ready(
    function () {
        document.getElementById('postBallot').style.display = "none";
        document.getElementById('userVoted').style.display = "none";
    });

// Get information from the ballot to display the user's a
function getBallotInfo() {
    var req = new XMLHttpRequest();

    // call the ballot page and send credentials so we know which ballot to load
    req.open('GET', '/electionInfo', true);

    req.addEventListener('load',function(){ 
        if(req.status >= 200 && req.status < 400){
            let response = JSON.parse(req.responseText);

            console.log(response);
            
            // Used to get the correct user's address
            let address = "";
            let token = document.getElementById("voterAuthToken").textContent;
            let numvoters = response.voters.length;

            // Used to validate whether the user has voted 
            let hasVoted = 0; 

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

                    hasVoted = response.voters[i].ballot.hasVoted;
                }
            }

            // Display user's address 
            let addAddress = document.getElementById("voterAddress");
            addAddress.textContent = address;

            if (!hasVoted) { // If user has not voted then display ballot

                // Display ballot
                document.getElementById('postBallot').style.display = "block";

                let payload = 1;
                payload += "&token=" + token;

                console.log("Payload: " + payload);

                var newReq = new XMLHttpRequest();
                
                // Send reponse that the user has already voted
                newReq.open('GET', '/hasVoted?voted=' + payload, true);
            
                newReq.addEventListener('load',function(){ 
                    if(newReq.status >= 200 && newReq.status < 400){
                        //let newResponse = JSON.parse(newReq.responseText);

                        //console.log("New Response: " + newResponse);
                    }
                    else {
                        console.log("Error in network request: " + newReq.statusText);
                    }
                });
                
                newReq.send(null);

            }
            else // User has already voted; Display a response stating that their ballot has already been submitted
                document.getElementById('userVoted').style.display = "block";
        }
        else {
            console.log("Error in network request: " + req.statusText);
    }});

    req.send(null);
}

