# e-voting
Project for CS 361 Group 3 Fall 2017

Create a new virtual server 
( I just hit next after selecting and naming my vm, next, next, next) 


- Upon installation choose a username and password to remember

you will be asked to restart to launch 

- before starting up to access make sure your network settings are set to 

  `attached to: Bridged Adapter`

- once relaunched, open the terminal inside ubuntu.  
  - I do this by clicking the top left graphic icon and typing in ‘terminal’
  - if launching your vm doesn’t open the graphical interface, it should just be the terminal automatically.  Will prompt for your user name and password. 
- run apt-get install openssh-server
  - this will allow us to ssh into this server
- run ifconfig to get your ifnet addr 
  - mine was `10.0.0.2`  yours will be different 

in your normal terminal shell run 
`ssh 10.0.0.2` (or whateer was your ifnet addr) 
You’ll be promted for your password. 

now you are logged into ubuntu and we develop together with the same OS!

I would create a folder here called /repos to store your repos. 

`npm install` to install environment dependencies  
(there are only two things in the package.json folder now) 

Now we can install postgres

Database: 

Install Portgres 9.6


    sudo apt-get install postgresql-9.6

If this doesnt work for you, drop the `-9.6` and follow documentation here:  Sometimes it is difficult to install 9.6, I’ve had to follow the special instructions below every time I installed running a vm on windows and a wm on mac. Probably just an ubuntu thing. 
https://www.postgresql.org/download/linux/ubuntu/

Create a user and give CREATEDB role 
`$ sudo su - postgres`
`$ psql`
`# CREATEUSER evoting WITH PASSWORD` `'``dev``'``;`
`# ALTER USER evoting WITH CREATEDB;`
`# \q` 
`$ exit`

Create a Database

 `$ psql -U evoting -h localhost -d postgres`
 `> CREATE DATABASE evoting;` 
 `> \q` 

Now you have a test instance of a database named ‘evoting’ with user name ‘evoting’ and password ‘dev’.  This will be used for testing. If anything it will just be used for practicing locally with something named the same as our main database, 
