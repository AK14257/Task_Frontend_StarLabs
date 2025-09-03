import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventProvider } from "./context/EventContext";
import Home from "./pages/Home";
import RSVPConfirmation from "./pages/RSVPConfirmation";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";


function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/rsvp/:id" element={<RSVPConfirmation />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </EventProvider>
  );
}
export default App;
