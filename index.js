const question = document.getElementById("quizContainer");
const button = document.getElementsByTagName("button")[0];
let count = -1;

let texts = [
    "<h2>Itinerary:<h2>",
    "<ul><li>11:30am pick up + leave for tyler galleria</li></ul>",
    "<ul><li>12:00pm lunch @ cheesecake factory</li></ul>",
    "<ul><li>loiter idk or we can leave later</li></ul>",
    "<ul><li>1:30pm Pottery Class @ mudhutpotterystudio</li></ul>",
    "<ul><li>3pm class finishes, head back to ho residence maybe idk</li></ul>",
    "<p>sorry it's so late I also haven't booked the studio yet<br><p>so let me know as soon as possible if you can make it</p>",
    "hohoho",
    "kaylen &#129776;"
]

function next(){
    if(count===-1){
        const image = document.createElement("div");
        const jungkook = document.createElement("img");
        jungkook.src = "https://ih1.redbubble.net/image.2302291454.5152/raf,360x360,075,t,fafafa:ca443f4786.jpg"
        jungkook.style.width = "200px";
        image.appendChild(jungkook);
        question.appendChild(image);
        const spacing = document.createElement("br");
        question.appendChild(spacing);
    }else{
    const text = document.createElement("div");
    text.innerHTML = texts[count];
    question.appendChild(text);
    }
    count++;
    if(count > 8){
        button.style.display = "none";
    }
}