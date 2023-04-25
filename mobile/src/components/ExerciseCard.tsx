import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';
type Props = TouchableOpacityProps & {
}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
    >
      <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4TBoWRvxfOgRUz4FfnrUXxeNmYXLS5_lXbt2n4vmnQu59Tc8BnFpU_3wIsb7vJXCU0c&usqp=CAU' }}
          alt='Imagem do Exercício'
          w={16}
          h={16}
          rounded='md'
          mr={4}
          resizeMode='cover'
        />

        <VStack flex={1}>
          <Heading color='white' fontSize='lg' fontFamily='heading'>
            Remada Unilateral
          </Heading>
          <Text color='gray.200' fontSize='md' mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name='chevron-thin-right'
        />
      </HStack>

    </TouchableOpacity>
  )
}