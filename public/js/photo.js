const newFormHandler = (event) => {
  event.preventDefault();
  
  const imageData = new FormData();
  const imageInput = document.querySelector("#image-file").files[0];
  imageData.append("image-file", imageInput);

  const editType = document.querySelector("#edit-type").value;
  imageData.append("editType", editType);
  
  fetch("https://image-alchemy-lr48.onrender.com/image_upload", {
    method: "post",
    body: imageData
  });
  
  const imageOutput = document.querySelector("#edited-image");
  imageOutput.setAttribute("src", `img/${imageInput.name}?t=${new Date().getTime()}`);
};
document.addEventListener('submit', newFormHandler);

