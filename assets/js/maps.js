var locations = [
    {
        lat: 51.51384861805017, lng: -0.09837205942788466, name: "St Paul's Cathedral",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Mission Impossible: Fallout</li>" + "<li>Thor: The Dark World</li>" +
            "<li>Harry Potter and the Prisoner of Azkaban</li>" + "<li>Sherlock Holmes</li>" + "<li>Run,Fat Boy, Run</li>" + "</ul>"
    },

    {
        lat: 51.50580959385182, lng: -0.07529245767130606, name: "Tower Bridge",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Spider-Man: Far From Home</li>" + "<li>Bridget Jones's Diary</li>" + "<li>Bridget Jones: The Edge of Reason</li>" +
            "<li>Lara Croftm Tomb Raider</li>" + "<li>Run, Fat Boy, Run</li>" + "<li>28 Weeks Later</li>" + "</ul>"
    },

    {
        lat: 51.50982948474601, lng: -0.09850008465738792, name: "Millennium Bridge",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>28 Weeks Later</li>" + "<li>Harry Potter and the Half-Blood Prince</li>" + "<li>Guardians of the Galaxy</li>" +
            "<li>Run, Fat Boy, Run</li>" + "</ul>"
    },

    {
        lat: 51.51458745152052, lng: -0.08035518650695907, name: "The Gherkin",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Thor: The Dark World</li>" + "<li>Match Point</li>" + "</ul>"
    },

    {
        lat: 51.48342264788425, lng: -0.005571271164346978, name: "Old Royal Naval College",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>The Dark Knight Rises</li>" + "<li>Skyfall</li>" + "<li>The Golden Compass</li>" +
            "<li>Four Weddings and a Funeral</li>" + "<li>Thor: The Dark World</li>" + "<li>The Duchess</li>" +
            "<li>Gulliver's Travels</li>" + "<li>Sherlock Holmes</li>" + "<li>Sherlock Holmes: A Game of Shadows</li>" + "<li>Patriot Games</li>" +
            "<li>The King's Speech</li>" + "<li>The Wolfman</li>" + "<li>Lara Croft: Tomb Raider</li>" + "<li>Pirates of the Caribbean: On Stranger Tides</li>" +
            "<li>The Mummy Returns</li>" + "<li>Muppets Most Wanted</li>" + "<li>Victor Frankenstein</li>" + "<li>Cinderella</li>" +
            "<li>Les Misérables</li></ul>"
    },
    {
        lat: 51.53104284649297, lng: -0.12582972881207333, name: "St Pancras International/Kings Cross Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Batman Begins</li>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" +
            "<li>Harry Potter and the Prisoner of Azkaban</li>" + "<li>Harry Potter and the Order of the Phoenix</li>" + "<li>Harry Potter and the Deathly Hallows: Part 2</li>" +
            "<li>Mission: Impossible - Rogue Nation</li>" + "<li>Wonder Woman</li>" + "<li>The Imitation Game</li>" + "</ul>"
    },
    {
        lat: 51.53992401675603, lng: -0.16078683068522417, name: "Primrose Hill",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Imagine Me & You</li>" + "<li>The Fourth Protocol</li>" + "<li>Bridget Jones: The Edge of Reason</li>" +
            "<li>Our Kind of Traitor</li>" + "<li>Penelope</li>" + "</ul>"
    },
    {
        lat: 51.482007696890044, lng: -0.14478564417826512, name: "Battersea Power Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>The Dark Knight</li>" + "<li>The King's Speech</li>" + "<li>Children of Men</li>" +
        "<li>Fast & Furious 6</li>" + "<li>The Imaginarium of Doctor Parnassus</li>" + "<li>Full Metal Jacket</li>" + "<li>The Meaning of Life</li>" + "</ul>"
    },
    { lat: 51.50261026593121, lng: -0.11327545767130606, name: "Waterloo Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Juliet, Naked</li>" + "<li>Waterloo Bridge</li>" + "</ul>" + "<li>The Bourne Ultimatum</li>"},
    { lat: 51.50825989196561, lng: -0.07632264417826512, name: "Tower Of London",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Muppets Most Wanted</li>" + "<li>Spider-Man: Far From Home</li>"},
    { lat: 51.50261026593121, lng: -0.11327545767130606, name: "Trafalgar Square",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>101 Dalmatians</li>" + "<li>Captain America: The First Avenger</li>" + 
        "<li>Get Him to the Greek</li>" + "<li>28 Weeks Later</li>" + "<li>Wonder Woman</li>" + "<li>Edge of Tomorrow</li>" +
        "<li>Children of Men</li>" + "<li>V for Vendetta</li>"},
    { lat: 51.508473173079956, lng: -0.1259032010920856, name: "Charing Cross Underground Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Skyfall</li>" + "<li>28 Weeks Later</li>" + "<li>Thor: The Dark World</li>" +
        "<li>The Fourth Protocol</li>"},
    { lat: 51.505484709568115, lng: -0.08988903708375483, name: "Borough Market",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Bridget Jones's Diary</li>" + "<li>Bridget Jones's Baby</li>" + "<li>The Layover</li>" +
        "<li>Closed Circuit</li>" + "<li>The Imaginarium of Doctor Parnassus</li>"},
    { lat: 51.51878791480703, lng: -0.08145338050436084, name: "Liverpool Street Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Bridget Jones's Diary (Deleted Scene)</li>" + "<li>Mission: Impossible</li>"},
    { lat: 56.87624846019171, lng: -5.431778865554804, name: "Glenfinnan Viaductduct",
        description: "<h2>Films:</h2>" + "<ul>" +  "<li>Harry Potter and the Chamber of Secrets</li>" + "<li>Harry Potter and the Prisoner of Azkaban</li>" +
        "<li>Harry Potter and the Goblet of Fire</li>"},
]
function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 51.514315450780714,
            lng: -0.11924067120564702,
        }
    });
    const contentString 
        '<h1>' + '</h1>'



    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });





    function placeMarker(loc) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(loc.lat, loc.lng),
            map: map
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.close(); // Close previously opened infowindow
            infowindow.setContent(`<h1 class=location id="infowindow">${loc.name}</h1 >` + `<div>${loc.description}</div>`);
            infowindow.open(map, marker);
        });
    }



    // ITERATE ALL LOCATIONS. Pass every location to placeMarker
    locations.forEach(placeMarker);



}
