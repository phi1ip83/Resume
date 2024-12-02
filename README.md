# Resume
This is the code for my personal resume website. It is an example of what can be done with an angular frontend alongside a light weight backend. 

It is also a demonstration of how I handle website development over time.  Github will be used so that previous versions of my entire project can be seen as needed. Anyone will be able to go through the commit history and see everything develop step by step if they wish.

## Current features
The website can now be found hosted at http://philip-resume.duckdns.org:3000. 
The current Feature list can be found in the [Features](Features.md) file.

## Planned Features
Planned features can be found in [this]("Planned Features.md") document.

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
### Visual Studio Code
Both the frontend and the backend will be developed along side each other with Visual Studio Code, a popular code editor with a large range of extensions and plug-ins. Some of the extensions were used specificly to make running the backend in production far easier then they otherwise would be.

### Postman
Postman was used to test any changes made in the backend by simplifying the sending and recieving of information without needing to make or edit webpages, something that can take far too much time when in active development.

In postman it also allows you to save any requests made to your backend so you can come back later and easily re-test any changes without having to make the entire request from scratch. This allows you to test individual requests from a server without deleting previous requests like you would if using a web browser and a front end to test.

### LibreWolf and Brave
LibreWolf and the Brave Browser were the primary web browsers used to test the website while it was being developed. Brave is based off of the google chrome web browser while LibreWolf is based off of Fire Fox. 

Brave was used instead of google chrome because it functions in the same manner while having additional restrictions on the content within. many other popular web browsers like microsoft Edge are also based off of google chrome and function identically. Over 65% of all web browsers used are either google chrome or based on it world wide.

LibreWolf was used instead of FireFox because it is very privacy based and blocks a large amount of javascript and web tools like WebGL. Anyone who has modified thier web browsers because they want privacy will likely block similiar things, this way I can ensure even those individuals can access my website. Firefox is the only web browser other then chrome that is commonly used as a base. This lets me cover a slightly wider range of web browsers as well. 

The one weakness is the lack of support for safari. Safari is a browser made for apple products and will have to be throughly tested once development nears completion. Any future work will also have to be tested in case of issues.