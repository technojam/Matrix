import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Search Your Github Issues </h1>
      <div className="wrapper">
        <div className="title">
          Search Github Issues 
        </div>
        < form action='#'>
          <div className="field">
            <input type='text'required></input>
            <label> Profile</label>
          </div>
          <div className="field">
            <input type='text' required>
            </input>
            <label> Issue</label>
          </div>
          <div class="container">
                <div class="center">
                     <button className="bt" type="button">Submit</button>
                </div>
                </div>
        </form>
        <div className="containerSecond">
          <div className="centerSecond">
            <h2> Output</h2>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
