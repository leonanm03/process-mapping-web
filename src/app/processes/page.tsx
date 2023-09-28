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
  Heading,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";

export default function Processes() {
  const { processes, fetchProcesses } = useContext(ProcessesContext);

  useEffect(() => {
    fetchProcesses();
  }, []);

  return (
    <>
      {processes.length > 0 &&
        processes.map((process) => (
          <Accordion allowToggle key={process.id}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {process.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ProcessData {...process} />
                {process.subProcess.length > 0 && (
                  <div className="mt-3 text-l font-medium">subprocessos:</div>
                )}
                {process.subProcess.map((subprocess) => (
                  <SubprocessCascade key={subprocess.id} {...subprocess} />
                ))}
              </AccordionPanel>
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
    </>
  );
}
