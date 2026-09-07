   function isWeekend(date) {
    const previousDate = date.subtract(1, 'day');
    const day = previousDate.format('dddd');

    return day === 'Saturday' || day 
    === 'Sunday';
    }
    export default isWeekend;