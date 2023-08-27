// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import CategoriesTable from "views/admin/dataTables/components/CategoriesTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import AddCategories from "views/admin/dataTables/components/AddCategories";
import {
  columnsDataCheck,
  columnsCategories
} from "views/admin/dataTables/variables/columnsData";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataCategories from "views/admin/dataTables/variables/tableDataCategories.json";
import React from "react";

export default function Settings() {
  
  // const categories = {
  //   electrician: [
  //     'Resedential Electric Works',
  //     'Commerical Electric Works',
  //     'Industrial Electric Works',
  //     'Renewable Energy Installation',
  //     'Data and Communication Cabling'
  //   ],
  //   carpenter: [
  //     'Furntiure Making',
  //     'Cabinet Making',
  //     'Roof Carpentry'
  //   ],
  //   construction: [
  //     'Renovation and Remodeling',
  //     'Foundation and Structural Work',
  //     'Electrical and Plumbing Construction'
  //   ]
  // };
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <CategoriesTable
          columnsData={columnsCategories}
          tableData={tableDataCategories}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <AddCategories/>
      </SimpleGrid>
    </Box>
  );
}
