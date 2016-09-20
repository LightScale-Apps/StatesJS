# StatesJS

### StatesJS is a small JS framework for easily handling DOM events. StatesJS allows you to attach events, handle styles for events, and style elements with JavaScript

## Getting Started

StatesJS is a JS framework for Web Developement. To use StatesJS on your website, simply include
```
<script src="https://raw.githubusercontent.com/LightScale-Apps/StatesJS/master/States.js"></script>
```

in the header of every HTML document you would like to use StatesJS on.


## Examples

There are many ways to apply states to an HTML Element (or NodeList).

### Step 1: Select Elements

Use the 'get()' method to select an element in the DOM using CSS selectors.

```get(nav > .class.second-class .nested-class)```

### Step 2: Attach States

There are many ways to attach states to an HTML element.
If you only want to attach a state for a certain event, use the event method.

```elem.event(event, state)```

The event argument is a string that is either a valid event in the addEventListener function, or a StatesJS custom event (such as toggle). The state argument is a JavaScript Object containing a style key and/or a script key.

An example is illustrated below.

```
get(".element").event("click", {
    style:{
        color:"red"
    },
    script:function(self){
        alert("CLICKED!")
    }
}
```

#### Style Key:

The first key, style, is an object literal containing any valid CSS declaration. Be aware, however, that the JavaScript styke syntax is slightly different from CSS syntax. 

JavaScript has to be camelCased, for example. 

```fontSize:``` instead of ```font-size:```

JavaScript also has to include quotes 

```fontSize: "16px"``` instead of ```font-size: 16px```

And finally, JavaScript has to be comma seperated, not semicolon sperated.

```fontSize: "16px",``` instead of ```font-size: 16px;```

#### Script Key:



## Versioning

Current Version: *0.7.0*

Under Developement: *0.8.0 beta*

## Authors

* **Ryan Hillis** - *Initial work*


