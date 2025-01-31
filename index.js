function loadPage() {
    window.location = "galary.html";
}



// function myFunction(){
//     let Response = document.getElementById("comment").value;
//     document.getElementById("comment-p").innerHTML = "Hello";
// }
// function clear() {
//     if 
// }

function myFunction() {
    
    username = document.getElementById("comment").value;

    document.getElementById("comment-p").innerHTML = "Anonymous: ".bold() + username;
}
