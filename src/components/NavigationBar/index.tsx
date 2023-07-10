import { Flex, Text } from "@chakra-ui/react";
import navigationBar from "../../mock/navigationBar";
import { useNavigate } from "react-router-dom";
import { blue100, blue900 } from "../../styles/variaveis";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Flex
      width="240px"
      height="100vh"
      position="fixed"
      flexDirection="column"
      alignItems="center"
      py="50px"
      borderRight="1px solid #E5E9EB"
    >
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
            <Text
              color={
                window.location.pathname === navItem.path ? blue900 : "none"
              }
              fontWeight={
                window.location.pathname === navItem.path ? "700" : "400"
              }
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
                    <Text
                      color={
                        window.location.pathname === navSubItens.path
                          ? blue900
                          : "none"
                      }
                      fontWeight={
                        window.location.pathname === navSubItens.path
                          ? "700"
                          : "400"
                      }
                    >
                      {navSubItens.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            )}
        </>
      ))}
    </Flex>
  );
}
