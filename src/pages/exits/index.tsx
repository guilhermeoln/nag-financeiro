import {
  Flex,
  useMediaQuery,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { black900, blue100, blue900 } from "../../styles/variaveis";
import { AddIcon } from "@chakra-ui/icons";
import ModalExits from "./components/ModalExits";
import TabsExits from "./components/TabsExits";

export default function Exits() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      padding={
        isLargerThan800 ? "30px 30px 30px 280px" : "30px 30px 30px 180px"
      }
      flexDirection="column"
    >
      <Flex
        width="90%"
        justifyContent="space-between"
        flexDirection={isLargerThan800 ? "row" : "column"}
      >
        <Text
          color={black900}
          fontSize={isLargerThan800 ? "36px" : "22px"}
          fontWeight="700"
        >
          Saídas
        </Text>
        <Button
          backgroundColor="#4094F7"
          color="white"
          width={isLargerThan800 ? "" : "150px"}
          marginTop={isLargerThan800 ? "0px" : "20px"}
          leftIcon={<AddIcon />}
          fontSize="14px"
          onClick={() => onOpen()}
        >
          Criar saída
        </Button>
      </Flex>
      <Flex width={isLargerThan800 ? "90%" : "100%"} marginTop="30px">
        <TabsExits />
      </Flex>
      <ModalExits isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
