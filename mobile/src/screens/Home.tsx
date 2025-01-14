import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { VStack, HStack, FlatList, Heading, Text } from 'native-base';
import { useState } from 'react';

export function Home() {
  const nav = useNavigation<AppNavigatorRoutesProps>();
  const [groupSelected, setGroupSelected] = useState('costas');
  const [groups, setGroups] = useState(['costas', 'ombro', 'biceps', 'tríceps']);
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terras']);

  function handleOpenExerciseDetails() {
    nav.navigate('exercise');
  }
  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        horizontal
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActivity={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxHeight={10}
        minHeight={10}
      />
      <VStack flex={1} px={8}>

        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md' fontFamily='heading'>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            pb: 20,
          }}
        />
      </VStack>

    </VStack>
  );
}