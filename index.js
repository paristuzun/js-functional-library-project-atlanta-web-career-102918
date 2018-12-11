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
      let keys = Object.values(collection)
      let newArr = [];
      for (let i = 0; i < keys.length; i++) {
         newArr.push(callback(keys[i]));
     }
     return newArr;
     },

    reduce: function(collection, callback, acc) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
