

//free dots   ...
//Spread => used to split up array elements or Object properties
//ex-->
const newArray = [...oldArray, 1,2] //for array
const newObject = {...oldObject, newProp:5}  //for object



//Rest =>   ...
//same oper. but used differntly
//Used to merge a list of function arguments into an array
function sortArgs(...args) {
    return args.sort()
}