import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalEntries({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding="20px">
          <Flex flexDirection="column">
            <Flex width="100%">
              <Flex width="50%">
                <FormControl>
                  <FormLabel>Emissor</FormLabel>
                  <Input type="text" placeholder="Emissor" height="48px" />
                </FormControl>
              </Flex>
              <Flex width="50%" marginLeft="20px">
                <FormControl>
                  <FormLabel>Tipo</FormLabel>
                  <Select height="48px">
                    <option value="">Tipo</option>
                  </Select>
                </FormControl>
              </Flex>
            </Flex>
            <Flex width="100%" marginTop="20px">
              <Flex width="50%">
                <FormControl>
                  <FormLabel>Valor</FormLabel>
                  <Input type="text" placeholder="Valor" height="48px" />
                </FormControl>
              </Flex>
              <Flex width="50%" marginLeft="20px">
                <FormControl>
                  <FormLabel>Data</FormLabel>
                  <Input type="date" height="48px" />
                </FormControl>
              </Flex>
            </Flex>
            <Flex width="100%" marginTop="20px">
              <Flex width="50%">
                <FormControl>
                  <FormLabel>Banco</FormLabel>
                  <Input type="text" placeholder="Banco" height="48px" />
                </FormControl>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            border="1px solid #D0D5DD"
            onClick={onClose}
            marginRight="20px"
            backgroundColor="white"
          >
            Cancelar
          </Button>
          <Button
            backgroundColor="#4094F7"
            mr={3}
            fontWeight="500"
            color="white"
          >
            Criar entrada
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
