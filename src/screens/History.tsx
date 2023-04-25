import { VStack, SectionList, Heading, Text } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { useState } from 'react';


export function History() {
  const [exercise, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada unilateral',]
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal']
    }
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios ' />
      <SectionList
        sections={exercise}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading color='gray.200' fontSize='md' fontFamily='heading' mt={10} mb={3}>
            {title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercise.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda.{'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
      />
    </VStack>
  );
}