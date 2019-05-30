let oriarr = [
    {
        "id": 1,
        "name": "营销1",
        "pid": 0
    },
    {
        "id": 6,
        "name": "大型",
        "pid": 1
    },
    {
        "id": 5,
        "name": "中型",
        "pid": 6
    },
    {
        "id": 9,
        "name": "主分组一",
        "pid": 1
    },
    {
        "id": 2,
        "name": "市场",
        "pid": 0
    },
    {
        "id": 3,
        "name": "企业",
        "pid": 0
    }
];


function arrayHandle(arr) {
    arr.forEach(data => {
      objectHandle(data);
    });
    return arr;
  }
  
  function objectHandle(obj) {
    const items = oriarr.filter(data => data.pid === obj.id);
    if (items.length) {
      if (obj.children) {
        obj.children.concat(items);
      } else {
        obj.children = items;
      }
      return arrayHandle(items);
    } else {
      return obj;
    }
  }
  
  //这步将返回构造的数据
  function formateData(arr){
      return arrayHandle(arr.filter(data => data.pid === 0));
  }

  let list = formateData(oriarr);
  console.log(JSON.stringify(list))
  