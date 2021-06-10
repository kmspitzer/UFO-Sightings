# javascript-challenge


This functionality uses Javascript and the D3 library to allow filtering of a dataset based on user input.
The filtered data is then dynamically displayed on a web page.

UFO Level 1
-----------
When index.html is run in the browser, is calls app.js, which displays all data in the dataset in a table on the webpage.  app.js then listens for a button click or form
submit event.  When one of the events is triggered, runEvent() is called to filter the dataset by the date entered in the input field, and redisplay the table with the
appropriate data.  If no date is entered in the input field, all data in the dataset will be displayed.  If no data matching the input date is found, a "No sightings found
for <date>." message is displayed.  Logic is included to prevent the entire page from being redisplayed each time an event is triggered, and each time an event is triggered,
the input field is cleared, and the table area is cleared before rendering the new table.
  

To run this page, visit: https://kmspitzer.github.io/javascript-challenge/UFO-level-1/


UFO Level 2
-----------
The above functionality is replicated and expanded to include user input fields for not just the date, but also for city, state, country and shape.  The user can enter
search criteria using any combination of the input fields.  If any fields are left blank, the data for that field will not be filtered.  The event listener will wait
for button click to begin filtering the data.  This way, the user may populate as many fields as they would like before triggering the search.  When index.html is run in the
browser, is calls app.js, which displays all data in the dataset in a table on the webpage.  app.js then listens for a button click event.  When the event is triggered,
runEvent() is called to filter the dataset by the data entered in the input fields, and redisplay the table with the appropriate data. If no data matching the input fields
is found, a "No sightings found." message is displayed.  Logic is included to prevent the entire page from being redisplayed each time the event is triggered, and each time
the event is triggered, the input fields are cleared, and the table area is cleared before rendering the new table.
  

To run this page, visit: https://kmspitzer.github.io/javascript-challenge/UFO-level-2/


