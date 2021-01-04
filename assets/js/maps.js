function initMap() {
  const london = {
        lat: 51.514315450780714,
        lng: -0.11924067120564702 
    };


 
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: london,
    });
}