# StatesJS

### StatesJS is a small JS framework for easily handling DOM events. StatesJS allows you to attach events, handle styles for events, and style elements with JavaScript

## Getting Started

StatesJS is a JS framework for Web Developement. To use StatesJS on your website, simply include
```
<script src="https://raw.githubusercontent.com/LightScale-Apps/StatesJS/master/States.js"></script>
```

in the header of every HTML document you would like to use StatesJS on.


### Examples

StatesJS use JavaScript Object Notation to define an HTML elements state. 
For example, to color something red when it is clicked:

```
document.querySelectorAll(".element").event("click", {
  style:{
    color:"red"
  }
}
```



## Versioning

Current Version: *0.8.0*

## Authors

* **Ryan Hillis** - *Initial work*


