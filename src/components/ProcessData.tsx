import { ProcessesContext } from "@/contexts/processesContext";
import { GetProcess } from "@/protocols";
import { deleteProcess } from "@/services";
import { Button, Divider, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";

export function ProcessData(process: GetProcess) {
  const { id, name, description, fatherProcessId, area } = process;
  const { fetchProcesses } = useContext(ProcessesContext);

  async function handleDeleteProcess() {
    if (
      confirm(
        `Deseja excluir o processo ${name}?\n Isso fará com que todos seus os subprocessos sejam excluídos também.`
      )
    ) {
      try {
        await deleteProcess(id);
        fetchProcesses();
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <Flex minW="full" justifyContent="space-between">
      <VStack minW="40px">
        <Text>Identificação</Text>
        <Divider />
        <Text>{id}</Text>
      </VStack>
      <Divider mx="2px" orientation="vertical" />
      <VStack minW="40px">
        <Text>Nome</Text>
        <Divider />
        <Text>{name}</Text>
      </VStack>
      <Divider mx="2px" orientation="vertical" />
      <VStack minW="40px">
        <Text>Área</Text>
        <Divider />
        <Text>{area.name}</Text>
      </VStack>
      <Divider mx="2px" orientation="vertical" />
      <VStack minW="40px">
        <Text>Descrição</Text>
        <Divider />
        <Text maxW="500px">{description}</Text>
      </VStack>
      <Divider mx="2px" orientation="vertical" />
      <VStack minW="40px">
        <Text>Processo Pai</Text>
        <Divider />
        <Text>{fatherProcessId}</Text>
      </VStack>
      <Divider mx="2px" orientation="vertical" />
      <VStack minW="40px">
        <Text>Opções</Text>
        <Divider />
        <Button
          as={Link}
          onClick={handleDeleteProcess}
          size="sm"
          colorScheme="green"
          minW={40}
        >
          Novo Subprocesso
        </Button>
        <Button as={Link} size="sm" colorScheme="purple" minW={40}>
          Editar
        </Button>
        <Button as={Link} size="sm" colorScheme="red" minW={40}>
          Excluir
        </Button>
      </VStack>
    </Flex>
  );
}
