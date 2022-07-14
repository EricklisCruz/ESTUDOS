const maca = {
    value : 2,
}

const orange = {
    value : 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)

}

const array = [1,3,5,6,7];

console.log('É maçã');
console.log(mapComThis(array,maca));
console.log('É laranja');
console.log(mapComThis(array,orange));