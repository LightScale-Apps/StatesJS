Element.prototype.isNodeList = function() {return false;};

NodeList.prototype.isNodeList = HTMLCollection.prototype.isNodeList = function(){return true};

Element.prototype.toggleIndex = 0;

function exists(v) {
	return (typeof v !== 'undefined' && v !== null)
}


Element.prototype.attachStyle = function(stylesheet) {
	for (var styleKey in stylesheet) {
		if( exists(this.style[styleKey]) ){
			this.style[styleKey] = stylesheet[styleKey]
		}
		else if(exists(this[styleKey])) {
			this[styleKey] = stylesheet[styleKey]
		}
	}
}

Element.prototype.attachEvents = function(eventLis, func) {
	eventList = (Array.isArray(eventLis) ? eventLis : [eventLis])
	for (var i = 0; i < eventList.length; i++) {
		currentEvent = eventList[i]
		this.addEventListener(currentEvent, func)
	}
}


Element.prototype.state = NodeList.prototype.state = HTMLCollection.prototype.state = function(attachedState) {
	var elemList = (this.isNodeList() ? [].slice.call(this) : [this])
	
	for (var i = 0; i < elemList.length; i++) {
		var c = elemList[i]
		for (var currentKey in attachedState) {
			(function(currentElement){
				if (currentKey == "style") {
			        currentElement.attachStyle(attachedState.style)
				}
			    else if (currentKey == "toggle") {
					currentElement.attachEvents(attachedState.toggle.events, function(){
			        		currentElement.toggleIndex++
			        		alert("CLICK")
			        		if (currentElement.toggleIndex % 2 == 1) { //active
			        			//if styles exist, apply
			        			exists(attachedState.toggle.active.style) ? (
			        				currentElement.attachStyle(attachedState.toggle.active.style)
			        			) : ("boi")
			        			//if scripts exist, apply
			        			exists(attachedState.toggle.active.script) ? (
			        				attachedState.toggle.active.script(currentElement)
			        			) : ("boi")
			        		}
			        		else {//inactive
				        		if (exists(attachedState.toggle.inactive.style)){
				        			currentElement.attachStyle(attachedState.toggle.inactive.style)
				        		}
			        			if(exists(attachedState.toggle.inactive.script)){
			        				attachedState.toggle.inactive.script(currentElement)
			        			}
			        		}
			        	})
			        }
			        else {
			        	currentElement.attachEvents(currentKey, function(){
			        		if(exists(attachedState[currentKey].style)){
			        			currentElement.attachStyle(attachedState[currentKey].style)
			        		}
				        	if(exists(attachedState[currentKey].script)){
				        		attachedState[currentKey].script(currentElement)
				        	}
			        		
			        	})
			        }
			    })(c)
		}
	}
}

Element.prototype.event = NodeList.prototype.event = HTMLCollection.prototype.event = function(event, state) {
	newState = new Object();
	if(event == "toggle"){
		newState.toggle = {}
		newState.events = state.events,
		newState.toggle.active = {
			style:state.active.style,
			script:state.active.script,
		},
		newState.toggle.inactive = {
			style:state.inactive.style,
			script:state.inactive.script,
		}
	}
	else {
		newState[event] = {
			style:state.style,
			script:state.script
		}
	}
	var elemList = this.isNodeList() ? [].slice.call(this) : [this]
	
	for (var i = 0; i < elemList.length; i++) {
		var c = elemList[i]
		c.state(newState)
	}
}


Element.prototype.style = NodeList.prototype.style = HTMLCollection.prototype.style = function(stylesheet) {
		var elemList = this.isNodeList() ? [].slice.call(this) : [this]
	
	for (var i = 0; i < elemList.length; i++) {
		elemList[i].state({
			style:stylesheet
		})
	}
}
