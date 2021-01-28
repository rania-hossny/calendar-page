// eventname=document.getElementById("eventname");
// eventdes=document.getElementById("eventdes");
// eventdate=document.getElementById("eventdate");
// eventtype=document.getElementById("eventtype");
// var from=document.getElementById("form");
// var btn=document.getElementById("btn");


// btn.addEventListener("click",getformdata);
// function getformdata(e){
//     e.preventDefault();
//     var formdata=new FormData(form);
//     console.log(formdata.get('eventname') + " - " +formdata.get('eventdesc') + " - " +formdata.get('eventdate') + " - " +formdata.get('eventtype'));

//     var newval={
//            name: formdata.get('eventname'),
//            description: formdata.get('eventdesc'),
//            date: formdata.get('eventdate'),
//            type: formdata.get('eventtype')
//       }

//       $(document).ready(function() {
//         $('#calendar').evoCalendar('addCalendarEvent', newval);
//         })
// }

// // eventname.addEventListener("Change",handlechange);
// function handlechange(){
//     var val=eventname.value
//     console.log(val);
// }
// $('#calendar').evoCalendar({
//   theme: 'Royal Navy'
// })

myevents=[
    {
      id: 'bHay68s', // Event's ID (required)
      name: "New Year", // Event name (required)
      date: "January/1/2020", // Event date (required)
      type: "birthday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      name: "Vacation Leave",
      badge: "02/13 - 02/15", // Event badge (optional)
      date: ["February/13/2020", "February/15/2020"], // Date range
      description: "Vacation leave for 3 days.", // Event description (optional)
      type: "event",
      color: "red" // Event custom color (optional)
      
    }
  ];


$(document).ready(function() {
             
    $('#calendar').evoCalendar({
        firstDayOfWeek: 6,
        todayHighlight: true,
        calendarEvents: myevents,
        theme: 'Royal Navy',
    })
    
})
// $(document).ready(function() {
// $('#calendar').evoCalendar('addCalendarEvent', {
//      id: 'kNybja6',
//      name: 'Mom\'s Birthday',
//      description: 'Lorem ipsum dolor sit..',
//      date: '2021-01-13',
//      type: 'birthday'
// });
// })


// var days=document.getElementsByClassName('day');

// days.forEach(day => {
//   console.log(day);
// });
// day.addEventListener('click',function a(e){
//   alert('hi');
// })
// console.log(days);

// var active_date = $('#calendar').evoCalendar('getActiveDate');
// active_date.addEventListener('click',function a(){
//   console.log(active_date);

// })


$('#calendar').on('selectDate', function(event, newDate, oldDate) {
  //      alert('hi');
  console.log(event);
  console.log(newDate);
  console.log(oldDate);
  });


 
     