import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  createIncrementAction,
  createDecrementAction,
  createResetAction,
  createFetchJsonAction
} from '../store';
import { countPathSelector, postsPathSelector } from '../store/app.selectors';

const mapStateToProps = createStructuredSelector({
  count: countPathSelector,
  posts: postsPathSelector
});

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(createIncrementAction()),
    decrement: () => dispatch(createDecrementAction()),
    reset: () => dispatch(createResetAction()),
    fetchJson: () => dispatch(createFetchJsonAction())
  };
}

function ReactHello({ count, posts, increment, decrement, reset, fetchJson }) {
  const postItems = getPostItems(posts);

  return (
    <div className="ReactHello">
      <div className="ReactHello-header">
        <img src="/assets/logo.svg" className="db center" style={{maxWidth: '24rem'}} alt="logo" />
        <h2>Current count: { count }</h2>
      </div>
      <p className="ReactHello-intro">
        To get started, edit <code>src/react-hello/ReactHello.tsx</code> and save to reload.
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={fetchJson}>Fetch JSON</button>
      <hr />
      <ul>{...postItems}</ul>
    </div>
  );
}

function getPostItems(posts) {
 return posts.map(post => (
    <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </li>
  ));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactHello);
