define(function(){
	var exports = {};
	var IE = document.all?true:false

  	if (!IE) document.captureEvents(Event.MOUSEMOVE)
	exports.getXY = function(e) {
	    if (IE) {
		  X = event.clientX + document.body.scrollLeft
		  Y = event.clientY + document.body.scrollTop
		} else {
		  X = e.pageX
		  Y = e.pageY
		}
		return {x: X, y: Y}
	}
	return exports;
});