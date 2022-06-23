# React JS Guide
- React is one of the most widely used JS libraries
- In this guide, we will learn about React and how it utilizes JSX syntax, state, hooks, data fetching, and more
## But what exactly is React?
- React is a front end JavaScript library for building user interfaces
- In React, you do not need to reload the page. Everything works within a single HTML page. Very dynamic.

This is because While browsing the webpage, React updates what we see on a 
### **Document Object Model** 
![DOM](images/DOM.png) \
React uses Virtual DOM, a JS object that is much faster
- React only updates the section of the page where the change was made
React is a ***component based*** front end library
* All parts of web app are divided into smaller components
    - Each component is a small piece of the user interface
* Every react.js application is a tree of components:
    - independent and reuseable
    - combine it all to become a full fledged application

> for example, a website is split into smaller componenets
> * sidebar
> * searchbar
> * movies
>   - movie name
>   - ratings \
> think of it like a tree

## There are two types of components
Functional Components | Class-Based Components 
----- | --------
`import React from 'react'` | `import React { Component } from 'react'` 
used more frequently (the one we will use) | outdated 

We are importing React to be able to use the entirety of its library \ 
Both returns something react should display, for example `<div>Hello, React!<div>`\
Why are we returning HTML? \
This is *Stack Syntax* also known as JSX, which is used to describe what the user interface should look like.

# Setting Up
To get started, use create-react-app command. (You need node.js installed) This generates the files required to start React and run it in a browser, like a template.\
> `npx create-react-app ./` \
> This installs the primary react packages

> `npx start` \
> Runs the app on localhost3000

## Other files and folders
* *package.json* : file with all the dependencies & packages 
* *node_modules* : folder where the npm packages are installed
* *public* : folder containing one html file with an id of root. Everything is loaded onto that file
* *src* : important folder where all our logic is stored
    * *index.html* : file containing a single div with an id of `root`. All of our React components inside of this div. To explore that, we go into index.js
    * *index.js* : File and the starting point of every React application. Inside, there is `react-dom` which is used to reder our components & entire application into the real dom with a div with the id of `root`
    * *App.js* : a file where we have a functional component with code written in *JSX*. 

## JSX properties
#### this is done within App.js file
* `<div className = 'App'>` note that usually in html, you would write class, but it is a reserved keyword in JS so we use `className`
* Inside `{}`, you can put any JS expression. Very dynamic.
    - for example, `{2+2}` would turn out as 4 on the webpage.
    - like this, we can dynamically render larger blocks of code
* Rule of React: when rendering two different elements, one adjacent of other, you need to wrap it in a React fragment
    - React fragments are like an empty div:
    ``` JSX
        <>  //these are the react fragments
        <h1> Test </h1>
        <h2> There is no test </h2>
        </> // <---
    ```
![jsxdemonstration](image/jsxdemonstration.png)

# Components
We can create many components & import into larger components. Think of components like a function. \
Example,\
```JSX
    const Person = () => {
        return (
            <>
            <h1>Name: Caleb</h1>
            <h2>Last: Li</h2>
            <h2>Age: 19</h2>
            </>
        )
    }
```

You can inject this into App in App.js with the following:
```JSX
    const App = () => {
        return (
            <div className='App'>
                <Person />
            </div>    
        );
    }
```

Doing so, it shows up on the webpage like so:\
![componentexample](images/componentexample.png)\
Like functions, we can use it multiple times:\
```JSX
    const App = () => {
        return (
            <div className='App'>
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
            </div>    
        );
    }
```

Outputs:\
![componentexample5](images/componentexample5.png)\
#### Notice how they are all identical. What if we wanted they to output different things?
# Props
#### Every component has built in `props` object
Changing the code from before, we can use a placeholder instead of an actual name. So in the Person component we've created previously, \
```JSX
    const Person = (props) => {
    return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
    )
}
```

![props](images/props.png)\
To populate each reference, within the App component,
```JSX
    <Person name={'John'} lastname={'Doe'} age={'30'}>
```
Note that `{}` are not necessary unless you are passing in a dynamic expression such as `{2+2}` \
Now we have duplicates, but different. Yay.

# State `import { useState } from 'react'`
