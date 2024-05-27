import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, StackDivider } from "@chakra-ui/react";
import { FaHome, FaTags, FaInfoCircle } from "react-icons/fa";

const threads = [
  { title: "How to learn React?", author: "John Doe", replies: 12, timestamp: "2023-10-01 10:00" },
  { title: "Best practices for Node.js", author: "Jane Smith", replies: 8, timestamp: "2023-10-02 14:30" },
  { title: "Understanding Async/Await", author: "Alice Johnson", replies: 5, timestamp: "2023-10-03 09:15" },
];

const categories = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} mb={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Link href="/" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#categories" display="flex" alignItems="center">
            <FaTags />
            <Text ml={2}>Categories</Text>
          </Link>
          <Link href="#about" display="flex" alignItems="center">
            <FaInfoCircle />
            <Text ml={2}>About</Text>
          </Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} align="start">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="lg" mb={4}>Discussion Threads</Heading>
          <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="gray.200" />}>
            {threads.map((thread, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">{thread.title}</Heading>
                <Text>by {thread.author}</Text>
                <Text>{thread.replies} replies</Text>
                <Text fontSize="sm" color="gray.500">{thread.timestamp}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={2} align="stretch">
            {categories.map((category, index) => (
              <Link key={index} href={`#${category.toLowerCase()}`} p={2} borderWidth="1px" borderRadius="md" _hover={{ bg: "gray.100" }}>
                {category}
              </Link>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;