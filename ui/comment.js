//Submit a comment

var commentBtn = document.getElementById('comment_btn');

if (comment_btn !== undefined) {
commentBtn.onclick = function (){
   var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    

    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var comments = request.responseText;
                comments = JSON.parse(comments);
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

};

}
