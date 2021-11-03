import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Main />
      <Profile />
    </Box>
  );
};

export default App;
