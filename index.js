////Input 

///method -1
let arr = ["Hello","World","This","World","Shit","World","Hello","World"];

///reduce 

function WordCount (p){
    let result = p.reduce((Accumlator,currentValue)=>{
     if( currentValue in Accumlator){
        Accumlator[currentValue]++
     }
     else{
        Accumlator[currentValue] = 1;
     }
     return Accumlator
    },{});
    return result
}

// // console.log(WordCount(arr))

//// method-2

function WordCountFor(p){
    let count = {}
    p.forEach((item)=>{
        if(count[item]){
            count[item]++
        }
        else{
            count[item] = 1;
        }
    })
    return count

}
// console.log(WordCountFor(arr))

///Question -2

let people = [
    {name: 'Alice', age:21},
    {name: 'Max', age: 20},
    {name: 'Jane', age: 20}
];

function Groupby(p){
    var check = {};

    p.forEach((item)=>{
        if (!check[item.age]){
            check[item.age] = [item];
        }
        else{
            check[item.age].push(item)
        }
    })

    return check
}

// console.log(Groupby(people));


// 3. Balanced Brackets

/// hashmap = {},[],()
//  ")"-> invalid
//  "("-> invalid
//  "(]"-> invalid
//  "([)]" -> invalid
//  "()[]{}" -> valid
// "([]){}" -> valid

/// 
function balancedBracket(s){
    const hashMap = {"(": ")", "{": "}","[":"]"};

    const stack = []


    for(let ch of s) {
        if(hashMap[ch]){
            stack.push(hashMap[ch]);
        } else if(stack.length > 0 && stack[stack.length-1]=== ch){
            stack.pop()
        }
    
    }
    return (stack.length ===0? "Brackets are balanced": "Brackets are not balanced") 
};

const str = "{{}}"
console.log(balancedBracket(str))




