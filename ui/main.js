var button = document.getElementById('counter');

if (counter !== undefined) {
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

var commentBtn = document.getElementById('comment_btn');
commentBtn.onclick = function (){
   var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    console.log('comment is : ',comment);
    

    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var comments = request.responseText;
                console.log('comments1 is : ',comments);
                comments = JSON.parse(comments);
                console.log('comments is : ',comments);
                var comment_list='';
                for(var i=0;i<comments.length;i++){
                    var t=i+1;
                    comment_list+='<p>'+'comment '+t+': '+comments[i]+'</p>'+ '<hr>' ;
                }
                var commentz = document.getElementById('comments');
                commentz.innerHTML = comment_list;
            }
            
        }

       
    };
   request.open('GET','http://smani01.imad.hasura-app.io/submit_comment?comment='+comment,true);
   request.send(null);

};//button onclick function ends
