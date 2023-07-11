import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import IExpenses from "../../../../../types/IExpenses";
import {
  green100,
  green700,
  orange100,
  orange900,
} from "../../../../../styles/variaveis";

type Props = {
  entries: IExpenses[];
};

export default function TableEntries({ entries }: Props) {
  return (
    <TableContainer
      border="1px solid #E4E4E7"
      borderRadius="6px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      maxH="500px"
      overflowY="auto"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Emissor</Th>
            <Th>Tipo</Th>
            <Th>Data</Th>
            <Th>Banco</Th>
            <Th>Status</Th>
            <Th isNumeric>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {entries.map((entries) => (
            <Tr key={entries.id}>
              <Td>{entries.issuer}</Td>
              <Td>{entries.type}</Td>
              <Td>{entries.date}</Td>
              <Td>{entries.bank}</Td>
              {entries.status === "Pendente" ? (
                <Td
                  color={orange900}
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    backgroundColor={orange100}
                    padding="10px"
                    display="flex"
                    alignItems="center"
                  >
                    <Text
                      width="10px"
                      height="10px"
                      backgroundColor={orange900}
                      borderRadius="50%"
                      marginRight="5px"
                    ></Text>
                    {entries.status}
                  </Text>
                </Td>
              ) : (
                <Td
                  color={green700}
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    backgroundColor={green100}
                    padding="10px"
                    display="flex"
                    alignItems="center"
                  >
                    <Text
                      width="10px"
                      height="10px"
                      backgroundColor={green700}
                      borderRadius="50%"
                      marginRight="5px"
                    ></Text>
                    {entries.status}
                  </Text>
                </Td>
              )}

              <Td isNumeric>
                {entries.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
