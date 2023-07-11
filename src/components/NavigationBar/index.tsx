import {
  Flex,
  Text,
  useMediaQuery,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import navigationBar from "../../mock/navigationBar";
import { useNavigate } from "react-router-dom";
import { blue100, blue900 } from "../../styles/variaveis";

import { BiLogOutCircle } from "react-icons/bi";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      width={isLargerThan800 ? "240px" : "150px"}
      height="100vh"
      position="fixed"
      flexDirection="column"
      alignItems="center"
      py="50px"
      borderRight="1px solid #E5E9EB"
    >
      <Box
        border={`3px solid ${blue100}`}
        width="50px"
        height="50px"
        padding="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        marginBottom="10px"
      >
        <Text fontWeight="700" fontSize="36px">
          JG
        </Text>
      </Box>
      <Text fontSize="18px" fontWeight="700" marginBottom="10px">
        Usuário
      </Text>
      <Button
        width="50px"
        height="50px"
        borderRadius="50%"
        marginBottom="30px"
        backgroundColor="white"
        border="1px solid #ccc"
        onClick={() => navigate("/")}
      >
        <BiLogOutCircle />
      </Button>
      {navigationBar.map((navItem) => (
        <>
          <Flex
            key={navItem.id}
            width="80%"
            onClick={() => {
              navigate(`${navItem.path}`);
            }}
            backgroundColor={
              window.location.pathname === navItem.path ? blue100 : "none"
            }
            padding="5px"
            alignItems="center"
            borderRadius="6px"
            cursor="pointer"
          >
            <Image
              src={
                window.location.pathname === navItem.path
                  ? navItem.iconActive
                  : navItem.iconInactive
              }
              alt="icon"
            />
            <Text
              color={
                window.location.pathname === navItem.path ? blue900 : "none"
              }
              fontWeight={
                window.location.pathname === navItem.path ? "700" : "400"
              }
              marginLeft="5px"
            >
              {navItem.name}
            </Text>
          </Flex>
          {navItem.subItems &&
            window.location.pathname.includes("/despesas") && (
              <Flex flexDirection="column" width="80%">
                {navItem.subItems.map((navSubItens) => (
                  <Flex
                    justifyContent="center"
                    key={navSubItens.id}
                    width="100%"
                    onClick={() => {
                      navigate(`${navSubItens.path}`);
                    }}
                    backgroundColor={
                      window.location.pathname === navSubItens.path
                        ? blue100
                        : "none"
                    }
                    padding="5px"
                    alignItems="center"
                    borderRadius="6px"
                    cursor="pointer"
                  >
                    <Text>{navSubItens.name}</Text>
                  </Flex>
                ))}
              </Flex>
            )}
        </>
      ))}
    </Flex>
  );
}
