# The Perfect Pour Frontend
Frontend application for keeping track of homebrews. Allows the user to create recipes, start brews and keep track of a brew's progress. Also contains a calculations page that has many useful homebrewing calculators
## Framework
Uses [ReactJS](https://reactjs.org/) with functional components and hooks. 

## Styling
*/src/styles*

Uses [SASS](https://sass-lang.com/). Variables for colors and fonts are defined under *_variables.scss*. All other styling is contained in *main.scss* with a focus on re-use and nesting. Fonts need to be manually installed at this time. Later implementation will contain automatic font distribution. The proper heading font is [Backslash](https://www.myfonts.com/fonts/silverdav/backslash/), and the proper normal text font is [Swansea](https://www.fontspace.com/swansea-font-f5873).



## Assets
*/src/assets/*

All image, svg or other files.

## Data
*/src/data/*

Any long form object or text data.

## Functions
*/src/functions/*

Calculator functions and re-usable functional logic (not having to do with button presses - this can be handled in the internal components)

## Testing
*/src/tests*

Uses [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for **unit testing** ``npm run docs``

## Docs
*/docs*

JSDoc automatically generated documentation.