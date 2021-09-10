Intro

In the Intro to Functional Components lesson, you saw the following React basics:

    How to define components as functions
    How to return a function component's UI defined using JSX
    How to pass props to components
    How to access the properties on props within a component

The minimum requirements are a deliverable.
Minimum Requirements

    Define each component in its own file. The naming convention to use for a component's file is UpperCamelCase also known as Pascal Case, for example, a <CodeSandbox> component's file would be named CodeSandbox.js (CodeSandbox.jsx also works).
    Export each component from its module. For example:

// CodeSandbox.js

 

 import React from 'react';

 

 function CodeSandbox(props) {

   return (

     <div>

       <h1>CodeSandbox</h1>

     </div>

   );

 }

 

 // Must export the component's function (or class)

 export default CodeSandbox;

    Define the following components as functions and code them such that they fulfill their responsibilities:

Component
	

Responsibilities

<FloorPlan>
	

Rendered by <App>.

Renders the following components:

- A <Kitchen> component
- A <LivingRoom> component
- Three <Bedroom> components
- Two <Bath> components
Render the components in any order you wish to make the floor plan more interesting.

<Kitchen>
	

Renders the text "Kitchen" and the following components:

- A <Oven> component
- A <Sink> component

<LivingRoom>
	

Renders the text "Living Room"

<Bedroom>
	

Accepts a bedNum prop and renders the text "Bedroom [bedNum]" (substituting the value of the bedNum prop)

<Bath>
	

Accepts a size prop and renders the text "[size] Bath", i.e., "Half Bath", "Full Bath"

<Oven>
	

Renders the text "Oven"

<Sink>
	

Renders the text "Sink"

Add the following CSS inside of styles.css to style each component's wrapping <div> to make it easier to visualize the components:

        div {

        border: 1px solid grey;

        margin: 5px;

        padding: 5px;

        }

With the minimum requirements complete, the output should resemble:

Hints

    If a component accepts a prop, that prop must be passed to it by the component that renders it, in other words, parent components pass props to their children components.

Bonus

Style the components to make the output look like a floor plan:

Hints

    Use className and/or id on React Elements (<div>, <p>, <span>, etc.) to apply CSS styling using CSS rules in the styles.css module.
    Styling the <FloorPlan> component as a CSS Grid is a great way to layout its children (grid items).
    Use props being passed in to generate a unique id on an element that can be used to target that element for custom styling. For example:
     <div className='bedroom' id={`bed-${props.bedNum}`}>
    Would result in this <Bedroom> having a wrapping <div> like:
     <div class="bedroom" id="bed-2">
    if it was rendered as:
     <Bedroom bedNum={2} />


