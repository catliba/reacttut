# React JS Guide
- React is one of the most widely used JS libraries
- In this guide, we will see how it uses JSX syntax, state, hooks, data fetching, and more
## But what exactly is React?
- React is a front end JavaScript library for building user interfaces
- In React, you do not need to reload the page. Everything works within a single HTML page. Very dynamic.

This is because While browsing the webpage, React updates what we see on a 
### **Document Object Model** 
![DOM](DOM.png) \
React uses Virtual DOM, a JS object that is much faster
- React only updates the section of the page where the change was made
React is a *component based* front end library
- all parts of web app are divided into smaller components
- each a small piece of the user interface

* Every react.js application is a tree of components:
    - independent and reuseable
    - combine it all to become a full fledged application

> for example, a website is split into smaller componenets
> * sidebar
> * searchbar
> * movies
>   - movie name
>   - ratings
> think of it like a tree

## There are two types of components
| Functional Components | Class-Based Components |
| `import React from 'react'` | `import React { Component } from 'react'` |
| used more frequently | outdated |

Both returns something react should display, for example `<div>Hello, React!<div>`\
This is *Stack Syntax* also known as JSX, which is used to describe what the user interface should look like.

# Setting Up
To get started, use create-react-app command. (You need node.js installed) This generates the files required to start React and run it in a browser, like a template.\
> `npx create-react-app ./`
> This installs the primary react packages

> `npx start`
> Runs the app on localhost3000

## Other files and folders
* *package.json* : all the dependencies & packages 
* *node_modules* : where the npm packages are installed
* *public* : one html file with an id of root. Everything is loaded onto that file
* *src* : where all our logic is stored
    * *index.html* : a single div with an id of root
    * *index.js* : `react-dom` is used to reden out components & entire application into the real dom with a div with the id of `root`
    * *App.js* : functional component in JSX.