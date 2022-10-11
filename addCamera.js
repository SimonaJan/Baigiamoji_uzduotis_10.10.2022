const formButton = document.getElementById("formButton");
const infoBar = document.getElementById("infoBar");

formButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const modelValue = document.getElementById("cameraModel").value;
    const priceValue = document.getElementById("cameraPrice").value;
    const photoUrl = document.getElementById("cameraPhoto").value;
    const descriptionValue = document.getElementById("cameraDescription").value;
    const cityValue = document.getElementById("city").value;

    const newCameraData = {
        name: modelValue,
        price: priceValue,
        photo: photoUrl,
        description: descriptionValue,
        city: cityValue,
    }
    fetch('https://63443a7fdcae733e8fdab6df.mockapi.io/cameras', { 
        method: 'POST', 
        headers: { 
          Accept: 'application/json', 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(newCameraData), 
      }) 
        .then((res) => { 
          return res.json(); 
        })
        .then(() => { 
            infoBar.innerHTML = "Camera has been added successfully!"
        })
        .then ((res) =>{
            setTimeout((res) =>{
                window.location.reload();
              }, 3000)
        })
})