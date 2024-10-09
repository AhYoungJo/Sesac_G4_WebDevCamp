const moment = require('moment');

moment.locale('ko|ja|us|zh-cn');

const m = moment();
console.log("🚀 ~ m:", m.format('llll'));
console.log("🚀 ~ m:", m.format('YYYY-MM-DD HH:mm:ss (dd)'));
console.log("🚀 ~ m:", m.format('YYYY-MM-DD HH:mm:ss (dddd)'));
console.log("🚀 ~ m:", m.format('YY-M-D'));

console.log("🚀 ~ m().startOf('years'):", m.startOf('years'));
console.log("🚀 ~ m().add(3, 'days'):", m.add(3, 'days'));
console.log("🚀 ~ m().diff(moment('1973-10-05'), 'M'):", m.diff(moment('1973-10-05'), 'M'));
console.log("🚀 ~ m(new Date(0)).fromNow():", m.fromNow());
