/**
 * A *dispatching function* (or simply *dispatch function*) is a function that
 * accepts an action or an async action; it then may or may not dispatch one
 * or more actions to the store.
 */
export interface Dispatch<S> {
    <A extends Action>(action: A): A;
}

/**
 * Function to remove listener added by `Store.subscribe()`.
 */
export interface Unsubscribe {
    (): void;
}

export interface Action {
    type: any;
}

export interface AnyAction extends Action {
    [extraProps: string]: any;
}

/**
 * They are used
 * to reduce a collection of values down to a single value
 * 
 * * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 */
export type Reducer<S> = (state: S, action: AnyAction) => S;

/**
 * A store is an object that holds the application's state tree.
 */
export interface Store<S> {
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     */
    dispatch: Dispatch<S>;

    /**
     * Reads the state tree managed by the store.
     */
    getState(): S;

    /**
     * Adds a change listener. It will be called any time an action is
     * dispatched, and some part of the state tree may potentially have changed.
     */
    subscribe(listener: () => void): Unsubscribe;

    /**
     * Replaces the reducer currently used by the store to calculate the state.
     * @param nextReducer 
     */
    replaceReducer(nextReducer: Reducer<S>): void;
}