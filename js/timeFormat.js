/**
 * 格式化时间
 * @param {*} time new Date()生成的时间 
 * @returns 格式：2000-01-10 09:10:20
 */
function timeFormat(time) {
    const year = time.getFullYear();
    const month = numberFormat(time.getMonth() + 1);
    const date = numberFormat(time.getDate());
    const hour = numberFormat(time.getHours());
    const minutes = numberFormat(time.getMinutes());
    const seconds = numberFormat(time.getSeconds());
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds;

}
/**
 * 不足两位的补0
 * @param {*} num 
 * @returns 
 */
function numberFormat(num) {
    return num < 10 ? '0' + num : num;
}
const now=timeFormat(new Date());
console.log(now);