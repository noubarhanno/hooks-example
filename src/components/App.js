import React, { useState } from "react";
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    // instead of state={resource:'posts'}
    // we use below 
    // but if we want to use different values 
    // state = {resource: 'posts', count:0}
    // so const[resource, setResource] = useState('posts')
    // const [counter , setCounter] = useState(0)
    const [resource, setResource] = useState('posts');

    // the code above is like destructuring the array into a variables but instead of doing 
    // resource = useState('posts')[0] and setResource = useState('posts')[1]
    // we're going to do [resource, setResource] = useState('posts')
    // so whatever the first element in the array will be assign to the resource variable and the seoncd element will be assigned to the second variable

  return (
    <div>
        <UserList />
      <div>
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
