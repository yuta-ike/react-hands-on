import { useEffect, useState } from "react";
import { Card, Stack, Text, Button, Group, Badge, Input } from "@mantine/core";
import { createBook } from "./repo/createBook";
import { getBooks } from "./repo/getBooks";
import { updateBookStatus } from "./repo/updateBookStatus";

const BookList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const books = await getBooks();
      setBooks(books);
    })();
  }, []);

  const handleStartReading = async (id) => {
    await updateBookStatus(id, "IN_PROGRESS");
  };

  const handleComplete = async (id) => {
    await updateBookStatus(id, "COMPLETED");
  };

  const handleCancelReading = async (id) => {
    await updateBookStatus(id, "NOT_STARTED");
  };

  const handleCreate = async () => {
    await createBook(title, description);
    window.alert("本を追加しました");
  };

  return (
    <Stack>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Stack>
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
      </Card>

      <Stack spacing="sm">
        {books.map((book) => (
          <Card key={book.id} shadow="sm" p="lg" radius="md" withBorder>
            <Group>
              <Text weight={700}>{book.title}</Text>
              <Badge>
                {book.status === "NOT_STARTED"
                  ? "未読"
                  : book.status === "IN_PROGRESS"
                  ? "読書中"
                  : "既読"}
              </Badge>
            </Group>
            <Text size="sm" color="dimmed">
              {book.description}
            </Text>
            {book.status === "NOT_STARTED" ? (
              <Button onClick={() => handleStartReading(book.id)}>
                読み始める
              </Button>
            ) : book.status === "IN_PROGRESS" ? (
              <Button onClick={() => handleComplete(book.id)}>完了</Button>
            ) : (
              <Button onClick={() => handleCancelReading(book.id)}>
                未読に戻す
              </Button>
            )}
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default BookList;
