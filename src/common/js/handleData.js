/*
  数组删除，自定义规则
  参数：数组对象 规则/下标
*/
export function ArrDel (obj, filter) {
  let index = filter
  if (typeof filter === 'function') {
    for (let i = 0, le = obj.length; i < le; i++) {
      if (filter(obj[i], i)) index = i
    }
  }
  obj.splice(index, 1)
}
