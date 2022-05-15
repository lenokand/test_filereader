const inputElement = document.getElementById("input");
const inputElementLabel = document.querySelector(".file-load");


var dropArea = document.getElementById("dropzone");
var result = document.getElementById("label_sign");

dropArea.addEventListener("drop", drop);
dropArea.addEventListener("dragover", dragover);
dropArea.addEventListener("dragleave", dragleave);

function drop(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    

    if(file){
     
      let file_name = document.querySelector('.file_name')
      file_name.innerText = file.name
      
      let reader = new FileReader();
  
      reader.readAsText(file);
  
      reader.onload = function() {
  
          document.querySelector('.label_sign').innerHTML = `<div> Содержимое файла: </div>` + reader.result
  
          // console.log(reader.result);
      };
  
      reader.onerror = function() {
          document.querySelector('.label_sign').innerHTML = `<div> Ошибка при загрузке файла: </div>` + reader.error
          console.log(reader.error);
      };
  
    }  

    // вывести информацию о файле
    result.innerHTML = file.name + " <span class='grey'>(" + file.type + " — " + file.size + " байт)</span>";
    this.style.borderColor = "grey";
}

function dragover(e){
    this.style.borderColor = "orange";
    e.preventDefault();
}

function dragleave(e){
    this.style.borderColor = "grey";
    e.preventDefault();
}
