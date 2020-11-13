var fname = document.getElementById('fname');
var friend = document.getElementById('character');
var submit = document.querySelector('.submit');
var final = document.querySelector('.story');
 
var hero = fname.value;
var sec = friend.value;
if(document.getElementById("Mumbai").checked){
    var city = "Mumbai";
}
if(document.getElementById("Bangalore").checked){
    var city = "Bangalore";
}
if(document.getElementById("Delhi").checked){
    var city = "Delhi";
}

 var story1 ="Long long ago,there lived "+hero+" in "+city+" . "+hero+" and "+sec+" were best friends since childhood. But there was a small misunderstandingbetween them regarding a competition in their school."+sec+" became prey to ego and denied tosort things." ;
 if(document.getElementById("happy").checked){
     var story2 = "But "+hero+" on the other hand spoke to "+sec+" about the rivalry which was growing and cleared things and cleared things between them.";
     var story = story1.concat(story2);
 }
 if(document.getElementById("sad").checked){
     var story3 =""+hero+ "was also on the same path amd deneid to clear the air and both of them paved to the wrath to grow and lost their precious bond."
     var story = story1.concat(story3);
 }
 //submit.addEventListener('click', result);
 function result(){
    final.textContent = story;
    final.style.visibility = 'visible';
   

 }
 