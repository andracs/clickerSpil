

## Disse kommandoer har jeg brugt for at skabe projektet med (bolieprlate)

`mkdir clickerSpil` 
Laver mappen til projektet 

`express clickerSpil`
Installerer express i mappen

`npm install`
Installerer packages (dependencies)

`npm start`
Så kan jeg se, at express virker på http://localhost:3000

`npm install -g nodemon`
Denne skal du kun køre, hvis ikke du har nodemon installeret

`nodemon bin/www`
Nodemon kan bruges i stedet for npm start, den genstarter serveren hver gang jeg gemmer en fil. Lækkert :-)

### Jeg har valgt at køre med sqlite og ORM'en sequelize, samt migrations

`npm install --save sqlite3`
Installerer sqlite3 - en filbaseret SQL database

`npm install --save sequelize`
Installerer ORM'en sequelize (ORM = Object Relational Mapper)

`npm install --save-dev sequelize-cli`
Installerer en CLI som bruges til at køre de følgende sequelize kommandoer

`sequelize-cli init` 
Laver mapperne config, models, migrations, seeders. Du kan læse mere om det på https://sequelize.org/master/manual/migrations.html 





`




## Interessant
- Data binding med DOM
https://stackoverflow.com/questions/16483560/how-to-implement-dom-data-binding-in-javascript
