"use strict";

/**
 * Created by aweiu on 17/3/17.
 */
/**
 * @param {Array} unitSizes - 单位对应的毫秒数组
 */
function DateInternal (unitSizes) {
  this.unitSizes = unitSizes.sort(function (unitSize1, unitSize2) {
    return unitSize1 < unitSize2;
  });
}
/**
 * @param {Date} dateTime1 - 待比较的日期1
 * @param {Date} [dateTime2 = now] - 待比较的日期2
 * @returns {Array} - 按初始化单位的从大到小顺序计算出的间隔数组
 */
DateInternal.prototype.get = function (dateTime1) {
  var dateTime2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  var rs = [];
  var internal = dateTime2 - dateTime1;
  for (var i = 0; i < this.unitSizes.length; i++) {
    var unitSize = this.unitSizes[i];
    if (internal > unitSize) {
      rs.push(parseInt(internal / unitSize));
      internal = internal % unitSize;
    } else rs.push(0);
  }
  return rs;
};
module.exports = DateInternal;
