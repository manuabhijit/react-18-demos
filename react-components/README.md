### What are React components?

In the React JavaScript library, a component is a piece of code that represents a part of a user interface. Components can be either a function or a class, and they allow you to reuse code across your application.

React components are typically written in JavaScript, and they are made up of a render method that returns a description of what should be displayed on the screen, and a set of properties, or "props," that control the behavior of the component. You can think of a React component as a small, reusable piece of a user interface that can be composed with other components to build more complex user interfaces.

*Here is an example of a simple function component in React:*

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
And here is an example of a class component:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

You can use a component in your React application by rendering it to a DOM element like this:

```
ReactDOM.render(
  <Welcome name="Jane" />,
  document.getElementById('root')
);
```
This will render the Welcome component to the DOM element with an ID of root, and the component will be displayed on the screen with the text "Hello, Jane".