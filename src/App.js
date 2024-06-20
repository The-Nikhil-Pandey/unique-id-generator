//import uuid v4
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [active, setActive] = useState(false);
  const [long, setLong] = useState();
  const [short, setShort] = useState();
  const generate = () => {
    const unique_id = uuid();
    setLong(unique_id);
    const small_id = unique_id.slice(0, 8);
    setShort(small_id);
    setActive(true);
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <button
          style={{
            fontWeight: 600,
            fontSize: "20px",
            cursor: "pointer",
            padding: "10px",
          }}
          onClick={generate}
        >
          {active ? (
            <span>Click here to generate again</span>
          ) : (
            <span>Click here to generate </span>
          )}
        </button>
      </div>

      {active ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Unique ID</h1>
            <p
              style={{
                backgroundColor: "gray",
                width: "500px",
                padding: "5px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {long}
            </p>
          </div>
          <div>
            <h1>Sliced Unique ID</h1>
            <p
              style={{
                backgroundColor: "gray",
                width: "500px",
                padding: "5px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {short}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
