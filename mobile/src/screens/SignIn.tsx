import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';

import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { AuthNavigatorRouterProps } from '@routes/auth.routes';
import { useAuth } from '@hooks/useAuth';
import { AppError } from '@utils/AppError';

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter no mínimo 6 dígitos.'),
})

export function SignIn() {

  const navigation = useNavigation<AuthNavigatorRouterProps>();
  const toast = useToast();
  const { signIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema)
  });


  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      console.log(11);
      await signIn(email, password);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.';

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >

      <VStack flex={1} px={10} >
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas Treinando'
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />
          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                errorMessage={errors.email?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Senha'
                secureTextEntry
                errorMessage={errors.password?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Button
            title='Acessar'
            onPress={handleSubmit(handleSignIn)}
          />

        </Center>

        <Center mt={24}>
          <Text color='gray.100' fontSize='sm' mb={3} fontFamily='body'>
            Ainda não tem acesso?
          </Text>
          <Button
            onPress={handleNewAccount}
            variant='outline'
            title='Criar conta'
          />
        </Center>
      </VStack>
    </ScrollView>

  )
}