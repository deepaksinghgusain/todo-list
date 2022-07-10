import { useEffect, useRef, useState } from "react";

function App() {

  const [todo,setTodo] = useState([]);

  const inputRef = useRef();

  useEffect(()=> {
  },[todo])

  const todoHandler = (event) => {
      event.preventDefault();

      setTodo([
        ...todo,
        event.target.value
      ])

      inputRef.current.value = ' ';
  }

  return (
    <div className="container my-4 text-center">
      <div className="mb-3">
        <input ref={inputRef} type="email" className="form-control" onKeyPress={(event) => {if(event.key == 'Enter') todoHandler(event)}  } />
      </div>
      <ul className="list-group">
        {todo.length ? (
            todo.map((t,index) =>(
              <li className="list-group-item" key={index}>{t}</li>
            ))
        ) : (
          <li className="list-group-item">No Todo yet</li>
        )}
       
      </ul>
    </div>
  );
}

export default App;
