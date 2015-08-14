#!/usr/bin/env node

var workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'nutella-scrape',
    title       : 'Nutella Scraper',
    subtitle    : 'Learn how to scrape webpages with Node.js',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})