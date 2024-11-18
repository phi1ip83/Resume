# Deploying Development Environment, Updating local version and pull requests
## Deploying the website and backend locally for development
- assumes you have git, npm, node.js, angular 18 all installed globally on your computer
- assumes you have a code editor like visual studio code
- assumes basic knowledge of how to use a command line interface (CLI)

step 1: navigate to the location you want to clone the github repo to using your prefered CLI.  

step 2: use the git CLI tool to clone this repo locally with the following command 
> git clone https://github.com/phi1ip83/Resume

step 3: in the CLI navigate into Resume/frontend and use the following command to install all the packages used in the frontend.
> npm install

step 4: in the CLI navigate into Resume/backend and use the following command to install all packages used in the backend
> npm install

step 5: to run the backend locally you can run the following command from Resume/backend in your CLI. Make sure not to close the window or the server stops.
> node app.js

step 6: to run the frontend locally use following from Resume/frontend through your CLI. Make sure not to close the window or your website will stop being served.
> ng serve

