var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    Blog: {
        title: 'Blog | Sreedivya',
            heading: 'BLOG',
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
                    </p>`,
                    Usercomments:`<p>
            <div class="footer">
            <Button Id="counter">Likes</Button> <span id="count">0</span>
            <br>
            <br>
             
           <input type="text" id="Comments" placeholder="Enter your comments.." >
           <input type="submit" value="Submit" id="submit_btn">
           <ul id="namelist">
           </ul>
           </div>
           </p>`
                    
},
    About: {
        title: 'About | Sreedivya',
        heading: 'ABOUT',
        date:'Sep 10, 2016',
        content: `<p>
                 Hello ! Hello !! And Welcome !!!
                 HI, I'M SREEDIVYA.  *BIG WAVE*
                 
                 SO PLEASED YOU HAVE STOPPED BY.
            </p>
            <p>
                 Let me first introduce myself to you. Name - "Sreedivya". Friends call me "Sree" and my family calls me "Divya". I live in UAE with my husband and my darling son who just celebrated his first birthday. I had been working as a software Engineer in the IT industry for 7 + years as a System Analyst in Chennai and Trivandrum before I moved to UAE. I took my Bachelors degree and did my schooling in Kerala.
            </p>
            <p>
                 Although my hobbies have changed over the years, my passion for cooking, interest in learning something new, love for music have remained the same and are growing. I am happy to stay being CRAFTY, LOVABLE, SYSTEMATIC and HUNGRY.
                 So, here it is - My first blog. A fresh start. A new beginning. A creative space where I can jot down my ideas and share my thoughts.
            </p>
            <p>
                And all kudos to the Team "IMAD" for their training in building this web application. I am a beginner and look forward to enhance my learning and continue blogging on my interests here. Also, a word of Thanks would not be just enough to appreciate my best buddy Sabi ( Sabeena Sudheer) who introduced me to this course on building our won web application from scratch. It had been fun to learn and share experiences.
            </p>
            <p>
                I am hoping to make this an interactive place where readers can come to share their thoughts on my stories. You can let me know what you liked, what you did not, or what you might be interested in seeing here in future.
                Thank You for swinging by my blog. And pop back again soon. Bye !!
                <br>
                <br>
                Cheers..
                Sreedivya
            </p>`,
            Usercomments:`<p>
            <div class="footer">
            <Button Id="counter">Likes</Button> <span id="count">0</span>
            <br>
            <br>
             
           <input type="text" id="Comments" placeholder="Enter your comments.." >
           <input type="submit" value="Submit" id="submit_btn">
           <ul id="namelist">
           </ul>
           </div>
           </p>`
            
},
    Contact: {
        title: 'Contact | Sreedivya',
        heading: 'CONTACT',
        date:'Sep 15,2016',
        content: `<p>
    
        
        <div class="center">
                 Let's get in touch.
        </div>
        <div id="contactbar">
            <ul>
            <li><a href="https://twitter.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_200,w_200/vwsyto07zvpeqzfb46qt.jpg" sizes=auto> </a></li>
            <li><a href="mailto:sreedivyanambiar@gmail.com" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_200,w_200/uqevk04zbiwggntoit6f.jpg" sizes=auto> </a></li>
            <li><a href="https://github.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_200,w_200/p3ibcbzwtfpgy3h4ltjl.jpg" sizes=auto> </a></li>
            <li><a href="https://twitter.com/smani01/" target="_blank"> <img src ="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_200,w_200/svvszaufolhr4jkwl7vz.jpg" sizes=auto> </a></li>
        </div> 
            </p>`,
            Usercomments:`<p>
            <div class="footer">
            <Button id="counter"> Like </Button><span id="count">0</span> like this.
            <br>
            <br>
            <fieldset>
            <legend>Comment:</legend>
            First name:<br>
            <input type="text" name="firstname"><br>
            Last name:<br>
            <input type="text" name="lastname"><br>
            <br>
           <input type="text" id="Comments" placeholder="Enter your comments.." ><br>
           <br>
           <input type="submit" value="Submit" id="submit_btn">
           <ul id="namelist">
           </ul>
           </fieldset>
           </div>
           </p>`
    }
};

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
            <body class=container-article>
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
                <br>
                <br>
                <hr>
                <div>
                   ${Usercomments}
                        <script type="text/javascript" src="/ui/main.js">
        </script>
                </div>
            </body>
        </html>
        `;
  return htmlTemplate;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
