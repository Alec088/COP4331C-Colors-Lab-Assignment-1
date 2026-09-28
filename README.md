# COP4331C Colors Lab Assignment 1
## -- Description --
The Colors Application allows you to log into user accounts and add colors to the accounts that are stored with them. It also allows for searching through the colors already added to the current user account that you are logged into.

## -- Technologies Used --
- DigitalOcean
- GoDaddy
- PuTTY
- MySQL
- Swagger
- FileZilla
- LAMP Stack Folder: Files for API, Frontend, and Backend.

## -- Setup And Run Instructions --

Step 1:

Create a LAMP Stack server on DigitalOcean, then connect it using a domain name that can be gotten from domain services such as GoDaddy and set the DNS Host to be the Public IP Address of the server. Make sure to have it use a password instead of SSH to access the root of the server.

Step 2:

Connect to the DigitalOcean server by connecting to the server using PuTTY which just requires the Public IP Address of the server as well as the root username and password created along with the server.

Step 3:

Using PuTTY after connecting to the server, upload each file from the "LAMP Stack" folder using the same file structure that the folder uses into the html server directory (/var/www/html which you can use the command cd /var/www/html to get to) as well as moving the files inside of "public" out into the html server directory, you can discard the "public" folder after that. Make sure to change the server link located in the code.js file (LAMP Stack/public/js/code.js) where there is a urlBase constant at the top that has the server link.

Step 4:

Continuing using PuTTY, upload each file from the "LAMP Stack" folder using the same file structure that the folder uses into the server using commands such as the "cd" and "put" commands (you can also use FileZilla to upload files quicker by going to "File" and then "Site Manager..." and creating the site with the root username and password, then make sure to go to the html folder at "/var/www/html" before uploading there). Make sure to change the server link located in the code.js file (LAMP Stack/public/js/code.js) where there is a urlBase constant at the top that has the server link. You can also change the  "LAMPAPI" in the link to the name of the "api" folder being used for the Application (in this case it is just "api").

Now you can connect to MySQL on the DigitalOcean server by using the command "mysql -u root -p" and entering the password again to connect to MySQL. Now the database will be created by using the commands in this exact order:
```
create database COP4331;
use COP4331;
CREATE TABLE `COP4331`.`Users` ( `ID` INT NOT NULL AUTO_INCREMENT , `FirstName`
VARCHAR(50) NOT NULL DEFAULT '' , `LastName` VARCHAR(50) NOT NULL DEFAULT '' , `Login`
VARCHAR(50) NOT NULL DEFAULT '' , `Password` VARCHAR(50) NOT NULL DEFAULT '' ,
PRIMARY KEY (`ID`)) ENGINE = InnoDB;
CREATE TABLE `COP4331`.`Colors` ( `ID` INT NOT NULL AUTO_INCREMENT , `Name`
VARCHAR(50) NOT NULL DEFAULT '' , `UserID` INT NOT NULL DEFAULT '0' , PRIMARY KEY
(`ID`)) ENGINE = InnoDB;
```
You will also want to populate the datastore with data using these commands:
```
use COP4331;
insert into Users (FirstName,LastName,Login,Password) VALUES
('Aashish','Yadavally','AYadavally','COP4331');
insert into Users (FirstName,LastName,Login,Password) VALUES ('Sam','Hill','SamH','Test');
insert into Users (FirstName,LastName,Login,Password) VALUES
('Aashish','Yadavally','AYadavally','5832a71366768098cceb7095efb774f2');
insert into Users (FirstName,LastName,Login,Password) VALUES
('Sam','Hill','SamH','0cbc6611f5540bd0809a388dc95a615b');
insert into Colors (Name,UserID) VALUES ('Blue',1);
insert into Colors (Name,UserID) VALUES ('White',1);
insert into Colors (Name,UserID) VALUES ('Black',1);
insert into Colors (Name,UserID) VALUES ('gray',1);
insert into Colors (Name,UserID) VALUES ('Magenta',1);
insert into Colors (Name,UserID) VALUES ('Yellow',1);
insert into Colors (Name,UserID) VALUES ('Cyan',1);
insert into Colors (Name,UserID) VALUES ('Salmon',1);
insert into Colors (Name,UserID) VALUES ('Chartreuse',1);
insert into Colors (Name,UserID) VALUES ('Lime',1);
insert into Colors (Name,UserID) VALUES ('Light Blue',1);
insert into Colors (Name,UserID) VALUES ('Light Gray',1);
insert into Colors (Name,UserID) VALUES ('Light Red',1);
insert into Colors (Name,UserID) VALUES ('Light Green',1);
insert into Colors (Name,UserID) VALUES ('Chiffon',1);
insert into Colors (Name,UserID) VALUES ('Fuscia',1);
insert into Colors (Name,UserID) VALUES ('Brown',1);
insert into Colors (Name,UserID) VALUES ('Beige',1);
insert into Colors (Name,UserID) VALUES ('Blue',3);
insert into Colors (Name,UserID) VALUES ('White',3);
insert into Colors (Name,UserID) VALUES ('Black',3);
insert into Colors (Name,UserID) VALUES ('gray',3);
insert into Colors (Name,UserID) VALUES ('Magenta',3);
insert into Colors (Name,UserID) VALUES ('Yellow',3);
insert into Colors (Name,UserID) VALUES ('Cyan',3);
insert into Colors (Name,UserID) VALUES ('Salmon',3);
insert into Colors (Name,UserID) VALUES ('Chartreuse',3);
insert into Colors (Name,UserID) VALUES ('Lime',3);
insert into Colors (Name,UserID) VALUES ('Light Blue',3);
insert into Colors (Name,UserID) VALUES ('Light Gray',3);
insert into Colors (Name,UserID) VALUES ('Light Red',3);
insert into Colors (Name,UserID) VALUES ('Light Green',3);
insert into Colors (Name,UserID) VALUES ('Chiffon',3);
insert into Colors (Name,UserID) VALUES ('Fuscia',3);
insert into Colors (Name,UserID) VALUES ('Brown',3);
insert into Colors (Name,UserID) VALUES ('Beige',3);
```

Lastly for setting up the database, you will need to make an API user using these commands:
```
use COP4331;
create user 'TheBeast' identified by 'WeLoveCOP4331';
Now we need to grant permissions to the database for that user:
grant all privileges on COP4331.* to 'TheBeast'@'%';
```

Step 5:

For the final step, you can test the API endpoints using Swagger Hub before running it fully, and if everything is fine there, you can now do the main test by going to the website using the domain and testing all of the features such as logging in using the test users added in step 4 to the datastore, searching colors, and adding colors.


## -- Limitations --
- Requires a LAMP Droplet (such as the basic 1 GB Ram 25GB SSD CPU) for server hosting.
- Requires a Domain name to connect to the server.
- Uses SSH to connect to the server through MySQL.
