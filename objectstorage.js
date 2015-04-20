var objectStorage = function(key, callback) {
  if(typeof callback !== 'function') throw new Error('Type Error: The second param "callback" MUST BE a function');
  var object;
  Promise.resolve().then(function() {
    // Try to parse JSON from localStorage
    var value = localStorage.getItem(key) || '';
    object = JSON.parse(value);
    if(!object || typeof object !== 'object') throw 0;
    return object;
  }).then(null, function() {
    // Create a new object on JSON parse error
    return object = {};
  }).then(callback).then(function() {
    // Save finally JSON to localStorage
    localStorage.setItem(key, JSON.stringify(object));
  });
};

