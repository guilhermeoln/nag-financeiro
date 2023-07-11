import { useSelector } from "react-redux";
import { Flex, useMediaQuery, Text, Grid } from "@chakra-ui/react";
import { black900 } from "../../styles/variaveis";
import CardValues from "./components/CardValues";
import IEntries from "../../types/IEntries";
import TableExpenses from "./components/TableExpenses";
import { useEffect, useState } from "react";

type State = {
  entries: IEntries[];
};

export default function Expenses() {
  const [totalEntries, setTotalEntries] = useState(0);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const entries = useSelector((state: State) => state.entries);

  function calculateTotalEntries() {
    let valueEntries = 0;

    entries.forEach((entrie) => {
      valueEntries += entrie.value;
    });

    setTotalEntries(valueEntries);
  }

  useEffect(() => {
    calculateTotalEntries();
  }, [entries]);

  return (
    <Flex
      padding={
        isLargerThan800 ? "30px 30px 30px 280px" : "30px 30px 30px 180px"
      }
      flexDirection="column"
    >
      <Text
        color={black900}
        fontSize={isLargerThan800 ? "36px" : "22px"}
        fontWeight="700"
      >
        Central de despesas
      </Text>
      <Grid
        marginTop="30px"
        templateColumns={
          isLargerThan800 ? "repeat(2, 0.2fr)" : "repeat(1, 1fr)"
        }
        gridRowGap={isLargerThan800 ? "0px" : "20px"}
      >
        <CardValues text="Saldo Entradas" value={totalEntries} />
        <CardValues text="Saldo Saidas" value={2500} />
      </Grid>
      <Flex width="80%" marginTop="30px">
        <Flex width="50%" flexDirection="column">
          <Text color={black900} fontWeight="700" marginBottom="10px">
            Entradas
          </Text>
          <TableExpenses expenses={entries} />
        </Flex>
        <Flex width="50%" flexDirection="column" marginLeft="30px">
          <Text color={black900} fontWeight="700" marginBottom="10px">
            Saídas
          </Text>
          <TableExpenses expenses={entries} />
        </Flex>
      </Flex>
    </Flex>
  );
}
