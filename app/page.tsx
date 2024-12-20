import { Button, Flex } from "@mantine/core";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Flex gap={4} p={4}>
        <Button color="theme-orange">Orange</Button>
        <Button color="theme-blue">Blue</Button>
        <Button color="theme-black">Black</Button>
      </Flex>
      <Flex gap={4} p={4}>
        <Button color="var(--mantine-color-theme-orange-0)" c='red'>Light Orange</Button>
        <Button color="var(--mantine-color-theme-blue-0)" c='blue'>Light Blue</Button>
        <Button color="var(--mantine-color-theme-black-0)" c='black'>Light Black</Button>
      </Flex>
    </React.Fragment>
  );
}
