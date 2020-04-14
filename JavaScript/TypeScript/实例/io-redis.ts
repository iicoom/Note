declare class Commander {
	getBuiltinCommands(): string[];
	createBuiltinCommand(commandName: string): {};
	defineCommand(
			name: string,
			definition: {
					numberOfKeys?: number;
					lua?: string;
			},
	): void;
	sendCommand(): void;
}

declare namespace IORedis {

	type BooleanResponse = 1 | 0;
	type ValueType = string | number | any[];

	interface Redis extends Commander {
		hget(key: KeyType, field: string, callback: (err: Error, res: string | null) => void): void;
		hget(key: KeyType, field: string): Promise<string | null>;
		
		hmset(key: KeyType, ...args: ValueType[]): Promise<BooleanResponse>;
		hmset(
				key: KeyType,
				data: object | Map<string, ValueType>,
				callback: (err: Error, res: BooleanResponse) => void,
		): void;
		hmset(key: KeyType, data: object | Map<string, ValueType>): Promise<BooleanResponse>;
	}
}

// 调用
// const result = await RedisClient.hget('website', 'google')  // 只能获取一个filed
// const result = await RedisClient.hmget('website', ['google', 'yahoo', 'baidu'])