import {
  Avatar,
  Card,
  CardBody,
  Stack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Text,
  Box,
} from '@chakra-ui/react';

export default function ProfileCard() {
  return (
    <Card variant="outline">
      <CardBody>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Avatar
            size="xl"
            name="Mercy Lubanga"
            src="/mercy-profile.jpg"
            border="2px solid teal.500"
            boxShadow="md"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          />

          <Stack spacing={1} w="full">
            <Heading size="md" wordBreak="break-word">
              Mercy Lubanga
            </Heading>
            <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>
              Full Stack Developer
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              color="teal.500"
              whiteSpace="normal"
              wordBreak="break-word"
            >
              JavaScript | React | Node | HTML | CSS | Tailwind CSS | MongoDB | Express | Firebase
            </Text>
          </Stack>
        </Stack>

        <Box mt={6} overflowX="auto">
          <StatGroup
            flexWrap="wrap"
            spacingX={{ base: 4, md: 10 }}
            spacingY={4}
            justify={{ base: 'flex-start', md: 'space-between' }}
          >
            <Stat minW="120px">
              <StatLabel>Completed Projects</StatLabel>
              <StatNumber>5</StatNumber>
            </Stat>
            <Stat minW="120px">
              <StatLabel>Avg. Rating</StatLabel>
              <StatNumber>4.5/5</StatNumber>
            </Stat>
            <Stat minW="120px">
              <StatLabel>Earnings (2025)</StatLabel>
              <StatNumber>$7,000</StatNumber>
            </Stat>
          </StatGroup>
        </Box>
      </CardBody>
    </Card>
  );
}
