var a = 0;
function timesOver(){
    a++;
    document.getElementById("mcount").innerHTML = a;
}


function postClick(){

    var d = new Date();
    var t = document.getElementsByClassName("post-time");
    var pc = document.getElementsByClassName("post-content");
    t.innerText = d;


}