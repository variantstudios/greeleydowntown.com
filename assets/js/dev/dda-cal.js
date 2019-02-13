// $(document).ready(function() {
//   console.log('google cal');

  formatGoogleCalendar.init({
    calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/milan.kacurak@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY',
    past: false,
    upcoming: true,
    sameDayTimes: true,
    dayNames: true,
    pastTopN: -1,
    upcomingTopN: 3,
    itemsTagName: 'li',
    upcomingSelector: '#events-upcoming',
    pastSelector: '#events-past',
    recurringEvents: true, 
    upcomingHeading: '<h2>Upcoming events</h2>',
    pastHeading: '<h2>Past events</h2>'
    format: ['*date*', ': ', '*summary*', ' — ', '*description*', ' in ', '*location*'],
    timeMin: '2016-06-03T10:00:00-07:00',
    timeMax: '2020-06-03T10:00:00-07:00'
   });

// });