import React, { useState } from 'react';
import Todo from './Todo';

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
        <div>
            { showTodo && <Todo /> }
        </div>
        <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
    </div>
  )
}

export default UseRefExample3;