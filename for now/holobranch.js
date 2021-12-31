
/* Carousel thingy */
const branch = [".jpbranch", ".engbranch"]

$(document).ready(()=>{
    branch.map(items => {
        $(items).hide()
    })
    $(branch[0]).show()
})

let index = 0

let update = (n) => {
    index += n
    if(index < 0){
        index = branch.length - 1
    }
    if(index >= branch.length){
        index = 0
    }
    carousel(index)
}

let carousel = (n) => {
    for(let i = 0; i < branch.length; i++){
        $(branch[i]).hide()
    }

    $(branch[n]).show()
}