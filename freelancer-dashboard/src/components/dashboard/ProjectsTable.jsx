import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Card,
  CardHeader,
  CardBody,
  Text,
  Box,
} from '@chakra-ui/react';

const projects = [
  { name: 'E-commerce Redesign', status: 'Completed', deadline: 'May 15' },
  { name: 'Portfolio Website', status: 'In Progress', deadline: 'Jun 30' },
  { name: 'Bank Dashboard', status: 'Completed', deadline: 'Apr 20' },
  { name: 'Expense Tracker', status: 'Completed', deadline: 'Jul 10' },
  { name: 'Health and Fitness App', status: 'In Progress', deadline: 'Aug 5' },
  { name: 'Financial Dashboard', status: 'Completed', deadline: 'Mar 18' },
  { name: 'Task Management Tool', status: 'Planned', deadline: 'Sep 1' },
  { name: 'Real-time Chat App', status: 'Planned', deadline: 'Oct 12' },
  { name: 'Analytics Dashboard', status: 'Planned', deadline: 'Nov 20' },
  { name: 'Job Board Platform', status: 'In Progress', deadline: 'Aug 30' },
  { name: 'E-learning Portal', status: 'Planned', deadline: 'Dec 10' },
  { name: 'Weather Forecast App', status: 'Completed', deadline: 'Feb 5' },
  { name: 'Travel Booking System', status: 'Planned', deadline: 'Jan 15' },
  { name: 'Blog CMS', status: 'In Progress', deadline: 'Sep 22' },
  { name: 'Inventory Management App', status: 'Planned', deadline: 'Nov 2' },
];

export default function ProjectsTable() {
  return (
    <Card variant="outline">
      <CardHeader>
        <Text fontSize="lg" fontWeight="bold">Projects</Text>
      </CardHeader>
      <CardBody>
        <Box overflowX="auto">
          <Table variant="simple" minWidth="500px">
            <Thead>
              <Tr>
                <Th>Project</Th>
                <Th>Status</Th>
                <Th>Deadline</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projects.map((project) => (
                <Tr key={project.name}>
                  <Td wordBreak="break-word">{project.name}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        project.status === 'Completed' ? 'green' :
                        project.status === 'In Progress' ? 'orange' :
                        'gray'
                      }
                    >
                      {project.status}
                    </Badge>
                  </Td>
                  <Td>{project.deadline}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </CardBody>
    </Card>
  );
}
