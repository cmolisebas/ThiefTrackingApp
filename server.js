

mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings
mobileApp.tables.add('Users');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
