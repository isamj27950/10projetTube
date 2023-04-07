import {
    videosList
} from "./videosList.js";
const liste = document.querySelector('#liste');

videosList.forEach(video => {
    if (video.imgSrc) {
        liste.innerHTML += `
        <div class="video">
            <figure>
            <img src=${video.imgSrc} alt=""/>
            <figcaption>${video.duration}</figcaption>
            </figure>
            <div class="info">
                <img class="avatar" src=${video.avatar} alt=""/>
                <div class="title">${video.videoTitle}</div>
            </div>
            <div class="metaData">
                <span class="channelName">${video.channelName}</span>
                <span class="nbVues">${video.metaData[0]}</span>
                <span class="date">${video.metaData[1]}</span>
            </div>
        </div>`;
    }
});