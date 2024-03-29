const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const {fridges,users, ingredients,fridge_ingredients} = require('./models');
const controllers = require("./controllers");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;

const app = express();

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        getShortComment(comment) {
            if (comment.length < 64) {
                return comment;
            }

            return comment.substring(0, 64) + '...';
        }
    }
}));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(controllers);
app.get('/', function (req, res) {
    res.render('home', {
        recipes: [
            {
                recipeauthor: 'Recipe Author',
                image: 'https://picsum.photos/500/500',
                comments: [
                    'This is the first comment',
                    'This is the second comment',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
                ]
            }, 
            {
                author: 'Recipe Author',
                image: 'https://picsum.photos/500/500?2',
                comments: [
                ]
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });