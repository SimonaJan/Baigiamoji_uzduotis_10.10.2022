const listOfCameras = document.getElementById("camera-list");


const createCameraList = (camera) =>{
    const cameraWrapper =  document.createElement("div");
    cameraWrapper.classList.add("camera-wrapper");

    const cameraPhoto = document.createElement("a");
    cameraPhoto.classList.add("camera-photo");
    cameraPhoto.style.backgroundImage = `url(${camera.photo})`;
    cameraPhoto.addEventListener("click", ()=>{
        localStorage.setItem("cameraId", camera.id);
        window.location.replace("./descriptionPage.html");
    });

    const infoWrapper = document.createElement("a");
    infoWrapper.classList.add("info-wrapper");
    infoWrapper.addEventListener("click", ()=>{
        localStorage.setItem("cameraId", camera.id);
        window.location.replace("./descriptionPage.html");
    });

    const addName = document.createElement("h2");
    addName.innerHTML = camera.name;

    const addPrice = document.createElement("h3");
    addPrice.innerHTML = "€ "+ Number(camera.price).toLocaleString(undefined, {minimumFractionDigits: 2});

    infoWrapper.append(addName, addPrice);
    cameraWrapper.append(cameraPhoto, infoWrapper);
    listOfCameras.append(cameraWrapper);
}


const getAllCameras = async () => {
    allCameras = await fetch(
      "https://63443a7fdcae733e8fdab6df.mockapi.io/cameras"
    ).then((res) => {
      return res.json();
    });

    allCameras.sort((a,b)=>{
        return a.price - b.price
    });

    allCameras.forEach((camera) => {
        createCameraList(camera);
    })
    .catch((err) => {
            console.log("error", err)
          });
  };

  getAllCameras();