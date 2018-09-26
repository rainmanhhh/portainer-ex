# PortainerEx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install

1. install `nginx` or other webserver
1. Run `ng build --prod`
1. copy dist/* to web path (for nginx, it could be `/usr/share/www/html/pe/`)
1. config you webserver to proxy portainer backend api path, example for nginx (assume your portainer is listening at 192.168.1.123:9000):
    ```
    location /pe/portainer/ {
        proxy_pass http://192.168.1.123:9000/;
    }

    ```
1. open `http://192.168.1.123/pe/` to use Portainer-Ex (assume your nginx is listening at 192.168.1.123:80)
