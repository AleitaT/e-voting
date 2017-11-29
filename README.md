# E voting Node.js Express and Pug Web / Mobile Application

## Setup 

Requires Node.js 6.x 

For those of you installing on your VM follow these instructions.  For those of you running on the school server, you cannot sudo and shouldn't need to.  Resort to the instructions from 290 for installing the proper version of node if you get stuck. 

	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs

### Services set up 

	$ npm install 

If any depencies do not install upon running npm install please edit the package.json to be effective for additional developers. 

# Building and deploying the program

## Build

We use sass to produce our CSS templates. Run the following command to compile your sass files. 

	$ make build


## Running the service 

### Runnin on your local server:

	$ node server.js

Will make your dev environment available at: 
	
	<youripaddress>:33369

### Running on flip server: 

	$ node server.js
	$ node server.js forever (if you want to keep running)

Will make your dev environment avaialble at: 

	$ <flip#>.engr.oregonstate.edu:33369

### Viewing the instance

You must be VPN'd to the school server using your onid id and password, in order to view the address beginning with 'engr' or 'flip'.  



