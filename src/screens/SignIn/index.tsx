import { Box, Center, Heading, Input, FormControl, VStack, Icon, Button, HStack, Text, Link, Switch, useColorMode } from "native-base";

import { MaterialIcons } from '@expo/vector-icons/'

export function SignIn({ navigation }: any) {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box
        _dark={{bg: "gray.700"}}
        _light={{bg: "white"}}
        >
            <Box alignItems="flex-end" mr="2">
                <HStack alignItems="center">
                    <Icon as={<MaterialIcons name="wb-sunny"/>} />
                    <Switch 
                    size="sm"
                    isChecked={colorMode === "dark"}
                    onToggle={toggleColorMode}
                    aria-label={
                        colorMode === "dark" ? "troque para o tema escuro" : "troque para o tema claro"
                    } />
                    <Icon as={<MaterialIcons name="nightlight-round"/>} />
                </HStack>
            </Box>
            <VStack
            height="full"
            marginTop={110}>
                <VStack width="full" p={10}>
                    <Center marginBottom="7">
                        <Heading>
                            <Text fontSize={30}>Login</Text>
                        </Heading>
                    </Center>
                    <FormControl width="full">
                        <FormControl.Label>E-mail:</FormControl.Label>
                        <Input
                            _dark={{bg: "white"}}
                            width="full" 
                            marginBottom="2" 
                            placeholder="Digite seu e-mail aqui"
                            fontSize="lg"
                            InputLeftElement={
                                <Icon
                                as={<MaterialIcons name="person"/>}
                                size={7}
                                ml={2} 
                                />
                            } 
                        />
                    <FormControl.ErrorMessage>E-mail inválido.</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl width="full">
                        <FormControl.Label>Senha:</FormControl.Label>
                        <Input
                            _dark={{bg: "white"}}
                            type="password" 
                            width="full" 
                            marginBottom="2" 
                            placeholder="Digite sua senha aqui"
                            fontSize="lg"
                            InputLeftElement={
                                <Icon
                                as={<MaterialIcons name="lock"/>}
                                size={7}
                                ml={2} 
                                />
                            } 
                        />
                        <FormControl.ErrorMessage>Senha inválida</FormControl.ErrorMessage>
                    </FormControl>
                    <Button
                    mt={2}
                    height="12"
                    >
                        Entrar
                    </Button>
                    <Link onPress={() => navigation.navigate("ForgotPassword")} mt="4">Esqueci minha senha</Link>
                    <HStack mt="4">
                        <Text mr="2">Não possui uma conta?</Text>
                        <Link onPress={() => navigation.navigate("Register")}>Registre-se aqui!</Link>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    )
}