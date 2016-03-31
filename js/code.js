//Initializing waypoint
var currentWaypoint = 0
var waypoint = [] 
var animate = false;


waypoint.push(
	new Waypoint({
		element: document.getElementById('myself'),
		group: "slides",
		handler: function(direction) {
/*				$('html, body').animate({scrollTop:this.element.offsetTop+"px"}, 'very-slow');
*/	  	},
	  	offset: '100%'
	})
)

waypoint.push(
	new Waypoint({
		element: document.getElementById('formation'),
		group: "slides",
		handler: function(direction) {
/*				$('html, body').animate({scrollTop:this.element.offsetTop+"px"}, 'very-slow');
*/	  	},
	  	offset: '100%'
	})
)
waypoint.push(
	new Waypoint({
		element: document.getElementById('skills'),
		group: "slides",
		handler: function(direction) {
			/*if(direction=="down")
			{
				$('html, body').animate({scrollTop:this.element.offsetTop+"px"}, 'very-slow');
			}
			else{
				$('html, body').animate({scrollTop:this.previous().element.offsetTop+"px"}, 'very-slow');	
			}*/
		},
	  	offset: '100%'
	})
)
waypoint.push(
	new Waypoint({
		element: document.getElementById('experiences'),
		group: "slides",
		offset: '100%',
		handler: function(direction) {
		console.log(direction)
		/*	if(direction=="down")
			{
				$('html, body').animate({scrollTop:this.element.offsetTop+"px"}, 'very-slow');
			}			
			else{
				$('html, body').animate({scrollTop:this.previous().element.offsetTop+"px"}, 'very-slow');	
			}	*/ 		 	
		}
	})
)

waypoint.push(
	new Waypoint({
		element: document.getElementById('hobbies'),
		group: "slides",
		offset: '100%',
		handler: function(direction) {
			/*if(direction=="down")
			{
				$('html, body').animate({scrollTop:this.element.offsetTop+"px"}, 'very-slow');				
			}
			else{
				$('html, body').animate({scrollTop:this.previous().element.offsetTop+"px"}, 'very-slow');	
			}	*/ 	
		}
	})
)


$(window).bind('mousewheel DOMMouseScroll', function(event) 
{
	if(!animate)
    { 
	    animate = true;
	   	if (event.originalEvent.wheelDelta >= 0 || event.originalEvent.detail < 0) 
	   	{
	   		if(currentWaypoint >= 1)
	   		{
	   			currentWaypoint--
	   			console.log("currentWaypoint : "+currentWaypoint)
	   		}
	   	}
	    else 
	    {
	       	if(currentWaypoint < waypoint.length-1 )
	       	{
	        
	        	currentWaypoint++
	        
	        }
	        
	        console.log("currentWaypoint : "+currentWaypoint)
	       	
	       	}
	       	
	       	$('html, body').animate({scrollTop:waypoint[currentWaypoint].element.offsetTop+"px"}, "slow","swing", function(){
	       		animate = false;
	       	});
   }
})

$.stellar();
//i = waypoint


