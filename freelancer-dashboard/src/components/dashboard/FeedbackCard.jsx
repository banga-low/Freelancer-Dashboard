import { Box, Card, CardHeader, CardBody, Stack, Text, Avatar, Flex, Tag } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const testimonials = [
  { name: 'Sarah K.', role: 'CEO @DesignHub', comment: 'Exceptional attention to detail!', rating: 5 },
  { name: 'Mike T.', role: 'Founder @AppVenture', comment: 'Delivered ahead of schedule', rating: 4 },
  { name: 'Lena R.', role: 'Marketing Lead @BrightIdeas', comment: 'Creative, reliable, and very responsive.', rating: 5 },
  { name: 'Carlos M.', role: 'CTO @TechNova', comment: 'Understood our needs perfectly.', rating: 4 },
  { name: 'Anika D.', role: 'Product Manager @FlowState', comment: 'Professional and easy to work with.', rating: 5 },
  { name: 'James P.', role: 'CEO @UrbanConnect', comment: 'The end result exceeded expectations.', rating: 5 },
];

export default function FeedbackCard() {
  return (
    <Card variant="outline">
      <CardHeader>
        <Text fontSize="lg" fontWeight="bold">Client Feedback</Text>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          {testimonials.map((testimonial) => (
            <Flex key={testimonial.name} align="center">
              <Avatar name={testimonial.name} size="sm" mr={3} />
              <Box>
                <Text fontWeight="medium">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">{testimonial.role}</Text>
                <Text mt={2}>{testimonial.comment}</Text>
                <Flex mt={1}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      color={i < testimonial.rating ? 'teal.500' : 'gray.300'} 
                      boxSize={3} 
                    />
                  ))}
                </Flex>
              </Box>
            </Flex>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
