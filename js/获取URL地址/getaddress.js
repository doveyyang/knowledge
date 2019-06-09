var address = "http://www.jin.com/Info/caseinfo/id/14"
let arr = address.split('/');
console.log(arr);
if(arr && arr.length>2){
    var lastValue = arr[arr.length-1];
    var lastKey = arr[arr.length -2];
    console.log(lastKey + '='+lastValue);
}