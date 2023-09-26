import {
  Button,
  Link,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

export function Navigation() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <AiOutlineMenu />
        </Button>
      </PopoverTrigger>
      <PopoverContent width="150px">
        <PopoverArrow />
        <PopoverBody>
          <List spacing={2} >
            <ListItem>
              <Link href="/">Homepage</Link>
            </ListItem>
            <ListItem>
              <Link href="/processes">Processos</Link>
            </ListItem>
            <ListItem>
              <Link href="/start-process">Abrir processo</Link>
            </ListItem>
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
