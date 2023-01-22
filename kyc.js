let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");
let pics = null;

function preview() {
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
            pics = img;
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}

// function saveToStorage() {
//     if (fileInput.files.length < 2) {
//         console.log("Choose 2 photos");
//     }
//     else if (fileInput.files.length > 2) {
//         console.log("Choose 2 photos");
//     }
//     else {

//         if(pics != null){
//             let imageRef = ref(storage, 'images');
//             let uploadTask = imageRef.put(pics);
//             uploadTask.on("state_changed", (snapshot)=>{
//                 console.log("its 2 picked");
//             console.log(pics);
//             },(error)=>{
//                 console.log("error is ",error);
//             })
    
            
//         }
//         else{
//             console.log("Pick Pic ");
//         }
       

//     }
// }