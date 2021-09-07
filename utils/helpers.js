module.exports = {
  format_date: (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const closeDate = day + '/' + month + '/' + year;
    return closeDate;
  },
};
