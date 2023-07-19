import { useState } from "react";
import CustomTabPanel from "../Components/CustomPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Profil from "../Components/Profil";
import MyAds from "../Components/MyAds";
import Messages from "../Components/Messages";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyAccount() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="account">
      <Box sx={{ width: "100%", color: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Profil" {...a11yProps(0)} sx={{ color: "white" }} />
            <Tab
              label="Mes Annonces"
              {...a11yProps(1)}
              sx={{ color: "white" }}
            />
            <Tab label="Messages" {...a11yProps(2)} sx={{ color: "white" }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Profil />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MyAds />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Messages />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
