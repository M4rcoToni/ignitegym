import { Text, Pressable, IPressableProps } from 'native-base';

type Props = IPressableProps & {
  name: string;
  isActivity: boolean;
}

export function Group({ name, isActivity, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg='gray.600'
      rounded='md'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      isPressed={isActivity}
      _pressed={{
        borderWidth: 1,
        borderColor: 'green.400'
      }}
      {...rest}
    >
      <Text
        color={isActivity ? 'green.500' : 'gray.200'}
        textTransform='uppercase'
        fontSize='xs'
        fontWeight='bold'
      >
        {name}
      </Text>
    </Pressable>
  );
}