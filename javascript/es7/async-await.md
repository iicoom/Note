# Async-await

function getUser\(userId\) { return new Promise\(resolve =&gt; { setTimeout\(\(\) =&gt; { resolve\('john'\); }, 1000\) }\) }

function getBankBalance\(user\) { return new Promise\(\(resolve, reject\) =&gt; { setTimeout\(\(\) =&gt; { if \(user == 'john'\) { resolve\('$1,000'\); } else { reject\('unknown user'\); } }, 1000\) }\) }

// Instead of .. // ES2015 Promise function getAmount\(userId\) { getUser\(userid\) .then\(getBankBalance\) .then\(amount =&gt; { console.log\(amount\); }\) }

// User... // ES2017 async function getAmount2\(userId\) { var user = await getUser\(userId\); var amount = await getBankBalance\(user\); console.log\(amount\); }

getAmount\(\) // $1,000 getAmount2\(\) // $1,000

