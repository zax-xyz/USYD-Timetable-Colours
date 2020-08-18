// ==UserScript==
// @name         USYD Timetable Colours
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Colour code USYD timetables
// @author       Michael Vo
// @match        http*://www.timetable.usyd.edu.au/personaltimetable/timetable/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const classColors = {
    Lecture: {
      hue: 0,
      lightness: 60,
    },

    Lab: {
      hue: 240,
      lightness: 60,
    },

    Tutorial: {
      hue: 120,
      lightness: 40,
    },

    'Evaluation Session': {
      hue: 30,
      lightness: 50,
    },

    Seminar: {
      hue: 300,
      lightness: 65,
    },

    'Master Class': {
      hue: 195,
      lightness: 60,
    },

    'Practical': {
      hue: 170,
      lightness: 50,
    },
  };

  // Simply get all the classes on the timetable
  const classes = document.getElementsByClassName('timetable-class');

  for (const elem of classes) {
    // Get title of class, e.g. 'MATH1902 Lecture', 'MATH1902 Tutorial')
    const heading = elem.children[0].innerHTML;

    for (const name in classColors) {
      // Check what type of class we're looking at
      if (heading.includes(name)) {
        // If it matches a type in our dictionary, then set the background colour using the dictionary value
        const params = classColors[name];
        elem.style.background = `hsla(${params.hue}, 100%, ${params.lightness}%, .35)`;
        break // No point checking all the other types
      }
    }
  }
})();
