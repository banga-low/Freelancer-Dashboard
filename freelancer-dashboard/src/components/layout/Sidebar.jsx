import { 
  Box, VStack, Link, Icon, Text, 
  Flex, Avatar, useColorModeValue,
  useDisclosure, Drawer,
  DrawerOverlay, DrawerContent, DrawerCloseButton,
  DrawerBody
} from '@chakra-ui/react';
import { 
  FiHome, FiBriefcase, FiDollarSign, 
  FiUsers 
} from 'react-icons/fi';
 
const IconWrapper = ({ icon, color }) => {
  const borderColor = {
    blue: 'blue.300',
    yellow: 'yellow.300',
    green: 'green.300',
    purple: 'purple.300'
  };

  const bgColor = {
    blue: 'blue.100',
    yellow: 'yellow.100',
    green: 'green.100',
    purple: 'purple.100'
  };

  const iconColor = {
    blue: 'blue.600',
    yellow: 'yellow.600',
    green: 'green.600',
    purple: 'purple.600'
  };

  return (
    <Box
      p={2}
      borderRadius="md"
      border="2px solid"
      borderColor={borderColor[color]}
      bg={bgColor[color]}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      mr={3}
    >
      <Icon as={icon} color={iconColor[color]} boxSize={5} />
    </Box>
  );
};

 
function NavLink({ icon, label, isActive, onClick, color }) {
  const activeBg = useColorModeValue(`${color}.50`, `${color}.800`);
  const activeColor = useColorModeValue(`${color}.600`, `${color}.200`);

  return (
    <Link
      display="flex"
      alignItems="center"
      p={3}
      borderRadius="md"
      bg={isActive ? activeBg : 'transparent'}
      color={isActive ? activeColor : 'inherit'}
      _hover={{ bg: activeBg }}
      onClick={onClick}
    >
      <IconWrapper icon={icon} color={color} />
      <Text>{label}</Text>
    </Link>
  );
}

 
export default function Sidebar({ activeView, setActiveView }) {
  const sidebarBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
   
  const { isOpen, onOpen, onClose } = useDisclosure();

   
  const SidebarContent = () => (
    <Box 
      w="250px" 
      h="100vh" 
      borderRight="1px solid" 
      borderColor={borderColor}
      bg={sidebarBg}
    >
      {/* Profile Section */}
      <Flex 
        direction="column" 
        align="center" 
        p={4} 
        pb={6}
        borderBottom="1px solid" 
        borderColor={borderColor}
      >
        <Avatar 
          size="xl" 
          name="Mercy Lubanga" 
          src="/mercy-profile-small.jpg" 
          mb={3}
          border="2px solid"
          borderColor="teal.400"
        />
        <Text fontWeight="bold">Mercy Lubanga</Text>
        <Text fontSize="sm" color="gray.500">Full Stack Developer</Text>
        <Text fontSize="sm" color="gray.500">Email: mercylubanga59@gmail.com</Text>
        <Text fontSize="sm" color="gray.500">Phone: +254721934552</Text>
      </Flex>

      {/* Navigation Links */}
      <VStack align="stretch" spacing={1} p={4}>
        {[
          { icon: FiHome, label: 'Dashboard', view: 'dashboard', color: 'blue' },
          { icon: FiBriefcase, label: 'Projects', view: 'projects', color: 'yellow' },
          { icon: FiDollarSign, label: 'Earnings', view: 'earnings', color: 'green' },
          { icon: FiUsers, label: 'Clients', view: 'clients', color: 'purple' }
        ].map((item) => (
          <NavLink 
            key={item.view}
            icon={item.icon}
            label={item.label}
            isActive={activeView === item.view}
            onClick={() => {
              setActiveView(item.view);
              onClose();  
            }}
            color={item.color}
          />
        ))}
      </VStack>
    </Box>
  );

   
  return (
    <>
      {/* Desktop Sidebar - shows on medium screens and up */}
      <Box display={{ base: 'none', md: 'block' }}>
        <SidebarContent />
      </Box>

      {/* Mobile Drawer - shows on small screens */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="xs">
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}