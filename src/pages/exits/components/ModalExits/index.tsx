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
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import maskData from "../../../../utils/maskData";
import { addExit } from "../../../../redux/reducers/exits";
import typesPayment from "../../../../mock/typesPayment";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const schemaValidation = yup
  .object({
    issuer: yup.string().required("O emissor é obrigatório!"),
    type: yup.string().required("O tipo é obrigatório!"),
    value: yup.string().required("O valor é obrigatório!"),
    bank: yup.string().required("O banco é obrigatório!"),
    status: yup.string().required(),
    date: yup
      .date()
      .max(new Date(), "Data inválida!")
      .required("A data é obrigatória!"),
  })
  .required();

export default function ModalExits({ isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const dispatch = useDispatch();

  const toast = useToast();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding="20px">
          <form
            onSubmit={handleSubmit((data) => {
              dispatch(addExit(data));
              reset();
              onClose();
              toast({
                title: "Saída criada!",
                description: "A Saída foi criada com sucesso!",
                status: "success",
                position: "top-right",
                duration: 5000,
                isClosable: true,
              });
            })}
          >
            <Flex flexDirection="column">
              <Flex width="100%">
                <Flex width="50%">
                  <FormControl isInvalid={!!errors.issuer}>
                    <FormLabel>Emissor</FormLabel>
                    <Input
                      type="text"
                      placeholder="Emissor"
                      height="48px"
                      {...register("issuer")}
                    />
                    <FormErrorMessage>
                      {errors?.issuer?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex width="50%" marginLeft="20px">
                  <FormControl isInvalid={!!errors.type}>
                    <FormLabel>Tipo</FormLabel>
                    <Select height="48px" {...register("type")}>
                      <option value="">Tipo</option>
                      {typesPayment.map((type) => (
                        <option key={type.id} value={type.name}>
                          {type.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
                  </FormControl>
                </Flex>
              </Flex>
              <Flex width="100%" marginTop="20px">
                <Flex width="50%">
                  <FormControl isInvalid={!!errors.value}>
                    <FormLabel>Valor</FormLabel>
                    <Input
                      type="text"
                      placeholder="Valor"
                      height="48px"
                      {...register("value")}
                    />
                    <FormErrorMessage>
                      {errors?.value?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex width="50%" marginLeft="20px">
                  <FormControl isInvalid={!!errors.date}>
                    <FormLabel>Data</FormLabel>
                    <Input
                      type="date"
                      height="48px"
                      {...register("date")}
                      placeholder="EX: XX/XX/XXXX"
                    />
                    <FormErrorMessage>
                      {errors?.date?.message === "A data é obrigatória!"
                        ? errors?.date?.message
                        : "Data inválida"}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              </Flex>
              <Flex width="100%" marginTop="20px">
                <Flex width="50%">
                  <FormControl isInvalid={!!errors.bank}>
                    <FormLabel>Banco</FormLabel>
                    <Input
                      type="text"
                      placeholder="Banco"
                      height="48px"
                      {...register("bank")}
                    />
                    <FormErrorMessage>{errors?.bank?.message}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex width="50%" marginLeft="20px">
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Select height="48px" {...register("status")}>
                      <option value="Pendente">Pendente</option>
                    </Select>
                  </FormControl>
                </Flex>
              </Flex>
            </Flex>
            <Flex width="100%" justifyContent="flex-end" marginTop="40px">
              <Button
                backgroundColor="#4094F7"
                mr={3}
                fontWeight="500"
                color="white"
                type="submit"
              >
                Criar saída
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
