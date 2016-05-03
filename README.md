# concert-tracker-angular

Refactor of Concert Tracker App Using Angular

This is the second iteration of the concert tracker app. This time I around I wanted to use Angular for the front end. As a result, my code (in particular the controllers) was much cleaner. I had far less repitition since I was not forced to use only JQuery and handlebars to render templates.

I was also able to integrate my newly developed back-end app (Concert Tracker API - https://github.com/matthewvilhauer/concert-tracker-api) to handle the data reqests for this app. So Concert Tracker Angular does the front-end work while Concert Tracker API handles the back end.

This app was created mainly as a test for refactoring the app in Angular. I only have one model (Bands) completed with full CRUD operations. While this is a great improvement over the initial app, the file structure of the app is still somewhat confusing, and my controllers are still bloated.

For the next iteration, I will refactor this app to use services to make my AJAX calls, and will fully flesh out the Concerts and Users models as well.

