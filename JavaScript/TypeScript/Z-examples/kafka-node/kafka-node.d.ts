import { EventEmitter } from 'events';


export class KafkaClient extends EventEmitter {

    constructor(options?: KafkaClientOptions);
}

export class Producer {
    constructor(client: KafkaClient, options?: ProducerOptions, customPartitioner?: CustomPartitioner);

    on (eventName: 'ready', cb: () => any): void;
    on (eventName: 'error', cb: (error: any) => any ): void;

    send(payloads: ProduceRequest[], cb:(error: any, data: any) => any): void;

    createTopics(topics: string[], cb: (error: any, data: any) => any): void;

}

export class Consumer {
    client: KafkaClient;

    constructor(client: KafkaClient, fetchRequest: Array<OffsetFetchRequest | string>, options: ConsumerOptions);
}

export interface KafkaClientOptions {
    kafkaHost?: string;
    connectTimeout?: number;
    requestTimeout?: number;
    autoConnect?: boolean;
    connectRetryOptions?: RetryOptions;
    sslOptions?: any;
    clientId?: string;
}

export interface RetryOptions {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
}

export interface ProducerOptions {
    requireAcks?: number;
    ackTimeoutMs?: number;
    partitionerType?: number;
}

export interface ProduceRequest {
    topic: string;
    messages: any; // string[] | Array<KeyedMessage> | string | KeyedMessage
    key?: string;
    partition?: number;
    attributes?: number;
}

export interface OffsetFetchRequest {
    topic: string;
    partition?: number;
    offset?: number;
}

export interface ConsumerOptions {
    groupId?: string;
    autoCommit?: boolean;
    autoCommitIntervalMs?: number;
    fetchMaxWaitMs?: number;
    fetchMinBytes?: number;
    fetchMaxBytes?: number;
    fromOffset?: boolean;
    encoding?: 'buffer' | 'utf8';
    keyEncoding?: 'buffer' | 'utf8';
}

export type CustomPartitioner = (partitions: number[], key: string | Buffer) => number;

/**
 * 2个问题
 * 1. constructor error
 * 2. method error
 * 
 * 结论：如果文件命名为 kafka-node.ts 就会出现上面的错误，命名为 kafka-node.d.ts 则不会有问题
 * 
 * What is the difference between *.d.ts vs *.ts in typescript?
 * 
 * TypeScript: *.ts and *d.ts extensions
 * https://stackoverflow.com/questions/40840821/typescript-ts-and-d-ts-extensions
 * 
 * d.ts [are declaration files]
 * 
 * I'll answer with the example that shows why you need these files.
 * Suppose, you have a lib.js library with f function.
 * 
    "use strict";
    function f() {
    }
    exports.f = f;

    This library works well with other js files. For example. using from main.js:

    var f = require('./lib').f;
    f();  
    
    
    But you're developing in TypeScript, and you need to use this function, 
    so in your index.ts you write the following:

    import {f} from './lib';

    But typescript compiler will give you an error:
    Error:(1, 17) TS2307:Cannot find module './lib'.

    This is because typescript can't read js files. So you need to tell a typescript compiler about 
    your module and a function. Certainly, you don't want to rewrite the entire lib in typescript. 
    But there is a solution - declaration files. 
    You can use the function f in index.ts by creating a declaration file for the lib.js by 
    putting the following into lib.d.ts file:

    export declare function f(): void;

    Now it will all compile correctly. 
 */