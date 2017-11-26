document.addEventListener('DOMContentLoaded', getBallotInfo);

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

            let addAddress = document.getElementById("voterAddress");
            addAddress.textContent = address;

        }
        else {
            console.log("Error in network request: " + req.statusText);
    }});

    req.send(null);
}

