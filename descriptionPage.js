const cameraId = localStorage.getItem("cameraId");

const getInformationAboutCamera = async () => {
  oneCameraInformation = await fetch(
    `https://63443a7fdcae733e8fdab6df.mockapi.io/cameras/${cameraId}`
  )
    .then((res) => {
      return res.json();
    })
    .then((information) => {

        const mainWrapper = document.getElementById("main-wrapper");

        const cameraPhoto = document.createElement("img");
        cameraPhoto.src = information.photo;
    
        const aboutCamera = document.createElement("div");
        aboutCamera.classList.add("about-camera")
    
        const cameraModel = document.createElement("h1");
        cameraModel.innerHTML = information.name;
    
        const cameraPrice = document.createElement("h2");
        cameraPrice.innerHTML = "€ "+ Number(information.price).toLocaleString(undefined, {minimumFractionDigits: 2});
    
        const cameraLocation = document.createElement("h3");
        cameraLocation.innerHTML = `City: ${information.city}`;
    
        const cameraDescription = document.createElement("p");
        cameraDescription.innerHTML = information.description;
    
    
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete camera from the list";
        deleteButton.addEventListener("click", () =>{
          fetch(`https://63443a7fdcae733e8fdab6df.mockapi.io/cameras/${cameraId}`,
          {
            method: 'DELETE',
            headers: {
            Accept: 'application/json',
           'Content-Type': 'application/json',
          },
        }
      )
          .then((res) => {
            setTimeout((res) =>{
              mainWrapper.innerHTML="Camera was deleted from the catalog";
            }, 2000)
          })
          .catch((err) => {
            console.log("error", err)
          });
        });

        aboutCamera.append(cameraModel, cameraPrice, cameraLocation, cameraDescription, deleteButton);
        mainWrapper.append(cameraPhoto, aboutCamera);
})};

getInformationAboutCamera();

