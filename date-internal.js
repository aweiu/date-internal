"use strict";

/**
 * Created by aweiu on 17/3/17.
 */
function DateInternal(unitSizes) {
  this.unitSizes = unitSizes.sort(function (unitSize1, unitSize2) {
    return unitSize1 < unitSize2;
  });
}
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