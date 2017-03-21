/**
 * Created by aweiu on 17/3/17.
 */
/**
 * @param {Array} unitSizes - 单位对应的毫秒数组
 */
function TimeInterval (unitSizes) {
  this.unitSizes = unitSizes.sort((unitSize1, unitSize2) => unitSize1 < unitSize2)
}
/**
 * @param {Date} dateTime1 - 待比较的日期1
 * @param {Date} [dateTime2 = now] - 待比较的日期2
 * @returns {Array} - 按初始化单位的从大到小顺序计算出的间隔数组
 */
TimeInterval.prototype.get = function (dateTime1, dateTime2 = new Date()) {
  var rs = []
  var interval = dateTime2 - dateTime1
  for (var i = 0; i < this.unitSizes.length; i++) {
    var unitSize = this.unitSizes[i]
    if (interval > unitSize) {
      rs.push(parseInt(interval / unitSize))
      interval = interval % unitSize
    } else rs.push(0)
  }
  return rs
}
export default TimeInterval
