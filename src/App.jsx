import { useState } from "react";

const styled = {
  motion: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};

const App = () => {
  const Answer = (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase().trim() !== "kyle";
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 2000);
    });
  };

  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await Answer(answer);

      setStatus("success");

      setAnswer("");
    } catch (err) {
      setStatus("typing");
      console.log(err);
      setError(err);
      setAnswer("");
    }
  }
  return (
    <>
      <h1>City Quiz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint
        voluptatibus! Labore impedit natus earum mollitia? Magnam dolore
        corrupti quam quo voluptas possimus cum, similique error magni?
        Perspiciatis, repellat neque!
      </p>
      <form style={styled.motion} onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          id="textarea"
          name="textarea"
          placeholder="Enter "
        />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
};

export default App;
