# date-interval
用于计算两个时间间隔，支持任意单位

## 安装
```
npm install date-interval --save
```
## 示例
```
// 初始化
// 该数组参数的含义就是各个单位对应的毫秒数（程序会对数组排序）
var dateInterval = new DateInterval([86400000, 3600000, 60000, 1000])
// 计算2017-03-16 13:00:00 至 2017-03-17 15:10:30 相差的 天 时 分 秒
dateInterval.get(new Date('Fri Mar 16 2017 13:00:00 GMT+0800'), new Date('Fri Mar 17 2017 15:10:30 GMT+0800'))
// 返回：[1, 2, 10, 30] 即 1天2时10分30秒
```
## API
### get(date1, [date2])
　date1(Date): 待比较的日期1

　date2(Date): 待比较的日期2。默认值：当前时间

　返回：按初始化单位的从大到小顺序计算出的间隔数组
