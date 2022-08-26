const DAYS_IN_MILLIS = 86400000;
const DEFAULT_EXPIRED_DAYS = 5;

export const isExpired = (date: string | undefined) => isOlderThanNDays(date, DEFAULT_EXPIRED_DAYS);

export const isOlderThanNDays = (date: string | undefined, days: number) =>
  !!date && !(new Date(date) > new Date(Date.now() - days * DAYS_IN_MILLIS));
