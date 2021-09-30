/**
 * yyyy年MM月dd日の形式に変換する
 * @param date
 */
export const convertDateToYearMonthDay = (date: string) => {
  if (!date) {
    return null;
  }
  let yearMonthDay = date.split('-');
  return yearMonthDay[0] + '年' + yearMonthDay[1] + '月' + yearMonthDay[2] + '日';
};

/**
 * yyyy年MM月の形式に変換する
 * @param date
 */
export const convertDateToYearMonth = (date: string) => {
  if (!date) {
    return null;
  }
  let yearMonthDay = date.split('-');
  return yearMonthDay[0] + '年' + yearMonthDay[1] + '月';
};

/**
 * MM/ddの形式に変換する
 * @param date
 */
export const convertDateToMonthDay = (date: string) => {
  if (!date) {
    return null;
  }
  let yearMonthDay = date.split('-');
  return yearMonthDay[1] + '/' + yearMonthDay[2];
};

/**
 * 今日の日付をyyyy-MM-ddの形式で取得する。
 * @param date
 */
export const getToday = () => {
  const date = new Date();
  const yearStr = date.getFullYear();
  const monthStr = ('0' + (date.getMonth() + 1)).slice(-2);
  const dayStr = ('0' + (date.getDate())).slice(-2);
  return  yearStr + '-' + monthStr + '-' + dayStr;
};
