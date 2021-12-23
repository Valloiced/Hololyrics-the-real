const sub = [".kanji", ".eng", ".roman"]
const addClass = ["kanji", "eng", "roman"]
const font = ["left", "center"]

$(document).ready(function(){
//language checker
for(let i = 0; i < sub.length; i++){
    if($(sub[i]).length){
        console.log("haha let's go, it exist")
     }
    else {
        let hent = addClass[i]
        $("#lyrics").append("<p class="+hent+">There is no translation to this language yet. Check the other translations</p>")
    }
}

//language
    for(let i = 0; i < sub.length; i++){
        $(sub[i]).hide()
    }
    $(sub[0]).show();
})




//language
$("#lang").change(function(){
    for(let i = 0; i < sub.length; i++){
        $(sub[i]).hide()
    }
    $(sub[this.value]).show()
})

//align 
$("#align").change(function(){
    $("#lyrics").css('text-align', font[this.value])
})

//font
function addFont() {
    $(".fo").css("font-size", "+=1");
}

function lessFont() {
    $(".fo").css("font-size", "-=1");
}




