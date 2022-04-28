import {format, parseISO} from 'date-fns';

/* eslint-disable-next-line */
export interface DateProps {
  date: string;
}

export function DateComponent({date}: DateProps) {
  const dateParsed = parseISO(date)
  return (
    <time dateTime={date}>{format(dateParsed, 'LLLL d, yyyy')}</time>
  );
}

export default DateComponent;
