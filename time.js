function convertTo24HourFormat(s) {
  const timeArray = s.match(/(\d+):(\d+):(\d+)([APMapm]{2})/);

  let hour = parseInt(timeArray[1], 10);
  const minute = timeArray[2];
  const second = timeArray[3];
  const ampm = timeArray[4].toUpperCase();

  if (ampm === "PM" && hour !== 12) {
    hour += 12;
  } else if (ampm === "AM" && hour === 12) {
    hour = 0;
  }

  const formattedHour = hour.toString().padStart(2, "0");
  console.log(`${formattedHour}:${minute}:${second}`);
}

const time24hr = convertTo24HourFormat("12:01:00PM");
