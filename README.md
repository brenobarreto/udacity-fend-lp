# Landing Page Project

Author: Breno Barreto

This project is a Landing Page that builds the navigation menu dynamically.
This is part of the Udacity Front-End Development Nanodegree.

## Scrolling

The original project has been changed to incorporate **scrolling** to sections.

So, now, when the user clicks a navigation item, the website scrolls automatically to that section.

## Nav Bar

The project now also dynamically populates the **nav bar** following any additional sections.

This means that every new section added to the HTML automatically adds a navbar item through JavaScript.

## Active section

The currently active section receive the class `active-class`, whith is added through the method `classList.add` to both the navbar item and the section itself. The CSS rules use this class to differentiate the currently active section and navbar item.

## Files

The project has three files:
- /index.html
- /js/app.js
- /css.styles.css