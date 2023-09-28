"use client";
import { ProcessData } from "@/components";
import { SubprocessCascade } from "@/components/SubprocessCascade";
import { ProcessesContext } from "@/contexts/processesContext";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";

export default function Processes() {
  const { processes, fetchProcesses } = useContext(ProcessesContext);

  useEffect(() => {
    fetchProcesses();
  }, []);

  return (
    <Container minW="full">
      {processes.length > 0 &&
        processes.map((process) => (
          <Accordion colorScheme="purple" allowToggle key={process.id} mt="8px">
            <AccordionItem bg="purple.400" color="black" borderRadius="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                    {process.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <Flex>
                <Box minW="8px" bg="purple.400" />
                <AccordionPanel pb={4} bg="purple.50">
                  <ProcessData {...process} />
                  {process.subProcess.length > 0 && (
                    <Center mt="30px" mb="0px">
                      <Heading as="p" fontSize="17px">
                        Subprocessos:
                      </Heading>
                    </Center>
                  )}
                  {process.subProcess.map((subprocess) => (
                    <SubprocessCascade key={subprocess.id} {...subprocess} />
                  ))}
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          </Accordion>
        ))}
      {processes.length === 0 && (
        <Center h="calc(100vh - 60px)">
          <Heading as="h1" size="lg" colorScheme="purple">
            Não há processos cadastrados
          </Heading>
        </Center>
      )}
    </Container>
  );
}
