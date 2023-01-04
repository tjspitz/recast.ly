var Search = ({onSubmit}) => {

  const [search, setSearch] = React.useState('');

  const handleChange = function (event) {
    setSearch(event.target.value);
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log('submitted: ' + search);
    onSubmit(search);
  }

  return (
    <form className="search-bar form-inline"
      onSubmit={handleSubmit}>
      <input className="form-control"
        type="text"
        onChange={handleChange}
        />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


/*
function ToDoList({allTasks}) { // how the child accepts data from the parent

  return <ul>{allTasks.map(task => <li key={task.id}>{task.name}</li>)}</ul>;
}

export default function App() {

  const allTasks = [
    {name: 'get better at react', id: 0},
    {name: 'get better at using states', id: 1}
  ];

  return (
    <div className="App">
      <h1>Tom's To-do List</h1>
      <label>
        <input
          name='task'
          defaultValue='Enter a task...'
        />
      </label>
      < ToDoList allTasks={allTasks}/> // how the parent passes data to a child
    </div>
  );
}
*/