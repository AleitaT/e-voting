// After DOM is loaded implement function
document.addEventListener('DOMContentLoaded', getBallotInfo);
document.addEventListener('DOMContentLoaded', displayInformation);

function displayInformation(){
    document.getElementById('postBallot').style.display = "none";
    document.getElementById('userVoted').style.display = "none";
}

// function will check if user has 
function getBallotInfo() {
    var req = new XMLHttpRequest();

    // Get information for the election
    req.open('GET', '/electionInfo', true);

    req.addEventListener('load',function(){ 
        if(req.status >= 200 && req.status < 400){
            let response = JSON.parse(req.responseText);
            
            let token = document.getElementById("voterAuthToken").textContent;
            console.log("token ", token);
            let numvoters = response.voters.length;

            // Used to validate whether the user has voted 
            let hasVoted = 0; 

            // Check whether the user has voted
            for (let i = 0; i < numvoters; i++) {
                if (response.voters[i].token == token)
                    hasVoted = response.voters[i].hasVoted;
                    console.log("hasVoted ", hasVoted);
                    break;
            }

            if (!hasVoted) { // If user has not voted then display ballot

                // Display ballot
                document.getElementById('postBallot').style.display = "block";
                //let ballot = document.getElementById("postBallot");
                //ballot.setAttribute("display", "block");

                let payload = 1;
                payload += "&token=" + token;

                /* TODO: USED TO CHANGE hasVOTED to TRUE */
                /*
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
                */
            }
            else // User has already voted; Display a response stating that their ballot has already been submitted
                document.getElementById('userVoted').style.display = "block";
        }
        else {
            console.log("Error in network request: " + req.statusText);
    }});

    req.send(null);
}

//getBallotInfo();
