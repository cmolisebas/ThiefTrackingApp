var app = require('express')(); // Create an instance of an Express app
var mobileApp = mobileApp = require('azure-mobile-apps')({
    data: {
        provider: 'mssql',
        server: 'cmolisebas.database.windows.net',
        database: 'thieftracking_db',
        user: 'cmolisebas',
        password: 's3b4st14n.2019'
    }
}); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings
mobileApp.tables.add('Users');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
