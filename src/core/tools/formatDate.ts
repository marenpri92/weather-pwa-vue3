import dayjs from 'dayjs';

export const currentDate = () => dayjs().format('DD MMM YYYY, HH:mm');
export const formatedDate = (date: number) => dayjs(date * 1000).format('DD MMM YYYY, HH:mm');