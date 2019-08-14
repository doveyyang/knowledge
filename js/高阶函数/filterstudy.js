let arr = [{ name: '名称一', id: 15, hasFlag: true }, { name: '名称二', id: 16, hasFlag: false }, { name: '名称三', id: 17, hasFlag: false }, { name: '名称四', id: 18, hasFlag: true }]


let list = arr.filter(x => x.hasFlag)

console.log(list);
let nlist = list.map(x => x.id).join(',')
console.log(nlist)



let i = {
    "code": -1,
    "data": [
        {
            "id": 1,
            "name": "北京市",
            "children": [{
                "id": 11,
                "name": "市辖区",
                "children": [{
                    "id": 111,
                    "name": "西城区",
                    "children": [{
                        "id": 1111,
                        "name": "'南河沿大街",
                        "children": [{
                            "id": 11111,
                            "name": "紫金宫饭店",
                        },]
                    },]
                },
                {
                    "id": 112,
                    "name": "东城区",
                }
                ]
            }]
        }
    ],
    "msg": "success"
}