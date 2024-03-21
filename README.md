# NotificationAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

# Overview

The form should provide a proper input field for all required fields and a means of submitting this information to the
backend service endpoints. The front end should display any applicable error messages to the user for any
invalid requests. All successful submissions should clear the form with a message indicating the request was a
success. All API requests in the UI should be made to the Backend service described above.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Running with docker
To help ensure consistently correct startup across multiple platforms, you may choose to use Docker to containerize your application.  Installation steps for docker can be found on their main page.
https://docs.docker.com/engine/install/

With Docker installed, you can build your a new image. This build needs to be run after any changes are made to the source code.
```
docker build -t notification-angular-app .
```

After the image builds successfully, run a container from that image.
```
docker run -p 4200:4200 notification-angular-app
```

When you are done testing, stop the server and remove the container.
```
docker rm -f notification-angular-app
```

# Running with docker-compose
docker-compose up
