import { Flex, Box } from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import DashboardView from './DashboardView'; 
import ProjectsView from './ProjectsView';    
import EarningsView from './EarningsView';   
import FeedbackView from './FeedbackView';

export default function Dashboard() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch(activeView) {
      case 'projects':
        return <ProjectsView />;
      case 'earnings':
        return <EarningsView />;
      case 'clients':
        return <FeedbackView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex={1} overflow="hidden">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
        />
        <Box flex={1} overflowY="auto">
          {renderView()}
        </Box>
      </Flex>
    </Flex>
  );
}