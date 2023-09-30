import { useState } from "react";
import FullCalender, { formatDate } from "@fullcalender/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalender/timegrid";
import interactionPlugin from "@fullcalender/interaction";
import ListPlugin from "@fullcalender/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calenderApi = selected.view.calender;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEvenetClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="CALENDER" subTitle="Full Calender Interactive Page" />
      <Box display="flex" justifyContent="Space-between">
        {/* Calender sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event)=>(
              <ListItem ket={event.id} sx={{backgroundColor:colors.greenAccent[500]}}>
<ListItemText primary={event.title} secondary={<Typography>
  {formatDate(event.start, {
    year:"numeric",
    month:"short",
    day:"numeric"
  })}
</Typography>} >

</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default Calender;
