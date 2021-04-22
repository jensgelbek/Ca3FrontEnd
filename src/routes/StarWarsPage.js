import * as React from "react";
import { fetchData, handleError } from "../apiUtils";
import CenteredContainer from "../components/CenteredContainer";
import { INFO } from "../settings";
import { Button, ButtonGroup } from "react-bootstrap";

function StarWarsPage() {
  const [starWarsData, setStarWarsData] = React.useState();
  const [error, setError] = React.useState();
  const [correct, setCorrect] = React.useState("");
 
  
  React.useEffect(() => {
    fetchData(INFO.FETCH_STARWARS)
      .then((data) => setStarWarsData(data))
      .catch((error) => handleError(error, setError));
  }, []);

function handleClick(event) {
    event.preventDefault();
    if (event.target.value===starWarsData.rightAnswer){setCorrect("Correct "+ event.target.value+" is the answer");}
    else {setCorrect("Wrong  "+ event.target.value+" is not the answer")}
   
  }
  
  return (
    <CenteredContainer>
      <h1>Welcome to my fabolous Star Wars Quiz</h1>
      {error && <h4>{error.message}</h4>}
      {starWarsData && <div><h4>{starWarsData.question}</h4>
      
        <ButtonGroup aria-label="Basic example">
          <Button   variant="secondary" value={starWarsData.answer1} onClick={handleClick}> {starWarsData.answer1} </Button>
          <Button variant="secondary" value={starWarsData.answer2} onClick={handleClick}>{starWarsData.answer2}</Button>
          <Button variant="secondary" value={starWarsData.answer3} onClick={handleClick}>{starWarsData.answer3}</Button>
        </ButtonGroup>
      </div>}
      <div>{correct}</div>
    </CenteredContainer>
  );
}

export default StarWarsPage;
