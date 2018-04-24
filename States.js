StatesJS = {
	style: function(Element, Styles) { // style function
		for (var sKey in Styles) { // loop through keys
			if (sKey in Element.style) {//if it's a style key...
				Element.style[sKey] = Styles[sKey]
					//set that property to the elements
			} else if (sKey in Element) { //otherwise
				Element[sKey] = Styles[sKey] //set the property
			}
		}
	}
} //master object containing the backend functions

NodeList.prototype.style = function(Styles) {
	for (var i = 0; i < this.length; i++) { // loop through all elements
		StatesJS.style(this[i], Styles) // style them accordingly
	}
}
HTMLCollection.prototype.style = function(Styles) {
	for (var i = 0; i < this.length; i++) { // loop through all elements
		StatesJS.style(this[i], Styles) // style them accordingly
	}
}
	// user accesible "style" functions

NodeList.prototype.event = HTMLCollection.prototype.event = function(Event, Styles) {
	for (var i = 0; i < this.length; i++) { // loop through elements
		this[i].addEventListener(Event, function(){ // add event
			StatesJS.style(this, Styles.style) // style accordingly
			Styles.script(this) //run scripts
		})
	}
}
	// user accesible "event" functions
	
NodeList.prototype.state = HTMLCollection.prototype.state = function(State) {
	for (var i = 0; i < this.length; i++) { // lopp through elements
		if ("style" in State) StatesJS.style(this[i], State["style"])
			//style on initialization
		for (var Key in State) { // loop through keys
			if (Key != "style") {// if valid key...
				this[i].addEventListener(Key, function(e){//add event...
					StatesJS.style(this, State[e.type].style);
						//style accordingly
					State[e.type].script(this)
						//run scripts
				})
			}
		}
	}
}

String.prototype.style = function(Styles) {
	document.querySelectorAll( this ).style(Styles)
		//query the document and call the style command
}
	// style function for use with raw string query
String.prototype.event = function(Event, Styles) {
	document.querySelectorAll( this ).event(Event, Styles)
		//query the document and call the event command
}
	// event function for use with raw string query
String.prototype.state = function(State) {
	document.querySelectorAll( this ).state(State)
		//query the document and call the event command
}
	// state function for use with raw string query
String.prototype.toggle = function(State) {
	document.querySelectorAll(this).toggle(State)
		//query the document and call the toggle command
}
	// toggle function for use with raw string query
