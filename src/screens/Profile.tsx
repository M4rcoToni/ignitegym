import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Center, ScrollView, Text, VStack, Skeleton, Heading } from 'native-base';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UsePhoto';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }} >
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded='full'
                startColor='gray.500'
                endColor='gray.400'
              />
              :
              <UserPhoto
                source={{ uri: 'https://github.com/m4rcotoni.png' }}
                alt='Foto do usuário'
                size={PHOTO_SIZE}
              />
          }
          <TouchableOpacity>
            <Text
              color='green.500'
              fontWeight='bold'
              fontSize='md'
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg='gray.600'
            placeholder='Nome'
          />
          <Input
            bg='gray.600'
            placeholder='marco.pereira@gmail.com'
            isDisabled
          />

        </Center>

        <Center px={10} mt={8} mb={9}>

          <Heading color='gray.200' fontSize='md' mb={2} alignSelf='flex-start' mt={12}>
            Alterar senha
          </Heading>

          <Input
            bg='gray.600'
            placeholder='Senha antiga'
            secureTextEntry
          />
          <Input
            bg='gray.600'
            placeholder='Nova senha'
            secureTextEntry
          />
          <Input
            bg='gray.600'
            placeholder='Confirme a nova senha'
            secureTextEntry
          />
          <Button
            mt={4}
            title='Atualizar'
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}