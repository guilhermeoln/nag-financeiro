import { Text, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import { black900 } from "../../styles/variaveis";
import CardQuickAcess from "./components/CardQuickAcess";
import iconCashQuickAcess from "../../assets/iconCashQuickAcess.png";

export default function Home() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      padding={
        isLargerThan800 ? "30px 30px 30px 280px" : "30px 30px 30px 180px"
      }
      flexDirection="column"
    >
      <Text color={black900} fontSize="36px" fontWeight="700">
        Início
      </Text>
      <Text color={black900} fontWeight="700" fontSize="22px" marginTop="25px">
        Acesso rápido
      </Text>
      <Grid templateColumns="repeat(1, 1fr)" gap={6} marginTop="40px">
        <CardQuickAcess text="Central de despesas" icon={iconCashQuickAcess} />
      </Grid>
    </Flex>
  );
}
