export function formatDate(date: Date) {
  let day = "";
  let mounth = "";
  let year = "";

  let dd = date.getDate();
  if (dd < 10) {
    day = "0" + dd;
  } else {
    day = "" + dd;
  }

  let mm = date.getMonth() + 1;
  if (mm < 10) {
    mounth = "0" + mm;
  } else {
    mounth = "" + mm;
  }

  let yy = date.getFullYear() % 100;
  if (yy < 10) {
    year = "0" + yy;
  } else {
    year = "" + yy;
  }

  return day + "." + mounth + "." + year;
}
