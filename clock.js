//clock with hours:minutes:seconds
// hours converted to 12hr type
// setInterval is essentially a refresh every 1sec

const displayClock = () => {
  const clock = new Date();
  let hours = clock.getHours();
  const minutes = addLeadingZero(clock.getMinutes());
  const seconds = addLeadingZero(clock.getSeconds());

  const isAm = hours < 12 || 0;
  let meridiem = isAm ? 'AM' : 'PM';
  hours = hours >= 13 ? hours - 12 : hours;

  if (hours === 0) {
    meridiem = 'AM';
    hours += 12;
  }

  const clockDisplay = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

  document.getElementById('clock').textContent = clockDisplay;

  console.log(clock.getHours());
};

const addLeadingZero = (number) => {
  return number < 10 ? '0' + number : number;
};

displayClock();
setInterval(displayClock, 1000);
