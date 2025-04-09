import { Avatar } from '@chakra-ui/react';
import { Flex, Heading, Spacer, Button, useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { BellIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex 
      align="center" 
      p={4} 
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
    >
      <Heading size="md">FreelanceHub</Heading>
      
      <Spacer />
      
      <Flex align="center" gap={4}>
        <IconButton
          icon={<BellIcon />}
          aria-label="Notifications"
          variant="ghost"
        />
        <Button 
          leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="outline"
        >
          {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Avatar name="User Name" size="sm" />
      </Flex>
    </Flex>
  );
}