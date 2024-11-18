# Resume
This is the code for my personal resume website. It is an example of what can be done with an angular frontend alongside a light weight backend. 

It is also a demonstration of how I handle website development over time.  Github will be used so that previous versions of my entire project can be seen as needed. Anyone will be able to go through the commit history and see everything develop step by step if they wish.

## Minimum Viable Product
For this project to meet the criteria of a minimum viable product the following must be true:
### The website must be fully reactive. 
The user experience of the website must be pleasent both on mobile and on computers. People hiring and looking for candidates will likely be doing so from personal computer. Meanwhile most people have a mobile phone in thier possesion and the vast majority of modern phones are capable of accessing the web from anywhere. 

This means that a modern website must support all screen sizes from small phone screens to ultra wide monitors.

### Content
The website is suppose to be an online version of my resume and will need to have all its contents within it.

This will include sections for any relevant work experience, education, personal contact information, skills and so on. 

Since this is a website this will be taken a little farther as well. The user will be able to select a job or position and the resume will be updated to match. Experiences, skills and so on will be added, changed and removed as needed to match the desired job or role. 

Finally this content must be displayed in positive way. A plain text resume as a website will not be very attractive. Styling will be applied as nessecary and in a way that will change based on screen size and device type. No matter the device or screen size or screen resolution, the content must be easy to navigate, easy to understand and a positive experience for the user.

### Ways to easily edit and change the website as needed. 
This will be one of the main draws of this project and what will demonstrate the needs for a backend to go with a front end. A simple website made with just angular could do everything already listed. However to make it possible to edit the contents of a website without the aid of a developer, a backend of some sort is nessesary weather your using amazon web services or a dedicated backend like this project.

If a user is an administrator they need to be able to log in, they need to be able to view the contents of the website and edit them as desired. They will need to be able to add contents to the website in case of more experiences or skills, they might need to remove or edit outdated expereinces as things change and so on.

This will require a backend to handle the logic and connect with a database to store the information that can be edited. The backend must also pull the informatiuon from a database when required by soemone trying to access the site. The backend will also need to handle logins in a secure way. The majority of the complexity of the website will be here. 

All admin pages will also need to be fully reactive in case they need to access the website while away from a PC. 

## Additional Goals
These are the goals once the basics are met. The higher in the list the higher the priority.

- Fully self host the website from a personal server with a purchased domain so it can be easily accessed anywhere. 
- The ability to save or print a fully formatted word document based on what the user selects. This will include option like number of pages that are accaptable, desired font size, line spacing and so on.
- Additional pages to display any other products or websites I make in the future. Eventually the goal is to turn my resume website into a personal portfolio that can be accessed anywhere.

## Hosting
There will be seperate documents in the future that will go over how to setup and host a development environment that will be linked here. 

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