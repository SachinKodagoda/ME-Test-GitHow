## Sachin Kodagoda's Project Intro
* test_project_01

## Requeriments
* install [NodeJS] (http://nodejs.org). 
* automaically `npm` also will be installed
* npm install -g gulp

## Install
* to gather all dependencies use -> npm install


## How to use

* **default**: Compile and watch for changes
* **scripts**: Compile the JavaScript files
* **sass**: Compile the Sass styles
* **images**: Copy the newer to the build folder
* **vendors**: Copy the vendors to the build folder
* **watch**: Watch for any changes on the each section



Once you have the project running in the terminal you can delete the partial
```
sources/sass/6-pages.sass
```
It's purpose is purley to get you started and have something "schmancy" on the screen when it launches. delete it and start writing your very own "schmancy" code for your project.

If you want to use SCSS or LESS feel free to make that change in the file types and update the gulpfile to look for the right file types also.


Feel free to add onto this project by forking it and making it your own, This is just a basic start but work for most basic project without a lot of fancy bells and whistles.

Cheers 👍🏼

├──**build** <br/>
|    ├──**assets** <br/>
|    ├──**css** <br/>
|    ├──**img** <br/>
|    ├──**js** <br/>
|    └──**css** <br/>
|----*index.html*





## OOCSS (Object/Module Oriented CSS)
* Identify the Objects or the Modules
    >   .a
        .a_header
        .a_content
        .a_footer

    >


## BEM Method(Block Element Modifier Method)
* Don't Use id for Chaining
    eg: #a_header
* Don't use CSS Chaining
    .a .a_header
    .a > .a_header
* Can use Multiple classes
    .a.a_header
    (Use &)
* Can use grouping
    a_header, a_footer
    (Use @extend)

* Block
* Block--modifier
* Block__element
* Block__element--modifier
* Block__element__subelement
* Block__element__subelement--modifier

.btn
.btn--state-success
.btn--state-danger



## SMACSS(Scalable Modular Architechture for css)
* Base => no id/classes, all applies to html
* Layout => big page sections 
    eg: .header, .sidebar etc
* Modules => reusable,encapsulated modules
* State => overrides defaults
    eg: .is-opened
* Theme => optional, if theme needed


## CSS naming and css lint rules
* No capital names
* css prefixed classes
    eg: .article module as .a
* dont use !important

## My Structure (SMACSS)
* Globals
    _01-variables
    _02-functions
    _03-mixins
    _04-normalize
    _05-base
    _06-common
    _07-responsive
* Sections
    01-menu
    02-header
    03-article
    04-footer
* main.sass