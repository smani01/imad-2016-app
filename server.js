var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'Article-One': {
        title: 'Article One | Sreedivya',
            heading: 'Article One',
            date:'Sep 5, 2016',
            content: `<p>
                         This is the content of my first article.This is the content of my first article.This is the content of my first article.
                         This is the content of my first article.This is the content of my first article.
                    </p>
                    <p>
                         This is the content of my first article.This is the content of my first article.This is the content of my first article.
                         This is the content of my first article.This is the content of my first article.
                    </p>
                    <p>
                         This is the content of my first article.This is the content of my first article.This is the content of my first article.
                         This is the content of my first article.This is the content of my first article.
                    </p>`
},
    'Article-Two': {
        title: 'Article Two | Sreedivya',
        heading: 'Article Two',
        date:'Sep 10, 2016',
        content: `<p>
                 This is the content of my first article.This is the content of my first article.This is the content of my first article.
                 This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                 This is the content of my first article.This is the content of my first article.This is the content of my first article.
                 This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                 This is the content of my first article.This is the content of my first article.This is the content of my first article.
                 This is the content of my first article.This is the content of my first article.
            </p>`
},
    'Article-Three': {
        title: 'Article Three | Sreedivya',
        heading: 'Article Three',
        date:'Sep 15, 2016',
        content: `<p>
        <a href="/">Home</a>
        
        <div class="center">
                 Let's get in touch.
        </div>
        <div id="contactbar">
            <ul>
            <li><a href="https://twitter.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_540,w_720/svvszaufolhr4jkwl7vz.jpg" sizes="160px"> </a></li>
            <li><a href="https://twitter.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_540,w_720/svvszaufolhr4jkwl7vz.jpg"> </a></li>
            <li><a href="https://twitter.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_540,w_720/svvszaufolhr4jkwl7vz.jpg"> </a></li>
            <li><a href="https://twitter.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_540,w_720/svvszaufolhr4jkwl7vz.jpg"> </a></li>
        </div> 
            </p>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var date  = data.date;
    var heading = data.heading;
    var content = data.content;

        var htmlTemplate=
            `<html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />  
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
             <div class="container-articles">
                
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                   ${date}
                </div>
                <div>
                   ${content}
                </div>
             
            </body>
        </html>
        `;
  return htmlTemplate;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/BI1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'BI1.jpg'));
});


var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function (req, res) { //URL:/submit-name?name=xxxx
    var name=req.query.name; // 1000
    
    names.push(name);
    //JSON - Javascript Object Notation
    
    res.send(JSON.stringify(names)); 
    
});

app.get('/:articleName', function (req, res) {
    //articlename=article-one
    //articles[articleName]={} content for the article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});    

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
