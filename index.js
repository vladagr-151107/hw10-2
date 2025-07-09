const numbers = [1, 4, 5, 88, 33, 34, 45, 1020];
function sortArray(){
    const newArray = [];
    for(i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}
console.log(sortArray());
// або 
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers);