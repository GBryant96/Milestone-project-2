var locations = [
    {lat: 51.51384861805017, lng: -0.09837205942788466, name: "St Paul's Cathedral",
    description: "<h2>Films:</h2><ul><li>Mission Impossible: Fallout</li><li>Thor: The Dark World</li>" +
    "<li>Harry Potter and the Prisoner of Azkaban</li><li>Sherlock Holmes</li><li>Run,Fat Boy, Run</li></ul>"},
    {lat: 51.50580959385182, lng: -0.07529245767130606, name: "Tower Bridge",
    description: "<h2>Films</h2><ul><li>Spider-Man: Far From Home</li><li>Bridget Jones's Diary</li><li>Bridget Jones: The Edge of Reason</li>"+
    "<li>Lara Croftm Tomb Raider</li><li>Run, Fat Boy, Run</li><li>28 Weeks Later</li></ul>"},
]
function initMap() {
 
var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center:{
    lat: 51.514315450780714,
    lng: -0.11924067120564702,
    }
}); 
  const contentString =
    '<h1>' + '</h1>'
    

    
const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

 
 
 

    function placeMarker( loc ) {
    var marker = new google.maps.Marker({
      position : new google.maps.LatLng( loc.lat, loc.lng ),
      map : map
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.close(); // Close previously opened infowindow
        infowindow.setContent(`<h1 id="infowindow">${loc.name}</h1>` + `<div>${loc.description}</div>`);
        infowindow.open(map, marker);
    });
  }
  
  

  // ITERATE ALL LOCATIONS. Pass every location to placeMarker
    locations.forEach( placeMarker );
    
  
  
}
