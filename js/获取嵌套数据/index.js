let list = [{
    "project": "区域一",
    "data": [{
            "id": 3000,
            "cho2": 0.13,
            "c6h6": 0.44,
            "tvoc": 0.67,
            "humidity": 27,
            "temperature": 25,
            "b_id": 2417,
            "time": 1564369168
        },
        {
            "id": 3002,
            "cho2": 0.13,
            "c6h6": 0.44,
            "tvoc": 0.67,
            "humidity": 27,
            "temperature": 25,
            "b_id": 2417,
            "time": 1564369180
        }
    ],
    "num": 2
},
{
    "project": "区域二",
    "data": [{
            "id": 3001,
            "cho2": 0.13,
            "c6h6": 0.44,
            "tvoc": 0.67,
            "humidity": 27,
            "temperature": 25,
            "b_id": 2417,
            "time": 1564369177
        },
        {
            "id": 3003,
            "cho2": 0.13,
            "c6h6": 0.44,
            "tvoc": 0.67,
            "humidity": 27,
            "temperature": 25,
            "b_id": 2417,
            "time": 1564369183
        }
    ],
    "num": 2
}
];
// {
//     date: '客房',
//     name: '甲醛(mg/m²)',
//     standCount: '≤0.10',
//     test1: "0.260",
//     test2: "0.260",
//     test3: "0.260",
//     test4: "0.260",
//     test5: "0.260",
//     test6: "0.260",
// }
let array = [];
for (let index = 0; index < list.length; index++) {
    // 遍历记录，
    const element = list[index];
    if(element.data && element.data.length>0){

        // 获取甲醛
        let cho2Obj = {};
        cho2Obj.project = element.project;
        cho2Obj.name="甲醛(mg/m²)";
        cho2Obj.standCount="≤0.10"
        for (let sindex = 0; sindex < element.data.length; sindex++) {
            const eelement = element.data[sindex];
            cho2Obj[`test`+sindex] = eelement.cho2;
        }        
        console.log(cho2Obj);
        array.push(cho2Obj);
        

        // 获取TVOC
        let obj2 = {};
        obj2.project = element.project;
        obj2.name="苯系物(mg/m²)";
        obj2.standCount="≤0.10"
        for (let sindex = 0; sindex < element.data.length; sindex++) {
            const eelement = element.data[sindex];
            obj2[`test`+sindex] = eelement.c6h6;
        }        
        console.log(obj2);
        array.push(obj2);
        // 获取苯
        let obj3 = {};
        obj3.project = element.project;
        obj3.name="TVOC(mg/m²)";
        obj3.standCount="≤0.10"
        for (let sindex = 0; sindex < element.data.length; sindex++) {
            const eelement = element.data[sindex];
            obj3[`test`+sindex] = eelement.c6h6;
        }        
        console.log(obj3);
        array.push(obj3);
       

    }
}
console.log(JSON.stringify(array));