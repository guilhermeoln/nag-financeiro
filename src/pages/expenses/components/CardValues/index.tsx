import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { black900 } from "../../../../styles/variaveis";

type Props = {
  text: string;
  value: number;
};

export default function CardValues({ text, value }: Props) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      flexDirection="column"
      width={isLargerThan800 ? "294px" : "100%"}
      height="91px"
      borderRadius="6px"
      padding="15px"
      border="1px solid #E4E4E7"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Text color="#71717A" fontSize="11px" fontWeight="400">
        {text.toUpperCase()}
      </Text>
      <Text
        color={black900}
        fontWeight="700"
        fontSize={isLargerThan800 ? "22px" : "18px"}
        marginTop="10px"
      >
        {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </Text>
    </Flex>
  );
}
