$(document).ready(function() {
	//Initialzing navbar for mobile devices
   $('select').material_select();

   var cultural = $('#culturalevents');
   var technical = $('#technicalevents');

   //form registration by jquery
   $('.submit').click(function(e){
   	e.preventDefault();
    $(this).addClass("disabled");
   	var name = $('#name').val();
   	var roll = $('#roll').val();
   	var branch = $('#branch').val();
   	var year = $('#year').val();
   	var email = $('#email').val();
   	var phone = $('#phone').val();

   	//Took me an hour but finally made it work. 2DeepJS4u 
   	//Solo Events
   var checkedEvents = $('#culturalsolo input:checked');
   var events = [];
   events = checkedEvents.each(function(){events.push($(this).attr('id'))});
   var eventnames = [];
   for(i=0;i<events.length;i++) {eventnames.push(events[i].id);}
   eventnames = eventnames.toString(); //this variable holds solo event names
	console.log(eventnames);
	
	//Group Events
	var checkedEventsg = $('#culturalgroup input:checked');
	var eventsg = [];
	eventsg = checkedEventsg.each(function(){eventsg.push($(this).attr('id'))});

	var eventnamesg = [];
	for(i=0;i<eventsg.length;i++) {eventnamesg.push(eventsg[i].id);}
	for(i=0;i<eventnamesg.length;i++) {
		var temp = '#'+eventnamesg[i]+'text';
	
		var names = $(temp).val();
		eventnamesg[i] = eventnamesg[i]+'('+names+')';
	}
	
	eventnamesg = eventnamesg.toString(); //this variable holds group event names
	console.log(eventnamesg);


	//Technical Events
	   var tcheckedEvents = $('#technicalevents input:checked');
	   var tevents = [];
	   tevents = tcheckedEvents.each(function(){tevents.push($(this).attr('id'))});
	   var teventnames = [];
	   for(i=0;i<tevents.length;i++) {teventnames.push(tevents[i].id);}
	   teventnames = teventnames.toString(); //this variable holds solo event names
		console.log(teventnames);
		





   	$.post('register.php',{name:name, roll:roll, branch:branch, year:year, email:email, phone:phone, eventnames:eventnames, eventnamesg:eventnamesg,teventnames:teventnames}, function(return_data){
		alert(return_data);
    window.location.replace("index.html");
	});

    



   	
   });

   //Initially register button is hidden and it will be shown when event type is selected 
  $('.submit').css("display","none");


  	//This changes the events list acc. to dropdown selection
   $(document).on('change','#eventtype',function(){
   					$('.submit').show();
                   var option = $(this).find("option:selected").attr('value');
                   if(option=='cultural'){
                   	cultural.toggle();
                   	technical.css("display","none");
                   }else{
                   	cultural.css("display","none")
                   	technical.toggle();
                   }
             });

   //Initially all textareas for group event member names are hidden unless their respective event name is checked from above
   //Hide them all on load
   $("div[id$='form']").css("display","none"); //hides all textarea unless ticked by upper tickbox
   
   //Show when event name is checked
   $('#banjo').click(function(){$('#banjoform').toggle()});
   $('#sargam').click(function(){$('#sargamform').toggle()});
   $('#nritya').click(function(){$('#nrityaform').toggle()});
   $('#manch').click(function(){$('#manchform').toggle()});
   $('#gudgudi').click(function(){$('#gudgudiform').toggle()});
   $('#tamaasha').click(function(){$('#tamaashaform').toggle()});
   $('#filmy').click(function(){$('#filmyform').toggle()});
   $('#saregamapa').click(function(){$('#saregamapaform').toggle()});
   $('#drishyam').click(function(){$('#drishyamform').toggle()});
   $('#admad').click(function(){$('#admadform').toggle()});


   

 });