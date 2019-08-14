declare namespace NodeJS {

	interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

	class EventEmitter {
		addListener(event: string | symbol, listener: (...args: any[]) => void): this;
		on(event: string | symbol, listener: (...args: any[]) => void): this;
		listeners(event: string | symbol): Function[];
		listenerCount(type: string | symbol): number;
	}

	type Platform = 'aix'
        | 'android'
        | 'darwin'
        | 'freebsd'
        | 'linux'
        | 'openbsd'
        | 'sunos'
        | 'win32'
        | 'cygwin';

    
}