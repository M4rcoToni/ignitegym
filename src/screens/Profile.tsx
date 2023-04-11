import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UsePhoto';
import { Center, ScrollView, Text, VStack } from 'native-base';


export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center>
          <UserPhoto
            source={{ uri: 'https://github.com/m4rcotoni.png' }}
            alt='Foto do usuário'
            size={33}
          />
        </Center>

      </ScrollView>
    </VStack>
  );
}