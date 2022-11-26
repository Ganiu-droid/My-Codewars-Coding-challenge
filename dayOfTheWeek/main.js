function day_of_the_week(year, month, day)
{
    const date = new Date(year, month - 1, day);
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOftheWeek = date.getDay()
    return weekdays[dayOftheWeek]
        
    
}

//day_of_the_week(2022, 11, 24); //todaday_of_the_week(2019, 8, 31);  //Saturday
day_of_the_week(1999, 7, 18); //sunday
//day_of_the_week(1993, 8, 15); //sunday

//instantiate the javascript Date object 
//create an array of days of the weekdays
//create a variable day of the week
//grap the day of the week from the instantiated date (this return an integer between 0-6)
// pass the day of the week as an index to the weekdays
//return weekday[dayOftheWeek].
//call the function