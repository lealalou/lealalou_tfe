var targets = $(".target");
var overlapThreshold = "50%"; 

// go through all the draggable objects and store their starting positions
// so can return to them when dragged off the targets

var boxes = $(".box");
$.each(boxes, function(i,e)
{
  var position = $(e).offset();
  e.originalLeft = position.left - 8;
  e.originalTop = position.top - 8;
});

Draggable.create(".box", {
  bounds:"#content_drag",
  edgeResistance:0.65,
  type:"top,left",
  throwProps:true,
  onDragStart:function(e) {
    
  },
  
  
  // changes the colour of the targets whilst dragging to give feedback that a
  // dragged object is going to snap to it
  onDrag:function(e) {
    for(var i=0; i<targets.length;i++){
      if (this.hitTest(targets[i], overlapThreshold)) {
        var pos = $(targets[i]).position();
        var posTop = pos.top;
        var posLeft = pos.left;
        TweenMax.set(this.target, {top: posTop, left: posLeft, x: 0, y: 0});
        console.log(this.target);
         TweenMax.fromTo(this.target, 1, {top: posTop, left: posLeft, x: 0, y: 0}, {scale: 5, onComplete: function() {
          TweenMax.to(this.target, 3, {y: '-1000px', alpha: 0});
         }});
         $(targets[i]).addClass("showOver");
       } else {
         $(targets[i]).removeClass("showOver");
         TweenMax.to(this.target, 1, {scale: 1});
       }
    }
  },


  
  onDragEnd:function(e) {
    var snapMade = false;
    for(var i=0; i<targets.length;i++){
      if(this.hitTest(targets[i], overlapThreshold)){
        
        // only snap to an available target, i.e. 
        // one without a class of "occupied"
       	if(!$(targets[i]).hasClass("occupied")){
          
          // get the position of the target so can move 
          // dragging item exactly on it when released
          var p = $(targets[i]).position();
          
          // add a class of occupied to target to stop other items
          // being snapped to it
        	$(targets[i]).addClass("occupied");
          
          // tween onto target
        	TweenLite.to(e.target,0.1, {left:p.left, top:p.top, x:0, y:0});
          
          // is a property called targetAttachedTo directly on the dragged item.
          // this stores the target we have snapped to.  Allows us to free up
          // the target if we drag it off it
          
          // before we update that property first checks that we haven't dragged 
          // from one target straight to another as this would balls it up
          if(e.target.targetAttachedTo!=$(targets[i]) && e.target.targetAttachedTo!=undefined){
            e.target.targetAttachedTo.removeClass("occupied"); e.target.targetAttachedTo = undefined;
          }
          
          // now store new target in targetAttachedTo property
         	e.target.targetAttachedTo = $(targets[i]);
        	snapMade = true;
        }
        
      }
    }
    
    // if the dragged item isn't over a target send it back to its
    // start position
    if(!snapMade){
      if(e.target.targetAttachedTo != undefined){
        e.target.targetAttachedTo.removeClass("occupied");
      };
     TweenLite.to(e.target,0.1, {x:0, y:0, top:e.target.originalTop, left:e.target.originalLeft});
    }
  }
})