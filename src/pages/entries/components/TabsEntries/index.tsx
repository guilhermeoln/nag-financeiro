import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TableEntries from "./TableEntries";
import { useSelector } from "react-redux";
import IExpenses from "../../../../types/IExpenses";

type State = {
  entries: IExpenses[];
};

export default function TabsEntries() {
  const entries = useSelector((state: State) => state.entries);

  const entriesConfirmed = entries.filter(
    (entrie) => entrie.status === "Confirmado"
  );

  const entriesPending = entries.filter(
    (entrie) => entrie.status === "Pendente"
  );

  return (
    <Tabs width="100%" colorScheme="black">
      <TabList>
        <Tab>Todos</Tab>
        <Tab>Confirmados</Tab>
        <Tab>Pendentes</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableEntries entries={entries} />
        </TabPanel>
        <TabPanel>
          <TableEntries entries={entriesConfirmed} />
        </TabPanel>
        <TabPanel>
          <TableEntries entries={entriesPending} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
