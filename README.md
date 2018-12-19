<img src='./src/assets/images/lingomd-horiz-colorlogo-06.png'>

# LingoMD

#### Independent capstone project for Epicodus, 11.30.18

#### By Nikki Wong

## Table of Contents
* <a href='https://github.com/nikkiawong/lingomd#description'>Description</a>
* <a href='https://github.com/nikkiawong/lingomd#planning'>Planning</a>
* <a href='https://github.com/nikkiawong/lingomd#setup-on-osx'>Setup on OSX</a>
* <a href='https://github.com/nikkiawong/lingomd#development-server'>Development server</a>
* <a href='https://github.com/nikkiawong/lingomd#technologies-used'>Technologies Used</a>
* <a href='https://github.com/nikkiawong/lingomd#notes'>Notes</a>
* <a href='https://github.com/nikkiawong/lingomd#license'>License</a>

## Description

<strong>Name of Student:</strong> Nikki Wong

<strong>Name of Project:</strong> LingoMD

<strong>Project's Purpose or Goal:</strong> This application is intended to help immigrants and other individuals whose first language is not English to find physicians and other healthcare providers who speak their native language in their area.

<strong>Absolute Minimum Features:</strong>
* Users can search for a doctor by keyword
* Users can narrow down results by geographic location
* Search queries call the BetterDoctor API to provide and filter data

<strong>Tools, Frameworks, Libraries, APIs, Modules and/or Other Resources To Be Used:</strong>
* Redux
* React
* BetterDoctor API

<strong>Additional Features/Stretch Goals:</strong>
* Map view of results using Google Maps API or another maps REST API
* Users can narrow down results by language(s) spoken
* Well-developed user interface/design
* Implementation of a web translator to auto-translate the site into other languages

<strong>Additional Tools, Frameworks, Libraries, APIs, or Other Resources For Additional Features:</strong>
* Google Maps or another maps REST API
* SASS
* Animate on Scroll library
* Google Translate API

## Planning

### Sketches

#### Landing Page
<img src='./src/assets/images/landing2.jpg'>

#### Results Page
<img src='./src/assets/images/results.jpg'>

#### Results Detail Page
<img src='./src/assets/images/detail.jpg'>

### Lo-fi Wireframes

#### Landing Page
<img src='./src/assets/images/landing-page-lofi2.png'>

#### Results Page
<img src='./src/assets/images/results-lofi.png'>

#### Results Detail Page
<img src='./src/assets/images/detail-lofi.png'>

### Annotated Wireframes

| Landing Page  | Results Page | Details Page |
| ------------- | ------------- | ------------- |
| <img src='./src/assets/images/landing-lofi-ann2-01.png'>  | <img src='./src/assets/images/results-lofi-ann-01.png'>  | <img src='./src/assets/images/detail-lofi-ann-01.png'>  |

### Hi-fi Wireframes

#### Landing Page
<img src='./src/assets/images/landing-hifi2.png'>

#### Results Page
<img src='./src/assets/images/results-hifi-v2.png'>

#### Results Detail Page
<img src='./src/assets/images/detail-hifi.png'>

### Component Tree

<img src='./src/assets/images/lingomd-componentsv2-01.jpg'>

## Setup on OSX

* Clone this repository
* Run `npm install`
* Create .env file in root directory
  * REACT_APP_API_KEY=[your BetterDoctor API key]
  * REACT_APP_GEOCODE_API_KEY=[your Google Geocode API key]

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Technologies Used

* React
* Babel
* Webpack

## Notes
As a result of a lack of accurate data within the API in regard to languages spoken by health care providers, I opted to leave out the functionality to filter by language as there would be too few results to display.

## License

Copyright (c) 2018 **Nikki Wong**
