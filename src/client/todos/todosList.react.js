import Component from 'react-addons-pure-render-mixin';
import React, {PropTypes} from 'react';
import Todo from './todo.react';

export default class Todos extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired
  }

  render() {
    const {actions, list, msg} = this.props;

    if (!list.size)
      return <p>{msg.emptyList}</p>;

    return (
      <ol className="todos">
        {list.map(todo =>
          <Todo {...{actions, todo}} key={todo.id} />
        )}
      </ol>
    );
  }

}
