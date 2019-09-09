> Presentational and Container Components

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

You’ll find your components much easier to reuse and reason about if you divide them into two categories. 
I call them Container and Presentational components* 
but I also heard Fat and Skinny, 
Smart and Dumb, 
Stateful and Pure, Screens and Components, etc. These all are not exactly the same, but the core idea is similar.


## Presentational Components

- Are concerned with how things look.

- Don’t specify how the data is loaded or mutated.

- Receive data and callbacks exclusively via props.

- Examples: Page, Sidebar, Story, UserInfo, List.


## Container Components

- Are concerned with how things work.

- Provide the data and behavior to presentational or other container components.

- Call Flux actions and provide these as callbacks to the presentational components.

- Are often stateful, as they tend to serve as data sources.

- Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.

- Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.


## Why containers?

https://medium.com/@learnreact/container-components-c0e67432e005


Say you have a component that displays comments. You didn’t know about container components. So, you put everything in one place:
```
class CommentList extends React.Component {
    this.state = { comments: [] };

    componentDidMount() {
        fetchSomeComments(comments => this.setState({ comments }));
    }

    render() {
        return (
            <ul>
                {
                    this.state.comments.map(c => (
                        <li>{c.body}-{c.author}</li>
                    ))
                } 
            </ul>
        )
    }
}
```
Your component is responsible for both fetching data and presenting it. There’s nothing “wrong” with this but you miss out on a few benefits of React.

Reusability
CommentList can’t be reused unless under the exact same circumstances.


Once again. This time with a container
First, lets pull out data-fetching into a container component.
```
class CommentListContainer extends React.Component {
    state = { comments: [] };

    componentDidMount() {
        fetchSomeComments(comments => this.setState({ comments }));
    };

    render() {
        return <CommentList comments={this.state.comments} />
    }
}

const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>
```

So, what did we get?

- We’ve separated our data-fetching and rendering concerns.

- We’ve made our CommentList component reusable.

- We’ve given CommentList the ability to set PropTypes and fail loudly.