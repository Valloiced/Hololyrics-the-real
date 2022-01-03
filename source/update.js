let checkResolution = () => {
    let attr = $("iframe").attr('src')
    const videoId = attr.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
    let bg = $("body").attr('id')

    //Getting the width of the original background
    let idBg = $("#" + bg).css("background").match(/http(.)*(jpeg|jpg)/g).pop()
    let testImage = new Image()
    testImage.src = idBg

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

if($("#video").length){
    checkResolution()
}

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
}

//If the site is a lyrics page
if(regex2.length == 2 || regex.length == 2 && regex[1] != "talents"){
    addNewGenDropdown(["darkness", "takane", "koyori", "sakamata", "iroha"], 
    ["La+ Darkness", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazuma Iroha"],
    ["../../darkness/darkness.html", "../../lui/lui.html", "../../koyori/koyori.html", "../../sakamata/sakamata.html", "../../iroha/iroha.html"] )
}

//If the site is a talent front page
if(regex.length == 1 && regex2.length == 1){
    addNewGenDropdown(["darkness", "takane", "koyori", "sakamata", "iroha"], 
                  ["La+ Darkness", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazuma Iroha"],
                  ["../darkness/darkness.html", "../lui/lui.html", "../koyori/koyori.html", "../sakamata/sakamata.html", "../iroha/iroha.html"] )
                console.log("Front Page Dropdown")
}



