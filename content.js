console.log("Chrome extension ready to go!");


var list = document.getElementsByClassName("okam-each-ad");

var i;
for(i=0;i<list.length;i++){
    list[i].style.display = "none";
    console.log ("one ad hidden");
}

// var i ;
// for (i = 0; i<=10000; i++){
//     document.getElementById("okam-ad-"+i).style.display = "none";
//     console.log ("ad"+ i + " hidden")
// }

