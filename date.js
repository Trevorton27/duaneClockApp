const today = new Date();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const dayName = days[today.getDay()];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const displayDate = () => {
  const monthName = months[today.getMonth()];
  const date = today.getDate();
  const ordinalSuffix = toOrdinalSuffix(date);
  const year = today.getFullYear();

  const displayDate =
    dayName + ', ' + monthName + ' ' + ordinalSuffix + ' ' + year;
  document.getElementById('date').textContent = displayDate;
};

const toOrdinalSuffix = (number) => {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};

displayDate();
