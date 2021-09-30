// 년, 월 input -> 1일이 무슨요일인지 & 마지막일이 몇일인지.input

const getTodayYear = () => {
  return new Date().getFullYear();
};

const getTodayMonth = () => {
  return new Date().getMonth() + 1;
};

const getTodayDate = () => {
  return new Date().getDate();
};

const getFirstDay = (year, month) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  return firstDay;
};

const getLastDate = (year, month) => {
  const lastDate = new Date(year, month, 0).getDate();
  return lastDate;
};

export { getTodayYear, getTodayMonth, getTodayDate, getFirstDay, getLastDate };
