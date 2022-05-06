function show1hide2() {
    document.getElementById("day1").style.display = "block"; document.getElementById("day2").style.display = "none"; document.getElementById("14May").style.textDecoration = "underline"; document.getElementById("15May").style.textDecoration = "none"; document.getElementById("14May").style.color = "#ffffff"; document.getElementById("15May").style.color = "#655E7E";
}
function show2hide1() {
    document.getElementById("day1").style.display = "none"; document.getElementById("day2").style.display = "block"; document.getElementById("14May").style.textDecoration = "none"; document.getElementById("15May").style.textDecoration = "underline"; document.getElementById("14May").style.color = "#655E7E"; document.getElementById("15May").style.color = "#ffffff";
}
/*
showOnlyExhibition()    =>  red_tag" >Exhibition Zone</a>
showOnlyConference()    =>  yel_tag" >Conference Zone</a>
showOnlyWorkshop1()     =>  purple_tag" >Workshop Zone 1</a>
showOnlyWorkshop2()     =>  pink_tag" >Workshop Zone 2</a>
showOnlyExperience()    =>  green_tag" >Experience Zones</a>
showOnlyOutdoors()      =>  blue_tag" >Outdoors</a>
showOnlyAllZone()       =>  white_tag" >All Zone</a>
*/
function showOnlyExhibition(){
    const Red_tags = document.querySelectorAll(".zone_Red");
    for (let i = 0; i < Red_tags.length; i++) { Red_tags[i].style.display = "flex"; }
    const Yellow_tags = document.querySelectorAll(".zone_Yellow");
    for (let i = 0; i < Yellow_tags.length; i++) { Yellow_tags[i].style.display = "none"; }
    const Purple_tags = document.querySelectorAll(".zone_Purple");
    for (let i = 0; i < Purple_tags.length; i++) { Purple_tags[i].style.display = "none"; }
    const Pink_tags = document.querySelectorAll(".zone_Pink");
    for (let i = 0; i < Pink_tags.length; i++) { Pink_tags[i].style.display = "none"; }
    const Blue_tags = document.querySelectorAll(".zone_Blue");
    for (let i = 0; i < Blue_tags.length; i++) { Blue_tags[i].style.display = "none"; }
    const White_tags = document.querySelectorAll(".zone_White");
    for (let i = 0; i < White_tags.length; i++) { White_tags[i].style.display = "none"; }
    document.getElementById('zoneChanger').innerHTML = "Exhibition Zone";
    // document.getElementById('chooseAZone').innerHTML = "Exhibition Zone";
    // document.getElementById('zoneChanger').style.backgroundColor = "#FF4320";
}
function showOnlyConference(){
    const Red_tags = document.querySelectorAll(".zone_Red");
    for (let i = 0; i < Red_tags.length; i++) { Red_tags[i].style.display = "none"; }
    const Yellow_tags = document.querySelectorAll(".zone_Yellow");
    for (let i = 0; i < Yellow_tags.length; i++) { Yellow_tags[i].style.display = "flex"; }
    const Purple_tags = document.querySelectorAll(".zone_Purple");
    for (let i = 0; i < Purple_tags.length; i++) { Purple_tags[i].style.display = "none"; }
    const Pink_tags = document.querySelectorAll(".zone_Pink");
    for (let i = 0; i < Pink_tags.length; i++) { Pink_tags[i].style.display = "none"; }
    const Blue_tags = document.querySelectorAll(".zone_Blue");
    for (let i = 0; i < Blue_tags.length; i++) { Blue_tags[i].style.display = "none"; }
    const White_tags = document.querySelectorAll(".zone_White");
    for (let i = 0; i < White_tags.length; i++) { White_tags[i].style.display = "none"; }
    document.getElementById('zoneChanger').innerHTML = "Conference Zone";
    // document.getElementById('chooseAZone').innerHTML = "Conference Zone";
}
function showOnlyWorkshop1(){
    const Red_tags = document.querySelectorAll(".zone_Red");
    for (let i = 0; i < Red_tags.length; i++) { Red_tags[i].style.display = "none"; }    
    const Yellow_tags = document.querySelectorAll(".zone_Yellow");
    for (let i = 0; i < Yellow_tags.length; i++) { Yellow_tags[i].style.display = "none"; }    
    const Purple_tags = document.querySelectorAll(".zone_Purple");
    for (let i = 0; i < Purple_tags.length; i++) { Purple_tags[i].style.display = "flex"; }    
    const Pink_tags = document.querySelectorAll(".zone_Pink");
    for (let i = 0; i < Pink_tags.length; i++) { Pink_tags[i].style.display = "none"; }    
    const Blue_tags = document.querySelectorAll(".zone_Blue");
    for (let i = 0; i < Blue_tags.length; i++) { Blue_tags[i].style.display = "none"; }    
    const White_tags = document.querySelectorAll(".zone_White");
    for (let i = 0; i < White_tags.length; i++) { White_tags[i].style.display = "none"; }
    document.getElementById('zoneChanger').innerHTML = "Workshop Zone 1";
    // document.getElementById('chooseAZone').innerHTML = "Workshop Zone 1";
}
function showOnlyWorkshop2(){
    const Red_tags = document.querySelectorAll(".zone_Red");
    for (let i = 0; i < Red_tags.length; i++) { Red_tags[i].style.display = "none"; }
    const Yellow_tags = document.querySelectorAll(".zone_Yellow");
    for (let i = 0; i < Yellow_tags.length; i++) { Yellow_tags[i].style.display = "none"; }
    const Purple_tags = document.querySelectorAll(".zone_Purple");
    for (let i = 0; i < Purple_tags.length; i++) { Purple_tags[i].style.display = "none"; }
    const Pink_tags = document.querySelectorAll(".zone_Pink");
    for (let i = 0; i < Pink_tags.length; i++) { Pink_tags[i].style.display = "flex"; }
    const Blue_tags = document.querySelectorAll(".zone_Blue");
    for (let i = 0; i < Blue_tags.length; i++) { Blue_tags[i].style.display = "none"; }
    const White_tags = document.querySelectorAll(".zone_White");
    for (let i = 0; i < White_tags.length; i++) { White_tags[i].style.display = "none"; }
    document.getElementById('zoneChanger').innerHTML = "Workshop Zone 2";
    // document.getElementById('chooseAZone').innerHTML = "Workshop Zone 2";
}

