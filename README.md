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

```get("nav > .class.second-class .nested-class")```

### Step 2: Attach States

There are two ways to attach states to HTML elements. The state method, and the event method.

#### The Event Method

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

The script key contains a function with one argument, self. Any JavaScript code in the script function will be run whenever the event fires. You can use the variable 'self' to refer to the element that the event was activated on.

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

#### The State Method

You can also use the state method to attach states to HTML elements.

For example:


```get(".selector").state({
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
get(".select").state({
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
get(".select").state({
    ...
    style:{
        color:"red
    }
})
```

And add multiple events:
```
get(".select").state({
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
get(".select").style({
    color:"red",
    fontSize:"12px"
})
```

Because the styles are being set with JavaScript, you can use all of JavaScript features. For example,

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
get(".select").style({
    color: getColor("text"),
    backgroundColor: getColor("background")
})
```

Variables:

```
var fontSize = "16px"

get(".select").style({
   fontSize: fontSize
})
```

Math: 

```
get(".select").style({
    height: maxHeight 
})
```




## Versioning

Current Version: *0.7.0*

Under Developement: *0.8.0 beta*

## Authors

* **Ryan Hillis** - *Initial work*


