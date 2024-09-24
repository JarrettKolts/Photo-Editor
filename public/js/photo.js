const newFormHandler = (event) => {
  event.preventDefault();
  
  const imageData = new FormData();
  const imageInput = document.querySelector("#image-file").files[0];
  imageData.append("image-file", imageInput);

  const editType = document.querySelector("#edit-type").value;
  imageData.append("editType", editType);
  
  fetch("http://localhost:3001/image_upload", {
    method: "post",
    body: imageData
  });
  
  const imageOutput = document.querySelector("#edited-image");
  imageOutput.setAttribute("src", `img/${imageInput.name}`);
};
document.addEventListener('submit', newFormHandler);

