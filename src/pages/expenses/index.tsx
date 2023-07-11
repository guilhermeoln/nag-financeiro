import { useSelector } from "react-redux";
import { Flex, useMediaQuery, Text, Grid } from "@chakra-ui/react";
import { black900 } from "../../styles/variaveis";
import CardValues from "./components/CardValues";
import IExpenses from "../../types/IExpenses";
import TableExpenses from "./components/TableExpenses";
import { useEffect, useState } from "react";

type State = {
  entries: IExpenses[];
  exits: IExpenses[];
};

export default function Expenses() {
  const [totalEntries, setTotalEntries] = useState(0);
  const [totalExits, setTotalExits] = useState(0);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { entries, exits } = useSelector((state: State) => ({
    entries: state.entries,
    exits: state.exits,
  }));

  function calculateTotalEntries() {
    let valueEntries = 0;

    entries.forEach((entrie) => {
      valueEntries += entrie.value;
    });

    setTotalEntries(valueEntries);
  }

  function calculateTotalExits() {
    let valueExits = 0;

    exits.forEach((exit) => {
      valueExits += exit.value;
    });

    setTotalExits(valueExits);
  }

  useEffect(() => {
    calculateTotalEntries();
    calculateTotalExits();
  }, [entries, exits]);

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
        <CardValues text="Saldo Saidas" value={totalExits} />
      </Grid>
      <Flex
        width={isLargerThan800 ? "80%" : "100%"}
        marginTop="30px"
        flexDirection={isLargerThan800 ? "row" : "column"}
      >
        <Flex width={isLargerThan800 ? "50%" : "100%"} flexDirection="column">
          <Text color={black900} fontWeight="700" marginBottom="10px">
            Entradas
          </Text>
          <TableExpenses expenses={entries} />
        </Flex>
        <Flex
          width={isLargerThan800 ? "50%" : "100%"}
          flexDirection="column"
          marginLeft={isLargerThan800 ? "30px" : "0px"}
          marginTop={isLargerThan800 ? "0px" : "30px"}
        >
          <Text color={black900} fontWeight="700" marginBottom="10px">
            Saídas
          </Text>
          <TableExpenses expenses={exits} />
        </Flex>
      </Flex>
    </Flex>
  );
}
