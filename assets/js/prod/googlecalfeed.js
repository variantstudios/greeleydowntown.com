


var calendarID = "osrm45bqrvut531hkcdocud3os@group.calendar.google.com";
var activate = 0;
var todaysDate = new Date();

var classy = "primary"; 
var extras = "firstThree"; 
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var monthN = new Array(12);
monthN[0] = "January";
monthN[1] = "February";
monthN[2] = "March";
monthN[3] = "April";
monthN[4] = "May";
monthN[5] = "June";
monthN[6] = "July";
monthN[7] = "August";
monthN[8] = "September";
monthN[9] = "October";
monthN[10] = "November";
monthN[11] = "December";

function heyGoogle (date) {
	"use strict";
	
	var offset = 7;
	
	date.setDate(date.getDate() - offset);

	
	var today = new Date();
		var todayM = today.getMonth()+1;
		var todayD = today.getDate();
		var todayY = today.getFullYear();
	 var todayF = todayM + "/" + todayD + "/" + todayY;
	console.log(todayF);
 // console.log(date + " " + sixDate);


		var year = date.getFullYear();
	var day = date.getDate();
	var month = date.getMonth()+1;
	
	//	var tomorrow = day + 7;


	var tomorrow = new Date(date.valueOf() + 1000*60*60*24*100);

	var tomorrowYear = tomorrow.getFullYear();
	var tomorrowDay = tomorrow.getDate();
	var tomorrowMonth = tomorrow.getMonth()+1;
	
	
	var d = year + "-" + month + "-" + day + "T00:00:00-07:00";
	var e = tomorrowYear + "-" + tomorrowMonth + "-" + tomorrowDay + "T00:00:00-07:00";
	

	var count = 0;
	var t = 993268800000;
	var dayCount = 1;
		$.ajax({
			url: "https://www.googleapis.com/calendar/v3/calendars/"+calendarID+"/events?orderBy=startTime&singleEvents=true&timeMax=" + e + "&timeMin=" + d +"&key=AIzaSyBMCMV4gOpk_1lLXB4gSw9EMHbiVC60_Vw",
			dataType: 'json',
			type: 'get',
			cache: false,
			success: function(data) {
			
				$(data.items).each(function(index, value){
				

							var defaultLocal = " ";
							var dateVar = value.start.dateTime ;
							var start = new Date(dateVar);
					 
						
							var checkDateM = start.getMonth()+1;
							var checkDateD = start.getDate();
							var checkDateY = start.getFullYear();
							var checkDateF = checkDateM + "/" + checkDateD + "/" + checkDateY;
					//		console.log("Check Day F: " +checkDateF);
							
					
						var startCheck = jQuery.trim(start).substring(0,10);

								var shortStart = jQuery.trim(start).substring(15,21);
						
					
							var dayName = weekday[start.getDay()];
							var monthName = monthN[start.getMonth()];	
							var dayYear = start.getFullYear();
							var dayDay = start.getDate();
							var fancyDate = dayName + "<br />" + monthName + " " + dayDay + ", " + dayYear;
						//		Wed Aug 09 2017 14:00:00 GMT-0400 (EDT)	
						
							var buildTheDate = checkDateD + " " + monthName + " " + checkDateY + " 00:00:00 UTC";
							var checkStart = Date.parse(buildTheDate);
						
					var startHour = start.getHours();
						if (startHour > 12) {startHour = startHour - 12;}
					var startMin = start.getMinutes();
						if (startMin === 0) {startMin = "00";}
					var startTime = startHour + ":" + startMin;
					
					
// 					 January 1970 00:00:00 UTC
					
					
				// 	dateString= Date.parse(dateString).getTime();
							var n = checkStart.toString();
					console.log("N: " + n + " Build: " + buildTheDate + " Start: " + start);
					//		console.log("N: " + n);
						//	$("#rowing").append("<h2 style='color: red;'>This is from the script!" + checkStart + "</h2>");	
					if ((t < n) && (value !== false)) {
						count = 0;
						if (dayCount > 0 ){ $('#mainList' + dayCount);}
						dayCount++;
						
						$('#rowing').append("<div class='wrapper' id='wrapper" + dayCount + "' style=''><ul  class='dayContainer' id='mainList" + dayCount + "'><li class='header item' id='todayHeader'>" + fancyDate +  "</li><div id='items'>");
						if (todayF === checkDateF) {  $('#wrapper' + dayCount).addClass('active');  activate = dayCount - 2; } else {activate = activate;}
					}
						
						if (count === 0) { classy = "primary"; } else {  classy = "other";}
						if ( count < 3) {  extras = "firstThree"; 	} else {  extras = "extras";}
						
						var dateVarEnd = value.end.dateTime ;
						var end = new Date(dateVarEnd);
					
						var endHour = end.getHours();
							if (endHour > 12) {endHour = endHour - 12;}
						var endMin = end.getMinutes();
							if (endMin === 0) {endMin = "00";}
					
					
						var endTime = endHour + ":" + endMin;
					
				
						
						var description = value.description;
						var loca = value.location;
						

								if (description === undefined) { description = ""; }
								if (loca === undefined) {loca = defaultLocal;}

									var locationy = loca.replace("Hilton Head Island, SC 29928, USA", "");
									 loca = locationy.replace(/,/g, "<br />");
				
	
				
						
							$("#mainList" + dayCount).append("<li class='item " + extras + dayCount + " " + extras + " ' ><div class='time'>" + startTime + " - " + endTime + "</div><div class='title'>" + value.summary + "<br><span class='details'>" + description + "</span></div><div class='location'>" + loca + "</div></li>");
					
							count++;
						t = n;
		
					
					
				});
	
			$("#mainList" + dayCount);
	//		$(".dayContainer").append("<li class='item bottomOfDay'><div class='button'>Z</div></li>");
			// console.log(data);
			}, //End of Success from ajax call
		// 	complete: function() {
				
		// 			$.getScript("https://palmeravc.com/js/sly.min.js", function() {
		// 			console.log('loaded script and content');
				
					
		// 			var $frame = $('#centered');
		// var $wrap  = $frame.parent();
					
		// // Call Sly on frame
		// $frame.sly({
		// 	horizontal: 1,
		// 	itemNav: 'forceCentered',
		// 	smart: 1,
		// 	activateOn: 'click',
		// 	mouseDragging: 1,
		// 	touchDragging: 1,
		// 	releaseSwing: 1,
		// 	startAt: activate,
		// 	activateMiddle: 1,
		// 	scrollBar: $wrap.find('.scrollbar'),
		// 	scrollBy: 1,
		// 	speed: 300,
		// 	elasticBounds: 1,
		// 	easing: 'easeOutExpo',
		// 	dragHandle: 1,
		// 	dynamicHandle: 1,
		// 	clickBar: 1,

		// 	// Buttons
		// 	prev: $wrap.find('.prev'),
		// 	next: $wrap.find('.next')
		// });

		// 			});
			
				
				
		// 		//	$.getScript('http://darsa.in/sly/examples/js/horizontal.js', function () {
				
		// 		//	});
     			
		// 	} // End Of Complete Call
			
		}); // End of ajax call
		
				console.log('horizontal should now be loaded!');
	} // End of heyGoogle function call


	//  function growDate(dayCount){
	// 	"use strict"; 
	// 		$(".extras" + dayCount).css("opacity", "100");
	// 	 		$(".extras" + dayCount).animate({
	// 				height: 'toggle',
	// 			}, 1000);
	// 			$(".extras" + dayCount).css("display", "inherit");
	// 	 	//	$("#arrow"+dayCount).css("transform", "rotate(180deg)");
				
	// 	 		if ($("#arrow"+dayCount).hasClass("rotated")) { 
	// 			//	$(".extras" + dayCount).css("min-height", "135px");
	// 				$(".extras" + dayCount).css("height", "auto");
	// 				$("#arrow"+dayCount).removeClass("rotated");
					
	// 			} else { 
	// 				$(".extras" + dayCount).css("min-height", "auto");
	// 				$(".extras" + dayCount).css("height", "auto");
	// 				$("#arrow"+dayCount).addClass("rotated");
					
	// 			}
		
  //   } 

function checkDays() {
	"use strict";
    var today = new Date();
    var mont = today.getMonth();
  	var month = mont + 1;
    return (daysInMonth(month, today.getFullYear()));
}


function daysInMonth(month,year) {
	"use strict";
  return new Date(year, month, 0).getDate();
}



function loadDay(i){
	"use strict";
	$('#items').html("");
	heyGoogle(i);
}

//////// Call To Start With Current Day //////////
jQuery(document).ready(function(){
	"use strict";
	//	var day = (new Date).getDate();
		heyGoogle(todaysDate);
	
});