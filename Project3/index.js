let rice=[
    'https://png.pngtree.com/thumb_back/fh260/background/20231102/pngtree-artistic-rice-textures-in-abstract-form-image_13714952.png',

    'https://thumbs.dreamstime.com/z/farmers-planting-rice-farm-thailand-32735707.jpg',

    'https://www.onceuponachef.com/images/2014/10/jasmine-rice-1.jpg',

    'https://www.worldatlas.com/upload/e5/01/c0/shutterstock-209487340.jpg'
]
let rImg=document.getElementById('imgs')
let sIndex=0
function changeImg(){
    if(sIndex < rice.length){
        rImg.src=rice[sIndex]
    }
    sIndex++
}
setInterval(changeImg, 5000)



let rd=document.getElementsByClassName('round')
let rIndex=1;
rd[0].style.cssText='height:11px; width:11px; border-radius:50px;'

function changRound(){
    if(rIndex < rd.length){
        rd[rIndex].style.cssText='height:11px; width:11px; border-radius:50px;'

        if(rIndex >=1){
            rd[rIndex-1].style.cssText='height:7px; width:7px; border-radius:50px;'
        }
    }
    rIndex++;
}
setInterval(changRound, 5000)

