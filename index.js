'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: returns the input argument unchanged. if it is a primitive value
 * it will return the given value, complex objevcts will be returned with the same reference
 * 
 * @param {Value} value: Input value can be any data type.
 * 
 * @return {Value} value: the value returned is the same as the input value unaltered
 * 
 * 
**/

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: returns a string reflecting the datatype of the input, diferentiating between the array, null,
 * and collection complex datatypes. Note typeOf is different from keyword typeof.
 * 
 * @param {Value} value: any input variable of any datatype
 * 
 * @return {string}: a string cooresponding to the type of data including diferent types of objects. outputs are:
 * 
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * 
 **/

function typeOf(value){
    
    let final = typeof(value);
    
    if (final === 'object'){
        if (Array.isArray(value)){
            final = 'array';
        }else if (value === null){
                final = 'null';
        }else if(value instanceof Function){
            final = 'function';
        }
    }

    return final;
}

module.exports.typeOf = typeOf;

/**
 * first: returns the first number of elements of the array based on input number. If no number is given or a non-sensical
 * number is given, returns just the first element of the array.
 * 
 * @param {array} arr : takes an array, which can contain anything. If array is not an array, returns an empty array
 * @param {number} num: a positive interger. if no pos interger is provided, defaults to 1, returning first element.
 * 
 * @return {array}: returns an array with <num> (or 1) elements from the beginning of the array. is empty if the first input 
 *                          is not an array and just the first element if the <num> is not a positive interger
 * 
 * 
 **/

function  first(arr, num){
    if (Array.isArray(arr)){
        if(typeof num ==='number'){
            if (num === 1){
                return arr[0];
            }
            let final = [];
            for (let i = 0; i< num; i++){
                if(arr[i] !== undefined){
                    final.push(arr[i]);
                }
            }
            return final;
        }
        
    return arr[0];
        
    }
return [];
    
}

module.exports.first = first;

/**
 * 
 * last: returns the last elements of an array based on input number. If no number is given or a non-sensical
 * number is given, returns just the first element of the array.
 * 
 * @param {array} arr : takes an array, which can contain anything. If array is not an array, returns an empty array
 * @param {number} num: a positive interger. if no pos. interger is provided, defaults to 1, returning last element.
 * 
 * @return {array}: returns an array with <num> (or 1) elements from the end of the array. is empty if the first input 
 *                          is not an array and just the last element if the <num> is not a positive interger.
 *
 **/
 
function last(arr, num){
    if(Array.isArray(arr)){
      if(typeof num ==='number'){
            if (num === 1){
                return arr[arr.length-1];
            }
            let final = [];
            for (let i = 1; i<= num; i++){
                if(arr[arr.length-i] !== undefined){
                    final.unshift(arr[arr.length-i]);
                }
            }
            return final;
        }
        
    return arr[arr.length-1];
        
    }
return [];
  
}

module.exports.last = last;

/**
 * 
 * indexof: returns the index of the first instance of a given value in an array. The value can be anything as long
 *          as it can be deeply compared. returns -1 if the value is not found
 * 
 * @param {array} arr : first argument is an array that can contain anything
 * @param {value} value: second argument can be anything, as long as it can be deeply compared. no input value will
 *                      by default search the array for instances of undefined.
 * 
 * @return {number}: returns the index of the first instance of value input. if no array is provided, or the value is not provided
 *                      will return -1.  
 *          
 * 
 * 
 **/
 
function indexof(arr, value) {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }

    return -1;
}

module.exports.indexof = indexof;
/**
 * contains: searches an array for a value of any datatype and returns a boolean cooresponding to the values existence
 *          in the array.
 * 
 * @param {array} arr: input is an array that can contain any types of data. will throw an error if input value is not an array
 * @param {value} value: value can be any datatype, so long as it can be deeply compared
 * 
 * @return {boolean}: returns true if the first input is an array that contains the second input. will return false otherwise
 * 
 *
 **/
 
function contains(arr, value){
    return (arr.indexOf(value) !== -1) ? true : false;  
}



module.exports.contains = contains;

/*
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
 * 
 * unique: takes an array and returns an array with duplicate values removed
 * 
 * @param {array} arr: an array with any number of elements and any type of element
 * 
 * @return {array} result: an array with all of the duplicate elements removed
 * 
 **/

