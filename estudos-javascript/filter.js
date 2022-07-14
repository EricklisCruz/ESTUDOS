function filterPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}
const array = [1,2,3,4,5,6,7,8]
console.log(filterPares(array));