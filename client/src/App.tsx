import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { io } from "socket.io-client";

const socket = io("http://10.0.0.6:3001");

const App: React.FC = () => {
  const [textContent, setTextContent] = useState("");
  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    socket.on("newText", (content: string) => {
      setTextContent(content);
    });
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTextContent(newText);
    socket.emit("textChange", newText);
  };

  return (
    <Container className="m-5 text-center">
      <h1>Text Editor</h1>
      <textarea
        ref={textArea}
        value={textContent}
        onChange={handleTextChange}
        rows={25}
        cols={80}
      />
    </Container>
  );
};

export default App;
