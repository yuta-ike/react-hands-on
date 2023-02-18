import { Card, Stack, Text, Button, Group, Badge, Input } from "@mantine/core";
import { useState } from "react";

const initBooks = [
  {
    id: 1,
    title: "セロ弾きのゴーシュ",
    description:
      "ゴーシュは町の活動写真館の楽団「金星音楽団」でセロ（チェロ）を弾く係。楽団では近く町の音楽会で演奏予定の『第六交響曲』の練習を続けていたが、あまりにも下手なためにいつも楽長に厳しく叱責されていた。そんなゴーシュのもとに、カッコウを始め様々な動物が夜毎に訪れ、いろいろと理由を付けてゴーシュに演奏を依頼する。(https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%AD%E5%BC%BE%E3%81%8D%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B7%E3%83%A5)",
    status: "NOT_STARTED",
  },
  {
    id: 2,
    title: "こころ",
    description:
      "語り手は「私」。時は明治末期。夏休みに鎌倉の由比ヶ浜に海水浴に来ていた「私」は、同じく来ていた「先生」と出会い、交流を始め、東京に帰ったあとも先生の家に出入りするようになる。(https://ja.wikipedia.org/wiki/%E3%81%93%E3%82%9D%E3%82%8D)",
    status: "IN_PROGRESS",
  },
  {
    id: 3,
    title: "怪人二十面相",
    description:
      "実業界の大立者である羽柴壮太郎の家に世間で噂の盗賊「怪人二十面相」からロマノフ王家に伝わる宝石を狙った予告状が届いていた。一方で家出をして南洋に渡った羽柴家の長男壮一が10年以上を経て帰国した。しかし、ロマノフ王家の宝石は奪われてしまい、さらに次男の壮二を誘拐されることに。(https://ja.wikipedia.org/wiki/%E6%80%AA%E4%BA%BA%E4%BA%8C%E5%8D%81%E9%9D%A2%E7%9B%B8_(%E5%B0%8F%E8%AA%AC))",
    status: "COMPLETED",
  },
];

const BookList = () => {
  const [books, setBooks] = useState(initBooks);

  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleStartReading = async (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: "IN_PROGRESS" } : book
      )
    );
  };

  const handleComplete = async (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: "COMPLETED" } : book
      )
    );
  };

  const handleCancelReading = async (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: "NOT_STARTED" } : book
      )
    );
  };

  const handleCreate = () => {
    setBooks([
      ...books,
      { id: parseInt(bookId, 10), title, description, status: "NOT_STARTED" },
    ]);
  };

  return (
    <Stack>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Stack>
          <Input.Wrapper id="bookId" label="本のID" required>
            <Input
              id="bookId"
              placeholder="ID"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
            />
          </Input.Wrapper>
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
