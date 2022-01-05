$(document).ready(() => {
    let analytics = () => {
        let script = document.createElement("script")
        let head = document.querySelector("head")
        script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-FTDE18TVX4")

        head.appendChild(script)
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FTDE18TVX4');
    }
    analytics()
})





const sleep = (time) => {
    return new Promise(resolve => {setTimeout(resolve, time)})
}

/* Function that adds gen6 to the dropdown*/ 
let addNewGenDropdown = (talents, name, href) => {
    let dropdown = $("#dropdown-content")
    let newList = document.createElement("li")
    let createTalentP = document.createElement("p")
    let createTalentUl = document.createElement("ul")

    for(let j = 0; j < talents.length; j++){
        let createTalentLi = document.createElement("li")  
        let createTalentA = document.createElement("a") 

        createTalentLi.setAttribute("id", talents[j])
        createTalentLi.innerText = name[j]

        createTalentA.appendChild(createTalentLi)
        createTalentA.setAttribute("href", href[j])

        createTalentUl.appendChild(createTalentA)
    }

    createTalentP.innerText = "Gen6"
    createTalentP.setAttribute("id", "subgen6")

    newList.appendChild(createTalentP)
    newList.appendChild(createTalentUl)
    dropdown.append(newList)
}

//If the site is a main page
if($(".genname").length){  
    addNewGenDropdown(["darkness", "takane", "koyori", "sakamata", "iroha"], 
                    ["La+ Darkness", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazuma Iroha"],
                    ["../source/html/talents/darkness/darkness.html", "../source/html/talents/lui/lui.html", "../source/html/talents/koyori/koyori.html", "../source/html/talents/sakamata/sakamata.html", "../source/html/talents/iroha/iroha.html"] )
    console.log("Main Page Dropdown is being used")
}

/* Two regex so that its accurate to compare two bitches for differnt dropdowns */
let test = document.getElementById("dropdown-content").children[1].children[1].children[3].getAttribute("href")
let regex = test.match(/(\.\.\/|\.\.\/\.\.\/)|(talents)/g)
let test2 = document.getElementById("dropdown-content").children[1].children[1].children[2].getAttribute("href")
let regex2 = test2.match(/(\.\.\/|\.\.\/\.\.\/)/g)

//If the site is collab
if(regex[1] == "talents" && !$(".genname").length){
    addNewGenDropdown(["darkness", "takane", "koyori", "sakamata", "iroha"], 
                    ["La+ Darkness", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazuma Iroha"],
                    ["../talents/darkness/darkness.html", "../talents/lui/lui.html", "../talents/koyori/koyori.html", "../talents/sakamata/sakamata.html", "../talents/iroha/iroha.html"] )
    console.log("Collab Page Dropdown is being used")
}

//If the site is a lyrics page
if(regex2.length == 2 || regex.length == 2 && regex[1] != "talents"){
    addNewGenDropdown(["darkness", "takane", "koyori", "sakamata", "iroha"], 
    ["La+ Darkness", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazuma Iroha"],
    ["../../darkness/darkness.html", "../../lui/lui.html", "../../koyori/koyori.html", "../../sakamata/sakamata.html", "../../iroha/iroha.html"] )
    console.log("Lyrics Page Dropdown is being used")
}

//If the site is a talent front page
if(regex.length == 1 && regex2.length == 1){
    addNewGenDropdown(["darkness", "takane", "koyori", "sakamata", "iroha"], 
                  ["La+ Darkness", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazuma Iroha"],
                  ["../darkness/darkness.html", "../lui/lui.html", "../koyori/koyori.html", "../sakamata/sakamata.html", "../iroha/iroha.html"] )
    console.log("Front Page Dropdown is being used")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Function that change the original bg of lyrics page if low resolution*/
let checkResolution = async() => {
    let attr = $("iframe").attr('src')
    const videoId = attr.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
    let bg = $("body").attr('id')

    //Getting the width of the original background
    let idBg = $("#" + bg).css("background").match(/(http|file)(.)*(jpeg|jpg|png)/g).pop()
    let testImage = new Image()
    testImage.src = idBg
    await sleep(100)
    

    //Activating if the original background is in low resolution
    //If low resolution, this function will get the maximum resolution of the video's thumbnail and make this as the new background
    if(videoId.length == 11 && testImage.width < 600){
        let newImage = "url('https://img.youtube.com/vi/"+ videoId +"/maxresdefault.jpg')"
        let url = "https://img.youtube.com/vi/"+ videoId +"/maxresdefault.jpg"
        const imageApi = new Image()
        imageApi.src = url

        imageApi.addEventListener('load',() =>{
            if(imageApi.naturalWidth > 600){
                $("#" + bg).css('background', newImage)
                .css('background-position', 'center')
                .css('background-size', 'cover')
                .css('background-repeat', 'no-repeat')
                .css('background-attachment', 'fixed')
            }
        })
        console.log("Changed the background")
        return 0
    }
    console.log("Currently using the default bg")
}

/* Calling the checkResolution function if the user is in a lyrics page or collab page*/
if($("#video").length){
    checkResolution()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Changing the websites title based on the title of the song in the lyrics page */
let changeTitleInLyricsPages = () => {
    let title = document.querySelector(".captions")
    let h1 = title.querySelector("h1").innerText
    document.querySelector("title").innerHTML = h1
}

if($(".captions").length){
    changeTitleInLyricsPages()
}


