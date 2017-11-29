var inputValues = {
    votes : {},
    voterCredentials : {},
};

/*
var voter = {	
	voterID: "ID_9247547",
    	token: "0111US890",
   	address: "2500 Monroe Avenue, Corvallis, Oregon",
   	fName: "Rini",
    	lName: "Chatterjee",
	Birthdate: "1967-04-12"	
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
*/

// Manually enter test data correctInfo or incorrectInfo
correctInfo();

// Function that returns an alert to user that the info is not correct
var notApproved = function() {
    alert("Invalid User Credentials");
}

//source:   https://stackoverflow.com/questions/18212347/javascript-how-to-tell-if-event-preventdefault-has-occurred-on-a-listener
//var theEventPreventDefaultHandler = function (event) {
  //  event.preventDefault();
//};

/*
var approval = function() {

    // Used for storing validation
    var approvalToken = false;
    
    // Check credentials to see if they match
    var thisVoter = inputValues.voterCredentials;
    
    if((thisVoter.fName == voter.fName) && (thisVoter.lName == voter.lName) && (thisVoter.Birthdate == voter.Birthdate) && (thisVoter.token == voter.token)) {
        approvalToken = true;
	} else {
	    approvalToken = false; 
	}

    return approvalToken;

}
*/

function login() {

<<<<<<< HEAD
        let validatedForm = false; 
=======
        var validatedForm = true;
        
        var callbackCount = 0;
        // Manually enter test data correctInfo or incorrectInfo
        //correctInfo();
>>>>>>> development

        // Get elements entered by user
        var x = document.getElementById("login").elements;

        for( var i=0 ; i < x.length ; i++ ) {
            var item = x.item(i);

            inputValues.voterCredentials[item.name] = item.value;
        }
        var req = new XMLHttpRequest();
        //var name = {first:null, last:null};
        //name.first = document.getElementById('first').value;
        //name.last = document.getElementById('last').value;
        req.open('POST', '/voterVerify', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function () {
            if(req.status >= 200 && req.status <= 400) {
                var response = JSON.parse(req.response);
                //document.getElementById('response').innerHTML = response;
                console.log(response);
                if(response) {
                    validatedForm = true;
                    return validatedForm;
                    //goToBallot(response);
                }
                else{
                    validatedForm = false;
                    notApproved();
                    return validatedForm;
                    //var button = document.getElementById("submitLogin");
                    //button.addEventListener("click", theEventPreventDefaultHandler);
                }
            } else {
                console.log('Error in network request: ' + req.statusText);
            }
        });
        //console.log("JSON.stringify(inputValues.voterCredentials: ", JSON.stringify(inputValues.voterCredentials));
        req.send(JSON.stringify(inputValues.voterCredentials));
        //event.preventDefault();
        //notApproved();


        //validatedForm = approval(); // Validate that the info was correct

};


