import { Order } from "../models/order";
import { Orders } from "../constants/enums";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const hoursStringToNumber = (hours: string, format: string): number => {
  const time = hours.split(":")[0];

  return format === "PM"
    ? parseInt(time) + 12 === 24
      ? 12
      : parseInt(time) + 12
    : parseInt(time) === 12
    ? 0
    : parseInt(time);
};

export const compareHoursToCurrent = (hour: number): number => {
  const d = new Date();
  let currentHour = d.getHours();

  return hour - currentHour;
};

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === Orders.DSC
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array: any[], comparator: any) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function randomStr(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const isLocalhost = () => {
  // return false;
  const link = document.createElement("a");
  link.href = window.location.href;

  return link.hostname === "localhost";
};

export const formatAMPM = (isoDate: string) => {
  const date = new Date(isoDate);
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};

export function getWeekDays(locale: string) {
  const baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "long" }));
    baseDate.setDate(baseDate.getDate() + 1);
  }

  return weekDays;
}

export function getDayName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "short" });
}

export function getDayNumber(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.getDate();
}

export function getMonthName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { month: "short" });
}

export function getDateFormated(date: Date) {
  var today = date ? new Date(date) : new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  const formattedDate = yyyy + "-" + mm + "-" + dd;

  return formattedDate;
}

export function capitalizeWords(string: string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

export const mergeListOfStringsByComma = (list: string[] | null) => {
  if (list !== null && list.length)
    return list.reduce((prev, current) => `${prev},${current}`);

  return "";
};

export const makeFakePhoneNumbers = (index: number, length: number) => {
  var result = `01${index}`;
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const disableScroll = (isMobile: boolean = false) => {
  const body = document.getElementsByTagName("body")[0];
  body.style.overflow = "hidden";
  body.style.paddingRight = isMobile ? "0px" : "15px";
};

export const enableScroll = () => {
  const body = document.getElementsByTagName("body")[0];
  body.style.overflow = "unset";
  body.style.paddingRight = "0px";
};
