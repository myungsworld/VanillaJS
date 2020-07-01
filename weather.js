const API_KEY = "442858f665b7bc3de19970dca0e7c942"
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))

}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        //getWheather
    }
}

function init() {
    loadCoords()
    askForCoords()
}

init();