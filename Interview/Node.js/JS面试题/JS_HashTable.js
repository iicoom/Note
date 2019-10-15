// Hash table is one of the most important data structures in computing. 
// In JavaScript we don’t have any built-in hash table.

// http://www.mojavelinux.com/articles/javascript_hashes.html

var h = new Object(); // or just {}
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

// show the values stored
for (var k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + h[k]);
    }
}
/*
key is: one, value is: 1
key is: two, value is: 2
key is: three, value is: 3
*/

function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {}
        this.length = 0;
    }
}

var h = new HashTable({one: 1, two: 2, three: 3, "i'm no 4": 4});

alert('original length: ' + h.length);
alert('value of key "one": ' + h.getItem('one'));
alert('has key "foo"? ' + h.hasItem('foo'));
alert('previous value of key "foo": ' + h.setItem('foo', 'bar'));
alert('length after setItem: ' + h.length);
alert('value of key "foo": ' + h.getItem('foo'));

h.clear();
alert('length after clear: ' + h.length);