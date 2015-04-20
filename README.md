## Object Storage

#### Usage

```
objectStorage('LocalStorageKey', function(data) {
  // Save data on next tick
  data.test = 123;
});
```

```
objectStorage('LocalStorageKey', function(data) {
  data.test = 456;
  // Save data on next tick after promise resolved
  return new Promise(function(resolve) {
    setTimeout(resolve, 1000);
  });
});
```