function showOnlyOutdoors(){
    const Red_tags = document.querySelectorAll(".zone_Red");
    for (let i = 0; i < Red_tags.length; i++) { Red_tags[i].style.display = "none"; }
    const Yellow_tags = document.querySelectorAll(".zone_Yellow");
    for (let i = 0; i < Yellow_tags.length; i++) { Yellow_tags[i].style.display = "none"; }
    const Purple_tags = document.querySelectorAll(".zone_Purple");
    for (let i = 0; i < Purple_tags.length; i++) { Purple_tags[i].style.display = "none"; }
    const Pink_tags = document.querySelectorAll(".zone_Pink");
    for (let i = 0; i < Pink_tags.length; i++) { Pink_tags[i].style.display = "none"; }
    const Blue_tags = document.querySelectorAll(".zone_Blue");
    for (let i = 0; i < Blue_tags.length; i++) { Blue_tags[i].style.display = "flex"; }
    const White_tags = document.querySelectorAll(".zone_White");
    for (let i = 0; i < White_tags.length; i++) { White_tags[i].style.display = "none"; }
    document.getElementById('zoneChanger').innerHTML = "Outdoors";
    // document.getElementById('chooseAZone').innerHTML = "Outdoors";
}
function showOnlyAllZone(){
    const Red_tags = document.querySelectorAll(".zone_Red");
    for (let i = 0; i < Red_tags.length; i++) { Red_tags[i].style.display = "flex"; }
    const Yellow_tags = document.querySelectorAll(".zone_Yellow");
    for (let i = 0; i < Yellow_tags.length; i++) { Yellow_tags[i].style.display = "flex"; }
    const Purple_tags = document.querySelectorAll(".zone_Purple");
    for (let i = 0; i < Purple_tags.length; i++) { Purple_tags[i].style.display = "flex"; }
    const Pink_tags = document.querySelectorAll(".zone_Pink");
    for (let i = 0; i < Pink_tags.length; i++) { Pink_tags[i].style.display = "flex"; }
    const Blue_tags = document.querySelectorAll(".zone_Blue");
    for (let i = 0; i < Blue_tags.length; i++) { Blue_tags[i].style.display = "flex"; }
    const White_tags = document.querySelectorAll(".zone_White");
    for (let i = 0; i < White_tags.length; i++) { White_tags[i].style.display = "flex"; }
    document.getElementById('zoneChanger').innerHTML = "Showing All Zones";
    // document.getElementById('chooseAZone').innerHTML = "Showing All Zones";

}