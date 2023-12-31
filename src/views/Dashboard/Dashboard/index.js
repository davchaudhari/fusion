// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import Card from "components/Card/Card";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' display='flex'>
        <MiniStatistics
          title={"Doctor 1"}
          name={"Dr. Emily Davis"}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}>
        </MiniStatistics>
        <MiniStatistics
          title={"Doctor 2"}
          name={"Dr. Michael Roberts"}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Doctor 3"}
          name={"Dr. Laura Williams"}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.2fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          name={"Commonalities"}
          description={
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li style={{ paddingLeft: '20px' }}>Continue antispasmodic medication (Medication X) and inquire about dosage.</li>
            <li style={{ paddingLeft: '20px' }}>Watch diet and fiber intake.</li>
          </ul>
            }
        />
        <BuiltByDevelopers
          name={"Differences"}
          description={
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }} >
            <li style={{ paddingLeft: '20px' }}>Doctor 1 asks for the most tests and medications and is likely going to be the most expensive (additional Medication Y, Blood Test Z).</li>
            <li style={{ paddingLeft: '20px' }}> Doctor 2 recommends emotion-based techniques, whereas the others do not.</li>
            <li style={{ paddingLeft: '20px' }}>Doctor 3 seems to be the most lenient.</li>
          </ul>
            }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Time for Treatment This Week"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Cost of Coverage"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      {/* <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Projects"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={"Orders Overview"}
          amount={30}
          data={timelineData}
        />
      </Grid> */}
    </Flex>
  );
}
