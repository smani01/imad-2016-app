var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'smani01',
    database:'smani01',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));


function createTemplate(data) {
    var title = data.title;
    var date  = data.date;
    var heading = data.heading;
    var content = data.content;
    var Usercomments = data.Usercomments;

        var htmlTemplate=
            `<html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />  
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body class="container-article">
             <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                   ${date.toDateString()}
                </div>
                <div>
                   ${content}
                </div>
                <br>
                <br>
                <hr>
           </div>
             <label>Enter comments below</label></br>
             <textarea name='comment' id='comment'></textarea><br />
              <input type="submit" id="comment_btn" value="Submit" class="btn btn-warning"></input>
              <hr>
              <p>Comments :<br>
                <span id="comments"></span>
              </p>
              
        </div>
            </body>
            <script type="text/javascript" src="/ui/comment.js">
        </script>
        </html>
        `;
  return htmlTemplate;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    //make a select request
    //return response with the results
 pool.query('SELECT * FROM article',function(err,result){
     if (err){
     res.status(500).send(err.toString());
     }
     else{
     res.send(JSON.stringify(result.rows));
     }
 });
});


app.get('/ui/Sree.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Sree.jpg'));
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

var comments=[];
app.get('/submit_comment',function(req,res){
    //to get the comments
 var comment=req.query.comment;
 comments.push(comment);
 res.send(JSON.stringify(comments));

    //to render those comments on the page
});




app.get('/articles/:articleName', function (req, res) {
    //articlename=article-one
    //articles[articleName]={} content for the article one
    var articleName = req.params.articleName;
    
    pool.query("SELECT * FROM article where title = $1", [req.params.articleName], function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            if (result.rows.lenght === 0){
                res.status(404).send('Article not found');
            } else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/comment.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comment.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
