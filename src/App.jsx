import "./App.css";
import { useState } from "react";
import ContactList from "./Components/ContactList";
import SelectedContact from "./components/SelectedContact";
export default function App() {
  // ....your component logic

const [selectedContactId, setSelectedContactId] =useState(null)

return (
  <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList />
    )}
  </>
);
}