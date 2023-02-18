import React from "react";
import { useState } from "react";
import { Stack, Button, Badge, Input } from "@mantine/core";
import { createBook } from "./repo/createBook";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

const BookCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {
    await createBook(title, description);
    navigate("/");
  };

  return (
    <Stack>
      <Header />
      <Input.Wrapper id="title" label="本のタイトル" required>
        <Input
          id="title"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Input.Wrapper>
      <Input.Wrapper id="description" label="本の説明" required>
        <Input
          id="description"
          placeholder="タイトル"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Input.Wrapper>
      <Button onClick={handleCreate}>追加する</Button>
    </Stack>
  );
};

export default BookCreate;
