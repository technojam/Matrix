import "./App.css";
import { useState } from "react";

function App() {
  const [orgValue, setOrgValue] = useState("");
  const [repoValue, setRepoValue] = useState("");
  const [activeIssues, setActiveIssues] = useState("");

  //GitHub API
  var url = "https://api.github.com/repos/organisation/issues";

  function addText(org, repo) {
    return url.replace("organisation", org + "/" + repo);
  }

  async function clickHandler() {
    var url = addText(orgValue, repoValue);

    let counter = 0;
    await fetch(url)
      .then((response) => response.json())
      .then((json) =>
        json.forEach((elements) => {
          if (elements.state === "open") {
            counter = Number(counter) + 1;
          }
        })
      );
    setActiveIssues(counter);
  }

  return (
    <div className="wrapper">
      <div className="title">Github Issues Searcher</div>
      <form action="#">
        <div className="field">
          <input
            type="text"
            onChange={(e) => setOrgValue(e.target.value)}
            required
          ></input>
          <label>Organisation</label>
        </div>
        <div className="field">
          <input
            type="text"
            onChange={(e) => setRepoValue(e.target.value)}
            required
          ></input>
          <label>Repository</label>
        </div>
        <div class="container">
          <div class="center">
            <button className="bt" type="button" onClick={clickHandler}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="containerSecond">
        <div className="centerSecond">
          <h2>
            Active Issues are: <span>{activeIssues}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
