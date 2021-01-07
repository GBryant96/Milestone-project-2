# MP project2 - Where Was It Filmed?

## UX

### Project Goals

The primary goal for 'Where Was It Filmed?' is to build an interactive map sharing locations and directions to filming locations of various films and television series. The target audience for this project are film and TV fans who would wish to visit filming locations. 

Film fans all over the world always feel a sense of pride and joy whenever they recognise a particular location from their favourite films, and some fans even go hunting for these points of interests. Using this application will aid fans find the locations with ease and even give directions based on the users current location.



### Developer Goals

As the developer of this application, my goals are:

* To create an informative and interactive map, displaying locations and directions to particular points of interest using the google maps API.
* To allow for user interactivity by being able to search by film or location.
* To include a 'directions' function to give users clear direction to reach their destination
* Have a visually pleasing aesthetic that adds to a users experience, but doesn't intrude on the functionality of the application.
* Include a contact page allowing users to send locations that don't appear on the map to me via email using emailJS.





### User Goals

* I want to easily find locations of filming sites from my favourite films and/or TV series, either by distance from me or by film/series
* I want to be able to get directions to particular locations easily
* I want the map to be interactive and responsive so I can browse using the map itself
* The site should feel welcoming to me as a first time user or a returning one
* I want to be able to communicate if there is a particular location that isn't on the map 





## Features

* Feature 1 - Interactive and Responsive map provided by the google maps API.
* Feature 2 - A search bar that allows users to search the map either by location or film/series.
* Feature 3 -  A contact form that allows the user to send an email, with other locations that don't appear on the map. Utilising the emailJS API to send the form to myself.
* Feature 4 - Interactive pins on the map that once clicked on open an information window containing a list of films that were filmed at that location, and a hyperlink to a google search for that location.



#### Future Features

* A trip planner to allow users to select multiple map pins and create a route to be able to see them all
* A results table displaying locations by relevance or distance that if clicked on highlight the pin on the map, giving the address and/or the latitude and longitude of the location
  * A directions button that will give the user directions to location using current position as a start point
* Allow users to search by film instead of just location



### Technologies Used

* JQuery
  * This project uses JQuery to simplify DOM manipulation
* Google maps API
  * This project uses uses the Google maps API to display the interactive map
* emailJS
  * This project uses emailJS to allow users to contact myself using a built-in contact form
* Git and GitHub 
  * Used for storage and version control
* GitPod
  * Used to write all the code
* Bootstrap
  * Used the bootstrap library to add dynamic elements to my application
* Balsamiq
  * Used to build the wireframes
* Typora
  * Used to write my README in markdown





### Testing



1. Interactive map 
   * Map loads with webpage
   * Test map controls by dragging map and zooming in and out
   * Check pins by opening an amount
   * Click 'Search on Google' links



2. Map Search
   * Click on search bar
   * Try to submit empty search
   * Try to submit false location
   * Try to submit true location
   * Try submit location using autofill



During my testing of the search bar I learnt that without without selecting a result from the autofill, an alert box pops up with the message 'Autocomplete's retuned place contains no geometry' as yet, I am yet to diagnose the cause. So can only find a location using the autofill.



3. Contact Form
   * Navigate to the contact page using the link on the main page
   * Try to submit empty forms in every form to verify relevant error message appears
   * Try to submit empty forms in one or two fields to verify relevant error message appears
   * Try to supply an invalid email and verify relevant error message appears
   * Submit with completed, valid forms and verify a success message appears





### Responsiveness

 #### Browser

Within the browser the map fills up the majority of the window, and scales to window size. However the contact form doesn't scale to the height of the window, but does scale to the width.

#### Mobile

On mobile devices, the map still scales to any viewport size. On some devices the footer on the contact page covers the bottom of the contact form. Through trial and testing, it now fits properly on every device I could test it on. The page displays better landscape over portrait.

#### Tablet

On tablets, it displays very similar to the other devices, With the map scaling horizontally and vertically and displaying better in landscape.





### Deployment

I used GitHub Pages to deploy my project by going into the settings of my repository and deploying from there. The deployed version is the same as the development version.





### Credits

#### Content

* The filming locations and movie lists for each location were found using moviemaps.org, google maps and IMDB.com
* Longitude and Latitudes were copied from google maps
* Code for the places search bar from codecworld.com tutorial 'Autocomplete Places Search Box using Google Maps JavaScript API'
* Code for google map markers from Google's tutorial
* Contact form from Code Institutes resume project tutorials



#### Media

* The background image was obtained from adobe stock
* Title banner created using font-generator.com





## Wireframes



