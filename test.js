import properties from './src';
import expect from 'expect.js';

describe('properties', function () {

  it('should decorate a class with properties', function () {
    class Foo {
      constructor() {
        expect(this.something).to.be(10);
        expect(this.another).to.be('hello');
        this.something = 20;
      }
    }

    @properties({
      something: 10,
      another: 'hello'
    })
    class Bar extends Foo {
      constructor() {
        super();
        expect(this.something).to.be(20);
        expect(this.another).to.be('hello');
      }
    }

    new Bar();
  });

});