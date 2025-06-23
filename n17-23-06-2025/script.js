let container = document.querySelector(".divs-container");
function insertNewDiv(thumbnail,title,channel,views,upload,duration){
    let viewsStr;
    if(views<1000){
        viewsStr = views + " views";
    }else if(views >= 1000 && views < 1000000){
        viewsStr = views/1000 + "K views";
    }else if(views >=1000000){
        viewsStr = views/100000 + "M views";
    }
    let html = `<div class="item">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="video thumbnail">
                <div class="duration"><span>${duration}</span></div>
            </div>
            <div class="video-info">
                <h1>${title}</h1>
                <p>${channel} . ${viewsStr} . ${upload}</p>
            </div>
        </div>`;
    container.insertAdjacentHTML("beforeend",html);
}
function addVideo(){
    insertNewDiv("prx-masters-win.jpg","The uncrowned kings are finally crowned! | PRX vs FNC VCT Masters toronto grand finals.","VALORANT Champions Tour",1200000,"1 month ago","1:56:31");
}