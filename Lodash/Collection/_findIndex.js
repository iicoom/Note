var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

undefined
_.findIndex(users, function(o) { return o.user == 'barney'; });
0
_.findIndex(users, function(o) { return o.user == 'barne'; });
-1

_.findIndex(users, function(o) { return o.user == 'barney' || o.user == 'fred'; });
0
_.findIndex(users, function(o) { return o.user == 'fred' || o.user == 'barney'; });
0