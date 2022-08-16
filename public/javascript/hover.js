$(document).ready(function(){
    $('.area-hover').mouseover(function() {
        document.getElementById("area-content").innerHTML = '';

        let areaName = document.getElementById(this.id).getAttribute("name");
        let name = document.getElementById("area-name").innerHTML; 
        let replaceName = name.replace(name, areaName);
        document.getElementById("area-name").innerHTML = replaceName;

        // let areaContent = document.getElementById(this.id).getAttribute("content");
        // let content = document.getElementById("area-content").innerHTML;
        // let replaceContent = content.replace(content, areaContent);
        // document.getElementById("area-content").innerHTML = replaceContent;

        let areaContent = document.getElementById(this.id).getAttribute("content");
        const words = areaContent.split('|');

        for (let i = 0; i < words.length; i++) {
            const para = document.createElement("p");
            const node = document.createTextNode(words[i]);
            para.appendChild(node);

            const element = document.getElementById("area-content");
            element.appendChild(para);
        }
        
        // const para = document.createElement("p");
        // const node = document.createTextNode("This is new.");
        // para.appendChild(node);

        // const element = document.getElementById("div1");
        // element.appendChild(para);
    });
});