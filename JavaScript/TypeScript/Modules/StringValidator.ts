// StringValidator.ts
export interface StringValidator {
	// 接受一个 字符串 参数  返回 一个 布尔
	isAcceptable(s: string): boolean;
}
