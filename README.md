## Object Storage

#### Usage

```javascript
var object = objectStorage('LocalStorageKey');

// Save automatically data on next tick
data.test = 123;
```

```javascript
var object1 = objectStorage('LocalStorageKey');
var object2 = objectStorage('LocalStorageKey');

// The result will be cache on the same tick
console.log(object1 === object2); // true

setTimeout(function() {
  var object3 = objectStorage('LocalStorageKey');
  // The result will not be cache on different tick
  console.log(object2 === object3); // false
});
```

