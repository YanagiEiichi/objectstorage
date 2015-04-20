var objectStorage;

void function() {

  var cache = {};

  objectStorage = function(key) {

    var object;

    // Try to read from cache
    if(key in cache) return cache[key];

    // Try to parse synchronously JSON from localStorage
    try {
      object = JSON.parse(localStorage.getItem(key));
      if(!object || typeof object !== 'object') throw 0;
    } catch(error) {
      // Create a new object on JSON parse error
      object = {};
    }

    // Save to localStorage and remove cache on next tick
    setTimeout(function() {
      delete cache[key];
      localStorage.setItem(key, JSON.stringify(object));
    });

    // Cache returnd object
    return cache[key] = object;

  };

}();

