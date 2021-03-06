# ConstructionSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
Its a simple web-page that allows user to:
 - add material details required in their construction contract.
 - edit an existing material in their list
 - delete an existing material in their list
 - and, view the materials in their list.
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


Citations &Credits:
- https://angular.io/start
- https://www.w3schools.com/css/
- https://www.w3schools.com/html/
- https://blog.bitsrc.io/mock-apis-different-techniques-for-react-and-angular-156284b757f4
- https://medium.com/angular-in-depth/faking-a-back-end-server-in-angular-960ff33275ba
- https://www.npmjs.com/package/angular-in-memory-web-api
- https://stackoverflow.com/questions/48832432/rounded-input-type-color

Assumptions: 
- As I was using the in-memory-web-api, I needed a way to provide a primary key, so I have added "id" as per the tutorials found on the web.
- I assume all the input given in the form to create material will be correct type of input.
- The components are not responsive, the list can overflow in the view section.


Challenges:
- Most of my issues came during CSS, placing the widgets correctly, 
choosing right colors.
- Understanding what is router-outlet and how child components works.

Time Spent: 9hrs.


