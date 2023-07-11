import { Flex, Image, Text } from "@chakra-ui/react";
import { black900, blue100 } from "../../../../styles/variaveis";
import { useNavigate } from "react-router-dom";

type Props = {
  icon: string;
  text: string;
};

export default function CardQuickAcess({ icon, text }: Props) {
  const navigate = useNavigate();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor={blue100}
        width="172px"
        height="172px"
        borderRadius="6px"
        cursor="pointer"
        onClick={() => navigate("/despesas")}
      >
        <Image src={icon} alt="icon" />
      </Flex>
      <Text marginTop="15px" color={black900} fontSize="16px" fontWeight="700">
        {text}
      </Text>
    </Flex>
  );
}
