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
            "<li>Les Miserables</li></ul>"
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
    {
        lat: 51.50261026593121, lng: -0.11327545767130606, name: "Waterloo Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Juliet, Naked</li>" + "<li>Waterloo Bridge</li>" + "</ul>" + "<li>The Bourne Ultimatum</li>" + "</ul>"
    },
    {
        lat: 51.50825989196561, lng: -0.07632264417826512, name: "Tower Of London",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Muppets Most Wanted</li>" + "<li>Spider-Man: Far From Home</li>" + "</ul>"
    },
    {
        lat: 51.50261026593121, lng: -0.11327545767130606, name: "Trafalgar Square",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>101 Dalmatians</li>" + "<li>Captain America: The First Avenger</li>" +
            "<li>Get Him to the Greek</li>" + "<li>28 Weeks Later</li>" + "<li>Wonder Woman</li>" + "<li>Edge of Tomorrow</li>" +
            "<li>Children of Men</li>" + "<li>V for Vendetta</li>" + "</ul>"
    },
    {
        lat: 51.508473173079956, lng: -0.1259032010920856, name: "Charing Cross Underground Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Skyfall</li>" + "<li>28 Weeks Later</li>" + "<li>Thor: The Dark World</li>" +
            "<li>The Fourth Protocol</li>" + "</ul>"
    },
    {
        lat: 51.505484709568115, lng: -0.08988903708375483, name: "Borough Market",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Bridget Jones's Diary</li>" + "<li>Bridget Jones's Baby</li>" + "<li>The Layover</li>" +
            "<li>Closed Circuit</li>" + "<li>The Imaginarium of Doctor Parnassus</li>" + "</ul>"
    },
    {
        lat: 51.51878791480703, lng: -0.08145338050436084, name: "Liverpool Street Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Bridget Jones's Diary (Deleted Scene)</li>" + "<li>Mission: Impossible</li>" + "</ul>"
    },
    {
        lat: 56.87624846019171, lng: -5.431778865554804, name: "Glenfinnan Viaductduct",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Chamber of Secrets</li>" + "<li>Harry Potter and the Prisoner of Azkaban</li>" +
            "<li>Harry Potter and the Goblet of Fire</li>" + "</ul>"
    },
    {  lat: 51.408640085075646, lng: -0.7214360992570291, name: "12 Picket Post Drive",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and th philosophers stone</li>" + "</ul>"
    },
    {  lat:51.512869, lng:  -0.115646, name: "Australia House",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>X-Men: First Class</li>" + "<li>Wonder Woman</li>" + 
        "<li>Sherlock Holmes: A Game of Shadows</li>" + "<li>The High Commissioner</li>" + "</ul>"
    }, {  lat:54.400476, lng:  -0.712035, name: "Goathland Railway Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "</ul>"
    }, {  lat: 51.750240,  lng: -1.255816, name: "Christ Church College",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" +
        "<li>The Golden Compass</li>" + "</ul>"
    }, {  lat: 51.867386,  lng: -2.246683, name: "Gloucester Cathedral",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" + 
        "<li>Harry Potter and the Half-Blood Prince</li>" + "</ul>"
    }, {  lat: 54.773465, lng: -1.576436, name: "Durham Cathedral",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" + 
        "<li>Elizabeth</li>" + "<li>Avengers: Endgame</li>"+ "</ul>"
    }, {  lat: 51.414719, lng: -2.117164, name: "Lacock Abbey",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" + 
        "<li>The Other Boleyn Girl</li>" + "</ul>" 
    }, {  lat: 51.542478, lng: -0.543652, name: "Black Park Country Park",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Captain America: The First Avenger</li>" + "<li>Harry Potter and the Philosopher's Stone</li>" + 
        "<li>Harry Potter and the Chamber of Secrets</li>" + "<li>Harry Potter and the Goblet of Fire</li>" + "<li>Harry Potter and the Order of the Phoenix</li>" + 
        "<li>Eden Lake</li>" + "<li>X-Men: First Class</li>" + "<li>Dark Shadows</li>" + "<li>The Wolfman</li>" + "<li>The Black Knight</li>" + "<li>Hawk the Slayer</li>" +
        "<li>Goldfinger</li>" + "<li>The Charge of the Light Brigade</li>" + "<li>Casino Royale</li>" + "<li>A Little Chaos</li>" + "<li>Atonement</li>" + 
        "<li>Carry on at Your Convenience</li>" + "<li>Blakes 7</li>" + "<li>The Blood on Satan's Claw</li>" + "<li>Cinderella</li>" + "<li>Fahrenheit 451</li>" + 
        "<li>Treasure Island</li>" + "<li>Stardust</li>" + "<li>Willow</li>" + "<li>Octopussy</li>" + "</ul>"
    }, {  lat: 51.535005, lng: -0.154141, name: "London Zoo", 
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>About a Boy</li>" + "<li>The Fallen Idol</li>" + 
        "<li>Wimbledon</li>" + "<li>Arabesque</li>" + "<li>An American Werewolf in London</li>" + "<li>Kiss Kiss (Bang Bang)</li>" + "</ul>"
    }, {  lat: 51.754039, lng: -1.254625, name: "Divinity School & Duke Humfrey's Library",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" + 
        "<li>Harry Potter and the Goblet of Fire</li>" + "<li>Harry Potter and the Half-Blood Prince</li>" + "<li>The Golden Compass</li>" + "<li>The Favourite</li>" +
        "</ul>"
    }, {  lat: 51.573311, lng: -0.337457, name: "Old Schools (Harrow School)",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "</ul>"
    }, {  lat: 55.415752, lng:  -1.706078, name: "Alnwick Castle",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Philosopher's Stone</li>" + "<li>Harry Potter and the Chamber of Secrets</li>" + 
        "<li>Robin Hood: Prince of Thieves</li>" + "<li>Robin Hood</li>" + "<li>Elizabeth</li>" + "</ul>"
    },
     {  lat: 51.510952, lng: -0.140034, name: "Huntsman & Sons",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Kingsman: The Secret Service</li>" + "<li>Kingsman: The Golden Circle</li>" + "</ul>"
    },
     {  lat: 51.186902, lng: 0.113892, name: "Hever Castle",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Inkheart</li>" + "<li>The Princess Bride</li>" + "<li>Star Wars: Episode I - The Phantom Menace (deleted scene)</li>" +
        "<li>Lady Jane</li>" + "</ul>"
    }, {  lat: 51.669643, lng: -0.444301, name: "Whippendell Woods",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Star Wars: Episode I - The Phantom Menace</li>" + "</ul>"
    }, {  lat: 54.577047,  lng: -3.146795, name: "Derwent Water",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Star Wars: The Force Awakens</li>" + "</ul>"
    }, {  lat: 51.779444, lng: -2.614660, name: "Puzzlewood",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Star Wars: The Force Awakens</li>"
    }, {  lat: 51.378863, lng: -1.280865, name: "RAF Greenham Common",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Star Wars: The Force Awakens</li>"
    }, {  lat: 51.503496, lng: -0.018700, name: "Canary Wharf Underground Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>28 Weeks Later</li>" + "<li>28 Days Later…</li>" + "<li>Love Actually</li>" + 
        "<li>Rogue One: A Star Wars Story</li>" + "<li>The Constant Gardener</li>" + "<li>Billy Elliot</li>" + "<li>Men in Black: International</li>" + "</ul>"
    }, {  lat: 50.818040, lng: -1.328120, name: "Fawley Power Station",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Mission: Impossible - Rogue Nation</li>" + "<li>Solo: A Star Wars Story</li>" + "</ul>"
    }, {  lat: 51.397099823909784, lng: 0.5289589290086215, name: "The Historic Dockyard Chatham",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Sherlock Holmes: A Game of Shadows</li>" + "<li>Amazing Grace</li>" + 
        "<li>Mr. Turner</li>" + "<li>Victor Frankenstein</li>" + "<li>Les Misérables</li>" + "<li>The World Is Not Enough</li>" + 
        "<li>Vanity Fair</li>" + "<li>Oliver Twist</li>" + "<li>The Man from U.N.C.L.E.</li>" + "</ul>"
    }, {  lat: 51.389938, lng: 0.501441, name: "Rochester Castle",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Hamlet</li>" + "<li>Henry VIII</li>" + "</ul>"
    }, {  lat: 51.452794, lng: 0.374768, name: "Tilbury Fort",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Wonder Woman</li>" + "</ul>"
    }, {  lat: 51.464654, lng: 0.257641, name: "Dartford Tunnel",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Harry Potter and the Deathly Hallows: Part 1</li>" + "</ul>"
    }, {  lat: 50.38547885651208, lng: -4.227210292044514, name: "National Trust - Antony",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Alice in Wonderland</li>" + "</ul>"
    }, {  lat: 50.57147984333438, lng: -2.452573504603966, name: "Portland Harbour",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>The Boat That Rocked</li>" + "</ul>"
    }, {  lat: 51.208184433619536, lng:  -2.650220635544316, name: "St Cuthbert's Church",
        description: "<h2>Films:</h2>" + "<ul>" + "<li>Hot Fuzz</li>" + "</ul>"
    }, 
]
function initMap() {
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 51.514315450780714,
            lng: -0.11924067120564702,
        }
    });

    const contentString =
    '<div>' + '</div>'



    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

      function placeMarker(loc) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(loc.lat, loc.lng),
            map: map
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.close(); 
            infowindow.setContent(`<h2 class=location id="infowindow">${loc.name} </h2 >` + `<a href="https://www.google.com/search?q= ${loc.name} " target="_blank">Find On Google</a>` + `<div>${loc.description}</div>`);
            infowindow.open(map, marker);
        });
    }
    
    locations.forEach(placeMarker);

    var input = document.getElementById('searchInput');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
    })}
     