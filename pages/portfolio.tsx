import { NextPage } from 'next';
import { chakra, Text } from '@chakra-ui/react';
import { ChakraLayout } from '../components/templates/ChakraLayout';

const Portfolio: NextPage = () => {
  return (
    <ChakraLayout>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={5} fontWeight={'bold'}>
        Portfolio
      </chakra.h1>
      <Text textAlign={'center'} fontWeight={600} color={'gray.500'} mb={4}>
        現在準備中です
      </Text>
    </ChakraLayout>
  );
}
export default Portfolio;