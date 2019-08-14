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

let id = 5;
let mlist = [];
do{
    for (let index = 0; index < oriarr.length; index++) {
        const element = oriarr[index];
        if(element.id==id){
            mlist.push(element);
            id = element.pid;
            break;
        }
        
    }
}while(id!=0);
console.log(mlist.reverse());