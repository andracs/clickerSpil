

# En NodeJS/Express applikation med SQlite database og Sequelize ORM

Et spil, som viser flere koncepter indenfor JS-programmering på bpde frontend og backend:

1. Cookies
3. Backend - Persistens med SQlite
4. Backend - Brug af ORM'en sequelize - med migrations
5. Frontend - Web Workers
6. Frontend - Fetch API


<img src="https://raw.githubusercontent.com/andracs/clickerSpil/master/public/images/Gr%C3%B8nsagskliker.png" alt="Screenshot" style="max-width:200px;"/>


## Disse kommandoer har jeg brugt for at skabe et NodeJS/Express projekt

`mkdir clickerSpil` 
Laver mappen til projektet 

`express --git -e clickerSpil/`
Installerer express i mappen (--git tilføjer .gitignore, og -e bruger [EJS](https://ejs.co/) Embedded Javascript Templates som template engine i stedet for PUG)

`npm install`
Installerer packages (dependencies)

`npm start`
Så kan jeg se, at express virker på http://localhost:3000

`npm install -g nodemon`
Denne skal du kun køre, hvis ikke du har nodemon installeret

`nodemon bin/www`
Nodemon kan bruges i stedet for npm start, den genstarter serveren hver gang jeg gemmer en fil. Lækkert :-)

### Jeg har valgt at køre med sqlite og ORM'en sequelize, samt migrations

Jeg vil generelt bruge denne GUI for at arbejde med databasen: https://sqlitebrowser.org/dl/ 

`npm install --save sqlite3`
Installerer sqlite3 - en filbaseret SQL database

`npm install --save sequelize`
Installerer ORM'en sequelize (ORM = Object Relational Mapper)

`npm install --save-dev sequelize-cli`
Installerer en CLI som bruges til at køre de følgende sequelize kommandoer

`sequelize-cli init` 
Laver mapperne config, models, migrations, seeders. Du kan læse mere om det på https://sequelize.org/master/manual/migrations.html 

`npx sequelize-cli model:generate --name Spil --attributes name:string,gulerod:integer,cash:integer,maskiner:integer`
Genererer model og migration for Spil-objekter

`npx sequelize-cli db:migrate`
Kører migration, dvs. skaber Spils tabellen i databasen. Tilføj --debug efter kommandoen, hvis du får fejl. 

`npx sequelize-cli db:migrate:undo:all`
Med denne kommando kan du rulle migration tilbage, og slette alle tabeller

`npx sequelize-cli seed:generate --name demo-spil`
Seeding er at fylde databasen med initial data. Denne kommando laver en seeder-fil i seeder-mappen, som du skal fylde dummy-data i. 

`npx sequelize-cli db:seed:all`
Denne kører seedingprocessen, og fylder dummydata i tabellen. Tilføj --debug efter kommandoen, hvis du får fejl. 

## Interessant
- Data binding med DOM
https://stackoverflow.com/questions/16483560/how-to-implement-dom-data-binding-in-javascript
