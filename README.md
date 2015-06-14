# Initialize values before `super` call in ES6 classes

In ES7, in the constructor of a class that inherits another, you can only use the `this` keyword *after* calling `super`. This is problematic if the parent class expects some initial value in the inheriting class.

With `decorator-initial-value`, you can now define the initial value so that parent classes that expect initial values will now be supplied with them.

```javascript
import properties from 'decorator-initial-values';

class Foo {
  constructor() {
    if (this.something < 10) {
      // ...
    } else {
      // ...
    }
  }

  _doSomething() { }
}

@properties({
  something: 10
})
class Bar extends Foo {
  
}
```

## Motivation

This is especially useful for inheriting from Backbone classes, where a lot of them expect initial values.

```javascript
@properties({
  tagName: 'li',
  className: 'something',
  events: {
    'click a': '_onClick'
  }
})
class FooView extends Backbone.View {
  _onClick() {
    // ...
  }
}
```

## Usage

Install `decorator-initial-values` using npm:

```shell
npm install decorator-initial-values
```

Then, use it in your code like so:

```javascript
import properties from 'decorator-initial-values';

class Bar { /* ... */ }

@properties({ /* ... */ })
class Foo extends Bar { /* ... */ }
```

## License

`decorator-initial-values` is [ISC License](https://github.com/shovon/decorator-initial-values[/blob/master/LICENSE)