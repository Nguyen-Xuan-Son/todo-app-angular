export const convertTime = (date, format: string) => {
    switch (format) {
        case 'timestamp':
            return new Date(date).getTime();
        case 'currentDateTime':
            const currentTime = new Date();
            let month = '' + (currentTime.getMonth() + 1);
            let day = '' + currentTime.getDate();
            const year = currentTime.getFullYear();
            if (month.length < 2) {
                month = '0' + month;
            }
            if (day.length < 2) {
                day = '0' + day;
            }
            return [year, month, day].join('-');
        default:
            break;
    }
};
