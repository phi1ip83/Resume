# Resume
This is the code for my personal resume website. It is an example of what can be done with an angular frontend alongside a light weight backend. 

It is also a demonstration of how I handle website development over time.  Github will be used so that previous versions of my entire project can be seen as needed. Anyone will be able to go through the commit history and see everything develop step by step if they wish.

## Current features
The website can now be found hosted at http://philip-resume.duckdns.org:3000. 
The current Feature list can be found in the [Features](Features.md) file.

## Planned Features
Planned features can be found in [this](Planned_Features.md) document.

## Hosting
A [deploy](Deploy.md) document has been created to help people setup and run the website locally for development.

## Main Software Used
The core of this website will be HTML, Javascript and CSS. However to make it feasable to develop in a reasonable time span and to host the backend additional software will be used.
### Frontend
Bootstrap will be used to style the website. It is industry standard with a massive amount of documentation available. Angular will be used as a framework to make it easy to manage and re-use code as needed. Angular will also make it possible to test individual pieces of the front end and prevent errors in the process of development.

Bootstrap is a bundle of CSS and javascript made to easily style any hmtl you might want to make and to add many common behaviors to sites. It also makes it a lot easier to creat fully reactive web pages, fit for any screen size.

Angular is a framework that mainly uses typescript. It lets you serve pieces of html and css as needed and reduces complexity through re-usable componenets.
### Backend
The backend will be powered by Node.js, a javascript runtime.  The express framework will be used to make development easier and faster. The database that will be used is SQLite because its light weight, can be run by the backend without paying for any third party services and the lack of a need for large scale operations. 

## Development Environment
The details of the development environment can be found [here.](Development.md)