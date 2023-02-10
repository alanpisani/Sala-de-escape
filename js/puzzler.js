/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

/* *** end jQuery UI Touch Punch *** */

var tileArr = [];
var ansID = ["6","8","1","2","7","4"];
var droppedID = [0,0,0,0,0,0];
var dragThis = 0;
var dropThis = 0;
$(document).ready(function() {
  $(".tile").each(function() {
    $( this ).draggable({
      drag: function( event, ui ) {
        dragThis = ($(this).attr("id"));
      }
    });
  });
  $(".blank").each(function() {
    $( this ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
        dropThis = ($(this).attr("id").substring(2,1)) - 1;
        droppedID[dropThis] = dragThis;
      },
      /*out: function( event, ui ) {
        $( this ).removeClass( "ui-state-highlight" );
        droppedID[dropThis] = 0;
        
    }*/
    });
  
  });
  
  $("button").click(function() {
    var c = 0;
    $(".blank").each(function(obj, value) {
      if ($(this).hasClass("ui-state-highlight")) {
        //do nothing
      } else {
        c++;
      }
    })
      if (c > 0) {
        $("#alert").html("Por favor ubica todas las piezas!");
      } else {
        var w = 0;
        $.each(ansID, function(obj, value) {
          if (value == droppedID[obj]) {
            w++
          }
          if ( w == 6 ) {
             $("#alert").html("Ganaste!");
          } else {
             $("#alert").html("Disculpa...probá de vuelta por favor!");
          }
        });
      }
  })
  
});