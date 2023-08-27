/* eslint-disable */
import {
    Flex,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Button,
  } from "@chakra-ui/react";
  import { SnackbarProvider, useSnackbar } from 'notistack';
  // Custom components
  import Card from "components/card/Card";
  import React from "react";
  
  export default function AddCategories() {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const { enqueueSnackbar } = useSnackbar();
    const handleButtonClick = () => {
        enqueueSnackbar('I love hooks');
        console.log('add');
    };
    return (
        <Card
        direction='column'
        w='100%'
        px='0px'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex direction="column" align="center" justify="center" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Flex px="25px" justify="space-between" mb="20px" align="center">
                <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
                Add Categories
                </Text>
            </Flex>
            
            <Flex direction="column" align="center" justify="center" w="100%">
                <Flex justify="center" alignItems="center" mb="10px">
                <Text color={textColor} fontSize="16px" fontWeight="700" lineHeight="100%">
                    Name
                </Text>
                <Input placeholder="Name of Category" size="md" ml="10px" />
                </Flex>
                
                <Flex justify="center" alignItems="center">
                <Text color={textColor} fontSize="16px" fontWeight="700" lineHeight="100%">
                    Date Added
                </Text>
                <Input
                    placeholder="Select Creation Date"
                    size="md"
                    type="datetime-local"
                    defaultValue={new Date().toISOString().slice(0, 16)}
                    ml="10px"
                />
                </Flex>
            </Flex>
            
            <Flex justify="center" alignItems="center" mt="20px">
                <Button colorScheme="teal" size="md" onClick={handleButtonClick}>
                Add
                </Button>
            </Flex>
        </Flex>
      </Card>
    );
  }
  