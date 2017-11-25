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

/*
var req = new XMLHttpRequest();

        // call the ballot page and send credentials so we know which ballot to load
        req.open('POST', 'voter/ballot', true);

        //req.setRequestHeader('Content-Type', 'application/json');

        req.addEventListener('load',function(){ 
            if(req.status >= 200 && req.status < 400){
                //var response = JSON.parse(req.responseText);

                console.log("HERE");
                //console.log("RESPONSE: " + response);
                //var response = JSON.parse(req.responseText);
                //var response = req.responseText;
                //console.log(response);

                //var response = req;
                //console.log(response);

                //window.location = "/voter/ballot";

            }
            else {
                console.log("Error in network request: " + req.statusText);
        }});

        console.log(JSON.stringify(payload));
        console.log(payload);

        req.send(payload);
        event.preventDefault();
*/