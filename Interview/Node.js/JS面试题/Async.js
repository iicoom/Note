async function oo() {
	console.log("log: 1")
}
// oo()
// 1
// Promise {<resolved>: undefined}

async function kk() {
	return 1;
}
// kk()
// Promise {<resolved>: 1}

function pp() {
    return Promise.resolve(2)
}

async function getResult() {
    console.log(await oo())
    console.log(await kk())
    console.log(await pp())
}
getResult()
// log: 1
// undefined
// 1
// 2