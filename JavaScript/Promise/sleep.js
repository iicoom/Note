function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve()
        }, second*1000)
    })
}

async function sleepDemo() {
    console.log("It will sleep 2s!")
    await sleep(2);
    console.log("After 2s.")
}
sleepDemo();
