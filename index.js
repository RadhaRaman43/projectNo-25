const foods = ["pizza", "burger", "fingerChips", "donuts", 
"springRoll"];
const newFoodItems=foods.slice(1,4)
console.log(newFoodItems)

const food = ["pizza", "burger", "fingerChips", "donuts", 
"springRoll"];
food.splice(2,0,"noodles", "icecream")
console.log(food)



const numberArray = [12,324,213,4,2,3,45,4234];
let evenNumber=numberArray.filter(function(value){
    return value%2==0
    })
console.log(evenNumber)

function isPrime(v)
{
    let i=1,count=0;
    while(i<=v)
    {
        if(v%i==0)
        {
            count++;
        }
        i++;
    }
    if(count>2)
    {
        return false;
    }
    return true;
}
let ab=numberArray.filter(function(value){
  return isPrime(value)
})
console.log(ab)




  const myArray = [11, 34, 20, 5, 53, 16]
  let my=myArray.map(function(value){
    
      return value*value
  })
  console.log(my)

  const array1=[2, 3, 5, 10];
function multiply(a,b)
{
    return a*b;
}
const muloutput = array1.reduce((a,b)=>{return multiply(a,b)},2);
console.log(muloutput);
  