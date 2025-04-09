import { Avatar } from '@chakra-ui/react';
import { Flex, Heading, Spacer, Button, useColorMode, IconButton, useDisclosure } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar({ onOpen }) {  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex 
      align="center" 
      p={4} 
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      {/*  mobile menu button */}
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open menu"
        onClick={onOpen}
        variant="outline"
        display={{ base: 'flex', md: 'none' }}
        mr={2}
      />
      
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