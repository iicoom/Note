var _ = require('lodash');

// Use the "interpolate" delimiter to create a compiled template.
var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'

//等同于
var compiled = _.template('hello <%= user %>!')({ 'user': 'fred' });

// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'