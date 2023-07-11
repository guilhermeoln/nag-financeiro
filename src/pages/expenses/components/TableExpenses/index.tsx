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
import IExpenses from "../../../../types/IExpenses";
import {
  green100,
  green700,
  orange100,
  orange900,
} from "../../../../styles/variaveis";

type Props = {
  expenses: IExpenses[];
};

export default function TableExpenses({ expenses }: Props) {
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
            <Th>Data</Th>
            <Th>Status</Th>
            <Th isNumeric>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((expense) => (
            <Tr key={expense.id}>
              <Td>{expense.issuer}</Td>
              <Td>{expense.date}</Td>
              {expense.status === "Pendente" ? (
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
                    {expense.status}
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
                    {expense.status}
                  </Text>
                </Td>
              )}

              <Td isNumeric>
                {expense.value.toLocaleString("pt-BR", {
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
