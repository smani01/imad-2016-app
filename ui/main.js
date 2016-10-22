var button = document.getElementById('counter');

if (button !== undefined) {
button.onclick = function() {
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet 
    };
    //make the request
    request.open('GET','http://smani01.imad.hasura-app.io/counter',true);
    request.send(null);
};
}

//Submit name

var submit = document.getElementById('submit_btn');

if (submit !== undefined) {
submit.onclick = function() {
  //Make a request to the server and send the name
     var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200){
                var names = request.responseText;
                names=JSON.parse(names);
                var list = '';
                for (var i=0;i < names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        //Not done yet 
    };
    //make the request
    var nameInput = document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://smani01.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
};
}

//Submit a comment

var subcomment = document.getElementById('submit_cmnt');

if (subcomment !== undefined) {
subcomment.onclick = function(){
  //Make a request to the server and send the name
     var request1 = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request1.onreadystatechange = function(){
        if (request1.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request1.status === 200){
                var comments = request1.responseText;
                comments = JSON.parse(comments);
                 list_cmnt = '';
                for (var j=0;j < comments.length; j++){
                    list_cmnt += '<li>' + comments[j] + '</li>';
                }
                var ul1 = document.getElementById('commentlist');
                ul1.innerHTML = list_cmnt;
            }
        }
        //Not done yet 
               
    };
    //make the request
    var commentInput = document.getElementById('comment');
    var comment=commentInput.value;
    request1.open('GET','http://smani01.imad.hasura-app.io/submit-comment?comment=' + comment,true);
    request1.send(null);
    
};

}
