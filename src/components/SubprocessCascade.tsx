import { GetProcess } from "@/protocols";
import { ProcessData } from ".";
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

export function SubprocessCascade(process: GetProcess) {
  return (
    <Accordion allowToggle key={process.id} mt="8px">
      <AccordionItem
        bg="purple.200"
        color="black"
        borderRadius="5px"
        border="purple"
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="bold">
              {process.name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          bg="purple.50"
          borderLeft="3px solid"
          borderColor="purple.200"
        >
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
      </AccordionItem>
    </Accordion>
  );
}
