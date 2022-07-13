import { Box, Center, Heading, Input, FormControl, VStack, Icon, Button, Text, Radio, Stack, useColorMode, HStack, Switch } from "native-base";

import { MaterialIcons } from '@expo/vector-icons/'

export function Register() {

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
                            <Text fontSize={30}>Criar uma conta</Text>
                        </Heading>
                    </Center>
                    <FormControl width="full" marginBottom="5" >
                        <FormControl.Label>Nome Completo:</FormControl.Label>
                        <Input
                            _dark={{bg: "white"}}  
                            width="full" 
                            placeholder="Digite seu nome completo aqui" 
                            fontSize="lg"
                        />
                    </FormControl>
                    <FormControl width="full" marginBottom="5" >
                        <Radio.Group name="genderRadio" defaultValue="Masculino">
                            <Stack 
                            direction="row" 
                            alignItems="flex-start" 
                            space={4}>
                                <Radio value="Masculino">Masculino</Radio>
                                <Radio value="Feminino">Feminino</Radio>
                                <Radio value="Outro">Outro</Radio>
                            </Stack>
                        </Radio.Group>
                    </FormControl>
                    <FormControl width="full" marginBottom="5" >
                        <FormControl.Label>E-mail:</FormControl.Label>
                        <Input
                            _dark={{bg: "white"}} 
                            width="full" 
                            placeholder="Digite seu e-mail aqui"
                            fontSize="lg" 
                        />
                    </FormControl>
                    <FormControl width="full" marginBottom="5" >
                        <FormControl.Label>Senha:</FormControl.Label>
                        <Input
                            _dark={{bg: "white"}}  
                            width="full" 
                            placeholder="Digite uma senha"
                            fontSize="lg"
                        />
                    </FormControl>
                    <FormControl width="full" marginBottom="5" >
                        <FormControl.Label>Repita sua senha:</FormControl.Label>
                        <Input
                            _dark={{bg: "white"}}  
                            width="full" 
                            placeholder="Digite a senha novamente"
                            fontSize="lg"
                        />
                    </FormControl>
                    <Button
                    mt={2}
                    height="12"
                    >
                        Registrar
                    </Button>
                </VStack>
            </VStack>
        </Box>
    )
}