import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TableExits from "./TableExits";
import { useSelector } from "react-redux";
import IExpenses from "../../../../types/IExpenses";

type State = {
  exits: IExpenses[];
};

export default function TabsExits() {
  const exits = useSelector((state: State) => state.exits);

  const exitsConfirmed = exits.filter((exit) => exit.status === "Confirmado");

  const exitsPending = exits.filter((exit) => exit.status === "Pendente");

  return (
    <Tabs width="100%">
      <TabList overflowX="auto" overflowY="hidden">
        <Tab>Todos</Tab>
        <Tab>Confirmados</Tab>
        <Tab>Pendentes</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableExits exits={exits} />
        </TabPanel>
        <TabPanel>
          <TableExits exits={exitsConfirmed} />
        </TabPanel>
        <TabPanel>
          <TableExits exits={exitsPending} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
