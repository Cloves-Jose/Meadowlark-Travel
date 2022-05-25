const express = require('express')
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const app = express()

//configura o view engine Handlbars
const handlebars = require('express-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000



app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(express.static(__dirname + '/public'))

//página 404 personalizada
app.use(handlers.notFound)

//página 500 personalizada
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port};` 
    + `press Ctrl-C to teminate.`
))