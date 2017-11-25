var inputValues = {
    votes : {},
    voterCredentials : {},
};

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

// Function that returns an alert to user that the info is not correct
var notApproved = function() {
    alert("Info does not match");  
}

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

function login() {

        let validatedForm = false; 
        
        var callbackCount = 0;
        // Manually enter test data correctInfo or incorrectInfo
        //correctInfo();

        // Get elements entered by user
        var x = document.getElementById("login").elements;

        for( var i=0 ; i < x.length ; i++ ) {
            var item = x.item(i);

            inputValues.voterCredentials[item.name] = item.value;
        }

        validatedForm = approval(); // Validate that the info was correct

        if (!validatedForm)
            notApproved();
        
        return validatedForm;
    
};