// Takes in an array and filters out non unique values
 function  unique(arr){
    // Initialize result array
    let result = [];
    // Loop through array checking for uniqueness
    for(let i = 0; i < arr.length; i++){
        // Only include value if it is the first instance 
        if(i === indexof(arr,arr[i])){
            result.push(arr[i]);
        }
    }
    // Return result
    return result;
}
module.exports.unique = unique;

/**
 * 
 * filter: takes an array and a test function which is taken to return a boolean. returns an array containing values from the original 
 *          array that pass the test function (return true)
 * 
 * @param {array} arr: an array of any length containing any type of element
 * @param {function} func: a function which takes in 3 inputs: an element, an index, and a whole array and returns a value of true or not trtue (false)
 * 
 * @return {array} result: an array containing all of the elements from input array which pass the test.
 * 
 * 
*/

function filter(arr, func){
    // Initialize the result
    let result = [];
    // Loop through the array
    for(let i = 0; i < arr.length; i++){
        // Only include results that the functions return a true(not truthy) value
        if(func(arr[i], i, arr) === true){
            result.push(arr[i]);
        }
    }
    return result;
}

module.exports.filter = filter;
/** 
 * 
 * reject: returns a subarray of the input array whose values do not pass a given test. test is a function and 
 *          the second parameter returning true or false
 * 
 * @param {array} arr: an array of any length containing any type of element
 * @param {function} func: a function which takes in 3 inputs: an element, an index, and a whole array and returns a value of true or not trtue (false)
 * 
 * @return {array} result: an array containing all of the elements from input array which don't pass the test.
 * 
 * 
 **/

function reject(arr, func){
    // Initialize the result
    let result = [];
    // Initialize an array containing the true cases
    let filterArray = filter(arr, func);
    // Loop through the given array
    for(let i = 0; i < arr.length; i++){
        // Only include results that the functions return a false(not falsy) value
        if(!contains(filterArray,arr[i])){
            result.push(arr[i]);
        }
    }
    return result;    
}

module.exports.reject = reject;

/**
 * 
 * partition: splits an array into 2 depending on whether they pass a certain test function as a nested array
 *          with the first subarray containing those elements that pass and the second containingt those that do not.
 * 
 * @param {array} arr: an array of any length containing any type of element
 * @param {function} func: a function which takes in 3 inputs: an element, an index, and a whole array and returns a value of true or not trtue (false)
 * 
 * @return {array} result: a nested array with 2 sub-array's. the first being those elements which pass the test, the second being
 *                          those which do not.
 * 
*/
function partition(arr, func){  
    // filter only returns elements that pass true for the test in the form of an array
    return [ 
        arr.filter(function(x, i){return func(x, i, arr);}),
        //^top array returns array with values that DO pass test v bottom array returns array with values that DONT pass
        arr.filter((x, i) => !func(x, i, arr))
        ];
}

module.exports.partition = partition;
/** 
 * 
 * map: takes an input array and a function which pruduces some result from 3 inputs: an element, an index, and a whole array. 
 *      returns an array with every element transformed by the given function
 * 
 * @param {array} arr: an array of any length containing any type of element
 * @param {function} func: a function which takes in 3 inputs: an element, an index, and a whole array and returns a value of true or not true (false)
 * 
 * @return {array} result:an array filled with the transformed elements of the original array (of the same length as input array)
 * 
 * 
*/

function map(coll, func){
    //initialize result array
    let result = [];
    //check if input collection is an array
    if (Array.isArray(coll)){
        for(let i = 0; i< coll.length; i++){
            result.push(func(coll[i], i, coll));
        }
    //if the input collection is an object, pass, key, property and object to the function    
    }else {
        for (let key in coll){
            result.push(func(coll[key], key, coll));
        }
    }
return result;

}

module.exports.map =map;

/** 
 * pluck: accepts an array of objects and a property name (key) string and returns the value  for that key of each element object
 * 
 * @param {array} arr: an array of objects
 * @param {string} prop: the name of a property key in the objects contained within the input array
 * 
 * @return {array}: an array containing cooresponding values of each key for each object in the array. Will contain undefined
 *                  if no property exists for the key on any given object.
 * 
*/

function pluck(arr, prop){
    // returns the results of the function that plucks out the <property>,
    return map(arr, (elem, id, coll) => elem[prop]);
}

module.exports.pluck = pluck;


