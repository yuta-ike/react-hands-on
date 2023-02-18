import React from "react";
import { Link } from "react-router-dom";
import { Header as MantineHeader, Group } from "@mantine/core";

const Header = () => {
  return (
    <MantineHeader height={60} mb="sm">
      <Group>
        Book Manager
        <Link to="/">一覧</Link>
        <Link to="/create">追加</Link>
      </Group>
    </MantineHeader>
  );
};

export default Header;
