let arr = [{ name: '名称一', id: 15, hasFlag:true }, { name: '名称一', id: 15, hasFlag:true }, { name: '名称一', id: 15, hasFlag:true }, { name: '名称一', id: 15, hasFlag:true }]

function getTempObj(obj){
    return {
        name:obj.name,
        isChecked:false,
        id:obj.id
    }
}

let narr = arr.map(getTempObj);
console.log(narr);


