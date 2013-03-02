define(["angles"], function(angles){
	var exports = {};
	var Elem = function(el,type){
		this.el = $(el);
		this.y = this.el.position().top + this.el.height()/2;
		this.x = this.el.position().left + this.el.width()/2;
		this.type = type;
		this.refreshPos = function(){
			this.y = this.el.position().top + this.el.height()/2;
			this.x = this.el.position().left + this.el.width()/2;
		}
	}

	var lightSource = null;
	var shadEls = [];
	var minBlurDist = 50;

	exports.setSource = function(el){
		lightSource = new Elem(el,"source");
	}

	exports.addShad = function(el,type){
		shadEls.push(new Elem(el,type));
	}

	exports.render = function(el){
		lightSource.refreshPos();
		shadEls.forEach(function(shad){
			
			var angle = angles.calcAngle(lightSource,shad);
			var sX = Math.round(10 * Math.sin(angle));
			var sY = Math.round(10 * Math.cos(angle));
			var dist = Math.sqrt(Math.pow(shad.y-lightSource.y,2)+Math.pow(shad.x-lightSource.x,2));
			var blur = 1
			if(dist > minBlurDist){
				blur = dist/minBlurDist;
			}
			shad.el.css(shad.type+'-shadow',((blur/3)*sY)+"px "+((blur/3)*sX)+"px "+blur+"px #aaa");
		});
	}
	return exports;
});