/** 
 * 
 * every: Takes in an object or array and a test function, and returns true is every element
 * in the collection passes the test function with a truthy return value, and false if one or more do not.
 * In the absence of an input function, tests if every element in input collection is itself truthy
 * 
 * @param {array or object} coll: An array or object with any datatype elements
 * 
 * @param {function} func: a test function that should return a true or false for any given
 * input. 
 * 
 * @return {boolean}: true if every element returns true from the test function,
 * false if one or more do not. in the absence of a test function, true only if all
 * elements of input collection are truthy
 * 
**/
// checks to make sure every element in a given collection passes a true false test
function every(coll, func){
    //checks if test function is provided
    if (func instanceof Function){
        //run the test on every element in the collection and returns false if one exception is found
        for (let key in coll){
            if (!func(coll[key], key, coll)){
                return false;
            }
            
        }
    // if test function is not provided, checks if no values are falsey, returns true if so    
    }else{
        for (let key in coll){
            if(!coll[key]){
                return false;
            }
            
        }
    }  
return true;
        
}
module.exports.every = every;

/**
 * 
 * some: Takes in an object or array and a test function, and returns true is one or more elements
 * returns true on the test function and false if all do not.
 * In the absence of an input function, tests if a single element in input collection is itself truthy,
 * and returns true
 * 
 * @param {Array or Object} coll: An array or object with any datatype elements
 * 
 * @param {Function} func: a test function that should return a true or false for any given
 * input. 
 * 
 * @return {Boolean}: true if at least one element returns true from the test function,
 * false if all do not. In the absence of a test function, returns true only if all
 * elements of input collection are truthy
 * 
*/

function some(coll, func){
    //checks if test function is provided
    if (func instanceof Function){
        //run the test on every element in the collection and returns true if any are true
        for (let key in coll){
            if (func(coll[key], key, coll)){
                return true;
            }
            
        }
    // if test function is not provided, checks if any values are truey and returns true on first instance    
    }else{
        for (let key in coll){
            if(coll[key]){
                return true;
            }
            
        }
    }  
return false;
        
}/** 
* reduce: Takes in an array, a tranformation function and a seed value and applies
* the function to each element in the array using the result of the previous element as a 
* coincident argument along with the array as a whole. Seed value serves as the input for the 
* operation on the first element. If no seed is provided, the first element of the array is used 
* as the seed and the function is applied to the second element. Returns the result of the 
* final function call.
* 
* @param {Array} arr: an array of any type of data
* @param {Function} func: In default operation, the function takes 3 arguments: 1.previous result 2. current index
* 3. complete array.
* @param {Value} seed: a single value of any datatype serves as the previous result
* argument for the first function call on the first array element. If no seed is provided, 
* the first array value is used as the seed for the function call starting on the second element of
* the array
* 
* @return {Value} prevResult: in the context of the final iteration of the function call
* is reassigned the final result of the last function call
* 
* 
*
**/

// Applies a transformation to each element in an arry using the results of the previous elements transformation as an input
function reduce(arr, func, seed){
    // Initialize the first seed based off of input or the first element if no seed is given
    let prevResult = seed === undefined ? arr[0] : seed;
    // Loops through array starting on the first element if there is a seed or 2nd element if there is not a seed
    for(let i = (seed === undefined ? 1 : 0); i < arr. length; i++){
        prevResult = func(prevResult, arr[i], i);
        // Once the last element is reached, return the previous result
        if(i === arr.length - 1){
            return prevResult;
        }
    }
}

module.exports.reduce = reduce;

/** 
 * extend: Takes in any number of objects and consolidates 
 * all of the properties of all objects to the first input object. In the case of 
 * repeat key names, values are overwritten giving priority to the the last object 
 * in the order of input.
 * 
 * @param {Object} ...objs: a sequence of any number of objects with any properties
 * 
 * @return {Object} ...objs[0]: returns the first object in the sequence with every other property
 * in any input object added to it and conflicting properties resolved giving priority
 * to later objects in order of input.
 * 
**/

// Takes any number of objects and assigns all of the properties to the first object giving priority to the latest
function extend(...objs){
    // Loop through the array of objects starting on the second object
    for(let i = 1; i < objs.length; i++){
        // Check all properties of each object
        for(let key in objs[i]){
            // Overwrite or add the property to the first object
            objs[0][key] = objs[i][key];
        }
    }
    return objs[0];
}
console.log(extend([{v:2,d:3}, {c:4, f:9}]));

module.exports.extend = extend;