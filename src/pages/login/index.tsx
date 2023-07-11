import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { black900, blue100, blue900 } from "../../styles/variaveis";
import logoLogin from "../../assets/logoLogin.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const navigate = useNavigate();

  return (
    <Flex width="100%" minH="100vh">
      <Flex
        width={isLargerThan800 ? "50%" : "100%"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="28px" fontWeight="700" color={black900} width="370px">
          Bem vindo ao NAG 🤝
        </Text>
        <Text
          maxW="370px"
          color="#52525B"
          fontWeight="400"
          fontSize="13px"
          marginTop="10px"
        >
          Sistema Operacional de Processos de Energia e Construção Operado e
          mantido por NAG
        </Text>
        <form>
          <FormControl width="370px" marginTop="35px">
            <FormLabel color={black900} fontSize="13px" fontWeight="700">
              Usuário
            </FormLabel>
            <Input
              type="text"
              height="55px"
              placeholder="Digite o nome de usuário..."
            />
          </FormControl>
          <FormControl width="370px" marginTop="35px">
            <FormLabel color={black900} fontSize="13px" fontWeight="700">
              Senha
            </FormLabel>
            <Input
              type="password"
              height="55px"
              placeholder="Digite a sua senha..."
            />
          </FormControl>
          <Button
            width="370px"
            height="55px"
            marginTop="50px"
            backgroundColor={blue900}
            color="white"
            onClick={() => navigate("/inicio")}
          >
            Entrar
          </Button>
        </form>
      </Flex>
      {isLargerThan800 && (
        <Flex
          width="50%"
          backgroundColor={blue100}
          justifyContent="center"
          alignItems="center"
        >
          <Image src={logoLogin} />
        </Flex>
      )}
    </Flex>
  );
}
