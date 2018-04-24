# StatesJS

### StatesJS is a small JS framework for easily handling DOM events. StatesJS allows you to attach events, handle styles for events, and style elements with JavaScript

## Getting Started

StatesJS is a JS framework for Web Developement. To use StatesJS on your website, simply include
```
<script src="https://raw.githubusercontent.com/LightScale-Apps/StatesJS/master/States.js"></script>
```

at the bottom of every HTML document you would like to use StatesJS on.


## Tutorial

There are many ways to apply states to an HTML Element (or NodeList).

### Step 1: Select Elements

Select a NodeList or HTMLCollection.

This can be a variable, that you already have in your code, or a ```document.querySelectorAll()``` command.

Due to space restrictions, StatesJS does not work with raw elements, so make sure to apply the commands to a NodeList or HTMLCollection.

#### Raw String Queries

StatesJS does have a built in selector to its functions, so to skip the long query commands, you can just apply the StatesJS directly to the selector string.

For example, use ```"div.class .nested-class".event()``` 
instead of ```document.querySelectorAll("div.class .nested-class").event()```

### Step 2: Attach States

There are two ways to attach states to HTML elements. The state method, and the event method.

#### The Event Method

```elem.event(event, state)```

The event argument is a string that is either a valid event in the addEventListener function. 
The state argument is a JavaScript Object containing a style key and/or a script key.

An example (using StatesJS Raw String Query) is illustrated below.

```
"element.class".event("click", {
    style:{
        color:"red"
    },
    script:function(self){
        alert("CLICKED!")
    }
}
```

##### Style Key:

The first key, style, is a JavaScript Object containing any valid CSS declaration. Be aware, however, that the JavaScript style syntax is slightly different from CSS syntax. 

JavaScript has to be camelCased, for example. 

```fontSize:``` instead of ```font-size:```

JavaScript also has to include quotes 

```fontSize: "16px"``` instead of ```font-size: 16px```

And finally, JavaScript has to be comma seperated, not semicolon sperated.

```fontSize: "16px",``` instead of ```font-size: 16px;```

(For more Info, scroll down to 'The Style Method')

##### Script Key:

The script key contains a function with one argument, ```self```. Any JavaScript code in the script function will be run whenever the event fires. You can use the variable 'self' to refer to the element that the event was activated on.

Example HTML

 ``` 
    <div class="select" id="one">
    </div>
    
    <div class="select" id="two">
    </div>
    
    <div class="select" id="three">
    </div>
```
    
JavaScript:


```
get(".select").event("click", {
    style:{
        color:"red"
    },
    script:function(self){
        alert(self.id)
    }
}) 
```

Because every div has the class select, the "click" event will be applied to all of them. However, when the event occurs, only the element that was clicked will be turned red. This will also apply to the script function, alerting only the id of the element that was clicked.

### The State Method

You can also use the state method to attach states to HTML elements.

For example:


```
var nodeList = document.querySelectorAll("div *");

nodeList.state({
    mouseover:{   
        style:{
            color:"red"
        },
        script:function(self){
            alert(self.id)
        }
    }
})
```

The state method takes only one argument, state, which is a JavaScript Object very similar to the event method's state.
The only difference is that with the event method you specify the event, and then provde a style and script, but with the state method, you have the event as a key and the associated style and script inside of it. (Note: an event does not need to contain both script and style declarations)

The first example with the event method could be rewritten using the state method like so:

```
"element.class".state({
    click:{
        style:{
            color:"red"
        },
        script:function(self){
            alert(self.id)
        }
    }
}) 
```

With the state method, you can also apply styles directly to the element:

```
document.querySelectorAll("p.red").state({
    ...
    style:{
        color:"red
    }
})
```

And add multiple events:
```
".select".state({
    click:{
        ...
    },
    mouseover:{
        ...
    }
})
```

### The Style Method

The style method is used to apply styles directly to an HTML element, without any events needing to be triggered. The style method takes only one argument, stylesheet. The stylesheet is the exact same as the styles in the event and state method's style declarations, except you leave out the syle key.

Example:

```
".select".style({
    color:"red",
    fontSize:"12px"
})
```

Because the styles are being set with JavaScript, you can use all of JavaScript's features. For example,

Functions:

```
function getColor(type){
    if (type == "text") {
        return "red"
    }
    else if (type == "background") {
        return "blue"
    }
}
".select".style({
    color: getColor("text"),
    backgroundColor: getColor("background")
})
```

Variables:

```
var fontSize = "16px"

"select".style({
   fontSize: fontSize
})
```

and Math: 

```
maxHeight = 78
minHeight = 12
".select".style({
    height: (1 + (maxHeight - minHeight) * 2).toString() + "px"
})
```
(Keep in mind, everything must be a string, so we used the toString() method to convert our number to a string)


There are many more things that you can do with JavaScript style setting, such as using conditional logic,

```
fontSize: (windowSize > 18 ? "16px" : "6px")
```

For and while loops, and many more. JavaScript style setting is like the most functional CSS Preprocessor ever.

JavaScript style setting also can have access to HTML Elements direct properties. (such as innerHTML, className and even custom properties)

For example:

```
Element.prototype.customProp = 0

".select".style({
    customProp: 7,
    innerHTML: "Show",
    className: "class1 class2 class3"
})
```

We defined a custom property called 'customProp' and set that to 7, and used the properties 'innerHTML' and 'className' to set their values.


### StatesJS Custom Events

## Versioning

Current Version: *1.0*

Under Developement: *1.0.1*

## Authors

* **Ryan Hillis** - *Initial work*



