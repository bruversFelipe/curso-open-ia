import { useState } from "react";
import Wrapper from "./style";

const initialState = {
  messages: [
    {
      key: "1",
      role: "system",
      message: "Olá, eu sou o Bruvers e sou seu assistente virtual.",
    },
  ],
  value: "",
  loading: false,
};

function App() {
  const [state, setState] = useState(initialState);

  const onChangeInput = (evt) => {
    const { value } = evt.target;

    setState((prevState) => ({ ...prevState, value }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    let messages = state.messages;

    messages.push({
      key: Math.random(),
      role: "user",
      message: state.value,
    });

    const payload = {
      message: state.value,
    };
    setState((prevState) => ({
      ...prevState,
      messages,
      value: "",
      loading: true,
    }));

    setTimeout(() => {
      fetch("http://localhost:8000/converse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          messages.push({
            key: Math.random(),
            role: "system",
            message: res.data,
          });
        })
        .then(() => {
          setState((prevState) => ({
            ...prevState,
            messages,
            loading: false,
          }));
        });
    }, 500);
  };

  return (
    <Wrapper>
      <div className="content-chat">
        <div className="header">Bruvers</div>
        <div className="body-chat">
          {state.messages.map((item) => (
            <div
              className={`item-chat ${
                item.role === "system" ? "chat-left" : "chat-right"
              }`}
              key={item.key}
            >
              <div className="message">{item.message}</div>
              <div>
                <strong>De: </strong>
                {item.role === "system" ? "Bruvers" : "Eu"}
              </div>
            </div>
          ))}
        </div>
        <div className="loading">
          {state.loading && <small>digitando...</small>}
        </div>
        <div className="footer">
          <input value={state.value} onChange={onChangeInput} />{" "}
          <button onClick={onSubmit}>➤</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
