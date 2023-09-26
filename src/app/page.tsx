"use client";
import { Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      as="main"
      h="calc(100vh - 60px)"
      w="100vw"
      alignItems="center"
      justifyContent="center"
      bg="purple.50"
    >
      <Stack textAlign="center">
        <Heading>
          Olá, Bem vindo(a) ao <Text color="purple.500">Process Mapping</Text>
        </Heading>
        <Text fontSize="20px" maxW="500px">
          Aqui você poderá mapear e gerenciar seus processos de sua empresa de
          forma simples e intuitiva.
        </Text>
        <Flex justifyContent="center" gap={8} mt="20px">
          <Button variant="link" size="lg" colorScheme="purple">
            <Link href="/processes">Processos</Link>
          </Button>
          <Button variant="link" size="lg" colorScheme="purple">
            <Link href="/start-process">Abir Processo</Link>
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
