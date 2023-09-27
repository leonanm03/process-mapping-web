"use client";
import { Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const routes = [
    {
      name: "/processes",
      label: "Processos",
    },
    {
      name: "/start-process",
      label: "Abrir Processo",
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    route.push(event.currentTarget.name);

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
          {routes.map((route) => {
            return (
              <Button
                key={route.name}
                as={Link}
                size="lg"
                colorScheme="purple"
                name={route.name}
                onClick={handleClick}
              >
                {route.label}
              </Button>
            );
          })}
        </Flex>
      </Stack>
    </Flex>
  );
}
