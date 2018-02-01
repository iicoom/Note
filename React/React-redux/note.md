[redux官网](https://redux.js.org/docs/basics/UsageWithReact.html)

> React bindings for Redux embrace the idea of separating presentational and container components. 

rather than write container components, we will generate them using the connect() function provided by React Redux, as you will see below.

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)


## Async Actions
When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

* An action informing the reducers that the request began.

The reducers may handle this action by toggling an isFetching flag in the state. This way the UI knows it's time to show a spinner.

* An action informing the reducers that the request finished successfully.

The reducers may handle this action by merging the new data into the state they manage and resetting isFetching. The UI would hide the spinner, and display the fetched data.

* An action informing the reducers that the request failed.

The reducers may handle this action by resetting isFetching. Additionally, some reducers may want to store the error message so the UI can display it.


{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }

## Synchronous Action Creators


