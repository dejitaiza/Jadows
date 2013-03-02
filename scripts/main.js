require(["jquery", "./shads","./mouse"], function($, shads, mouse) {
    $(function() {
        shads.setSource("#source");
        shads.addShad("#block","box");
        shads.addShad("#block2","box");
        shads.addShad("#block3","box");
        shads.addShad("#titre","text");
        shads.addShad("#texte","text");
        shads.render();
        document.onselectstart = function(e){
        	return false;
        }
        $("#source").on("mousedown", function(){
        	$("#source").css('cursor','-webkit-grabbing !important');
        	document.onmousemove = function(e){
        		var mousePos = mouse.getXY(e);

        		$("#source").css('left',mousePos.x - 20);
        		$("#source").css('top',mousePos.y - 20);
        		shads.render();
        	}
        });
        $("#source").on("mouseup", function(){
        	document.onmousemove = function(e){
        	}
        	shads.render();
        });

    });
});
