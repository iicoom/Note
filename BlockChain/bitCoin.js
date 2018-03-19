import BlockChain from './blockChain'

let bitCoin = new BlockChain();
bitCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
bitCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));

// 检查是否有效(将会返回true)
console.log('Blockchain valid? ' + bitCoin.isChainValid());

// 现在尝试操作变更数据
bitCoin.chain[1].data = { amount: 100 };

// 再次检查是否有效 (将会返回false)
console.log("Blockchain valid? " + bitCoin.isChainValid());

/*
这个小栗子还远未达到完成的程度。它还没有实现POW（工作量证明机制）或P2P网络来与其它矿工来进行交流。

但他确实证明了区块链的工作原理。许多人认为原理会非常复杂，但这篇文章证明了区块链的基本概念是非常容易理解和实现的。
*/

/*
测试

现在让我们来测试一下我们的区块链，看看在POW下添加一个新区块会有什么效果。我将会使用之前的代码。我们将创建一个新的区块链实例然后往里添加2个区块。
*/
let savjeeCoin = new Blockchain();

console.log('Mining block 1');
savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));

console.log('Mining block 2');
savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));

/*
如果你运行了上面的代码，你会发现添加新区块依旧非常快。这是因为目前的难度只有2（或者你的电脑性能非常好）。

如果你创建了一个难度为5的区块链实例，你会发现你的电脑会花费大概十秒钟来挖矿。随着难度的提升，你的防御攻击的保护程度越高。
 */