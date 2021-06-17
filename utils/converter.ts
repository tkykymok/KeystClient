/**
 * yyyy年MM月dd日の形式に変換する
 * @param date
 */
export const convertDateToYearMonthDay = (date: string) => {
  let yearMonthDay = date.split('-');
  return yearMonthDay[0] + '年' + yearMonthDay[1] + '月' + yearMonthDay[2] + '日';
};

/**
 * yyyy年MM月の形式に変換する
 * @param date
 */
export const convertDateToYearMonth = (date: string) => {
  let yearMonthDay = date.split('-');
  return yearMonthDay[0] + '年' + yearMonthDay[1] + '月';
};

