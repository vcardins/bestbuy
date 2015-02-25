# BBYC - MVC ASSESMENT



>*Pure Javascript Object Oriented Bestbuy Demo App by [@vcardins](//twitter.com/vcardins)*

>In this document, I'll detail about the styles and patterns used in this app. The existing modules were 100% developed by the author (Victor Cardins - [vcardins@gmail.com](mailto:vcardins@gmail.com)), except for the testing and template engine frameworks and the modal plugin.  

## Prerequisites

1. Install [Node.js](http://nodejs.org) 

## Running BBYC - MVC

### Tests
 - Run the unit tests acessing the url [http://localhost:8886/specs](http://localhost:8886/specs).

### Running 
1. Run `node server`

2. Open the url [http://localhost:8886/](http://localhost:8886/)
3. [Live Demo](http://vcardins.github.io/bestbuy/) - http://vcardins.github.io/bestbuy/

## Exploring BBYC - MVC
BBYC-MVC OO Javascript

### Structure
The structure also contains a server.js can serve the app using node. Feel free to use any server you wish.

	/bestbuy
		/bestbuy
			/app
			/css
			/images
			/libs
			/specs

### Design Patterns
The modules were organized into namespaces and implemented by using the The Revealing Module Pattern, where we ["define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public."](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)

### Strategies/Features
1. Collections were managed in memory to avoid multiple trips to the api; 
2. Most of the HTML elements were created by manipulating the DOM instead of writing the tags in order to demonstrate knowledge;
3. Lack of comments in the code was due to the simplicity of the app; 
4. Added simple loading spinner to promote the "illusion" of quickness;  

### The Modules
The app has 4 main custom modules 

```
app --> [
        BestBuy.Config,
        BestBuy.Core.Store,
        BestBuy.Data.Store,
		BestBuy.Utils --> [
			JSONP,
			Common,
			DOM
		]
    ]
```

#### Config Module
App wide configuration parameters.

#### Core Module
Core module is responsible for connecting to the data service and manipulate the template engine to generate the lists.

#### Utils Modules
Utils modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

##### Utils.DOM Module
The `Util.DOM` module handles DOM manipulation and mimics jQuery functionality.

##### Utils.JSONP Module
The `Util.JSONP` module handles external cross domain calls.

##### Utils.Common Module
The `Utils.Common` module contains miscellaneous helpers that assists on various purposes.

## Enhancements (TODO)

* Depedency management tool eg. `RequireJs`, `Browserify`;
* Use of websockets for real time updates (in memory objects collections management);
* Increase tests converage;