import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const PricingTable = () => {
  return (
    <Flex justify="center" align="center" mt="60px">
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="gray.100" p="4">
          <Heading as="h3" size="md" textAlign="center">
            Basic Plan
          </Heading>
          <Text textAlign="center" mt="2" color="gray.600">
            Perfect for individuals
          </Text>
        </Box>

        <Box p="6">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            $9.99<span color="gray.500" fontSize="md">/month</span>
          </Text>

          <Text mt="2" textAlign="center">
            Access to essential features
          </Text>

          <Button colorScheme="teal" mt="4" isFullWidth>
            Choose Plan
          </Button>
        </Box>
      </Box>

      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" ml="4">
        <Box bg="teal.100" p="4">
          <Heading as="h3" size="md" textAlign="center" color="teal.800">
            Premium Plan
          </Heading>
          <Text textAlign="center" mt="2" color="teal.600">
            Ideal for businesses
          </Text>
        </Box>

        <Box p="6">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="teal.600">
            $19.99<span color="gray.500" fontSize="md">/month</span>
          </Text>

          <Text mt="2" textAlign="center">
            Full access to all features
          </Text>

          <Button colorScheme="teal" mt="4" isFullWidth>
            Choose Plan
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default PricingTable;
