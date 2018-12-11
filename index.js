fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     let keys = Object.values(collection)
     for (let i = 0; i < keys.length; i++) {
       callback(keys[i])
     }
     return collection
   },

    map: function map(collection, callback) {

 //     
 //     const newArr = [];
 //
 //     for (const element of array) {
 //         newArr.push(callback(element));
 //     }
 //
 //     return newArr;
 // }
    },




    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
