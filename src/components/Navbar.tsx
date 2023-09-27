"use client";
import { Flex, Heading, Image, Link, Spacer } from "@chakra-ui/react";
import { Navigation } from ".";

export function Navbar() {
  return (
    <Flex as="nav" px="25px" height="60px" alignItems="center" bg="purple.200">
      <Heading as="h1" fontSize="20px">
        <Link href="/">
          <Flex gap={3}>
            <Image src="https://stage.consulting/favicon.png" alt="PM" />
            Process Mapping
          </Flex>
        </Link>
      </Heading>

      <Spacer />
      <Navigation />
    </Flex>
  );
}
