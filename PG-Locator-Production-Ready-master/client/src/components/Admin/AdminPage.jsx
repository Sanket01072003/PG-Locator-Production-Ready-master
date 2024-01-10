// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { getAllProperties, deleteResidency, updateResidency } from "../../utils/api";
import { Modal, Button, TextInput, Textarea, NumberInput } from '@mantine/core';
import BookedVisitsTable from "./BookedVisitsTable";

// AdminPage component
const AdminPage = () => {
  const [residencies, setResidencies] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedResidency, setEditedResidency] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
    address: "",
    country: "",
    city: "",
    bathroomCount: 0,
    bedroomCount: 0,
    parkingCount: 0,
    image: "",
    userEmail: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllProperties();
      setResidencies(data);
    } catch (error) {
      console.error("Error fetching residencies:", error);
    }
  };

  const handleDeleteResidency = async (id) => {
    try {
      await deleteResidency(id);
      alert("Residency deleted successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting residency:", error);
      alert("Error deleting residency");
    }
  };

  const handleUpdateClick = (residency) => {
    setEditing(true);
    setEditedResidency(residency);
    setModalOpen(true);
  };

  const handleInputChangeForCount = (name, value) => {
    setEditedResidency({ ...editedResidency, [name]: value });
  };
  
  const handleInputChange = (name, event) => {
    const value = event.currentTarget.value;
    setEditedResidency({ ...editedResidency, [name]: value });
  };
  
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const facilities = {
        bathrooms: editedResidency.bathroomCount,
        bedrooms: editedResidency.bedroomCount,
        parkings: editedResidency.parkingCount,
      };

      await updateResidency(editedResidency.id, {
        ...editedResidency,
        facilities,
      });

      alert("Residency updated successfully");
      setEditing(false);
      setModalOpen(false);
      fetchData();
    } catch (error) {
      console.error("Error updating residency:", error);
      alert("Error updating residency");
    }
  };


  const handleToggleBookingState = async (id, currentBookingState) => {
    try {
      await updateResidency(id, {
        BookingState: !currentBookingState,
      });

      alert("Booking state updated successfully");
      fetchData();
    } catch (error) {
      console.error("Error updating booking state:", error);
      alert("Error updating booking state");
    }
  };


  const openModal = (residency) => {
    setEditing(true);
    setEditedResidency(residency);
    setModalOpen(true);
  };

  const closeModal = () => {
    setEditing(false);
    setModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ color: "#61dafb", fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "white" }}>
        Admin Page
      </h1>
      <p style={{color:"red"}}>Caution: Do not delete those PGs that are already booked. If you still want to delete them please aware the booked user.</p>
      <table style={{ width: "100%", marginTop: "20px", border: "1px solid #ccc" }}>
  <thead>
    <tr style={{ backgroundColor: "#4caf50", color: "white" }}>
      <th style={{ padding: "12px", textAlign: "left" }}>Title</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Description</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Price</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Booking Count</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Bathrooms Count</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Bedrooms Count</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Parking Count</th>
      <th style={{ padding: "12px", textAlign: "left" }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {residencies.map((residency) => (
      <tr key={residency.id} style={{ borderBottom: "1px solid #ccc" }}>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.title}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.description}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.price}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.bookedBedrooms}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.facilities.bathrooms}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.facilities.bedrooms}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>{residency.facilities.parkings}</td>
        <td style={{ padding: "12px", textAlign: "left", backgroundColor: "#f9f9f9" }}>
          <button
            onClick={() => handleDeleteResidency(residency.id)}
            style={{ backgroundColor: "#d9534f", color: "white", padding: "8px", borderRadius: "4px", marginRight: "8px",marginBottom: "5px", cursor: "pointer", width : "80px" }}
          >
            Delete
          </button>
          <button
            onClick={() => handleUpdateClick(residency)}
            style={{ backgroundColor: "#5bc0de", color: "white", padding: "8px", borderRadius: "4px", cursor: "pointer", width : "80px" }}
          >
            Update
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



      {editing && (
        <Modal
          title="Update Residency"
          opened={modalOpen}
          onClose={() => {
            setEditing(false);
            setModalOpen(false);
          }}
          size="md"
          hideCloseButton
        >
          <form onSubmit={handleFormSubmit}>
          <TextInput
  label="Title"
  placeholder="Enter title"
  value={editedResidency.title}
  onChange={(event) => handleInputChange("title", event)}
  required
/>

<Textarea
  label="Description"
  placeholder="Enter description"
  value={editedResidency.description}
  onChange={(event) => handleInputChange("description", event)}
  required
/>

<NumberInput
  label="Price"
  placeholder="Enter price"
  value={editedResidency.price}
  onChange={(value) => handleInputChangeForCount("price", value)}
  required
/>

<TextInput
  label="Address"
  placeholder="Enter address"
  value={editedResidency.address}
  onChange={(event) => handleInputChange("address", event)}
  required
/>

<TextInput
  label="Country"
  placeholder="Enter country"
  value={editedResidency.country}
  onChange={(event) => handleInputChange("country", event)}
  required
/>

<TextInput
  label="City"
  placeholder="Enter city"
  value={editedResidency.city}
  onChange={(event) => handleInputChange("city", event)}
  required
/>

<NumberInput
  label="Bathroom Count"
  placeholder="Enter bathroom count"
  value={editedResidency.bathroomCount}
  onChange={(value) => handleInputChangeForCount("bathroomCount", value)}
  required
/>

<NumberInput
  label="Bedroom Count"
  placeholder="Enter bedroom count"
  value={editedResidency.bedroomCount}
  onChange={(value) => handleInputChangeForCount("bedroomCount", value)}
  required
/>

<NumberInput
  label="Parking Count"
  placeholder="Enter parking count"
  value={editedResidency.parkingCount}
  onChange={(value) => handleInputChangeForCount("parkingCount", value)}
  required
/>

<TextInput
  label="Image URL"
  placeholder="Enter image URL"
  value={editedResidency.image}
  onChange={(event) => handleInputChange("image", event)}
  required
/>

{/* <TextInput
  label="User Email"
  placeholder="Enter user email"
  value={editedResidency.userEmail}
  onChange={(event) => handleInputChange("userEmail", event)}
  required
/> */}


            <Button type="submit" color="teal" className="mt-4">
              Update Residency
            </Button>
          </form>
        </Modal>
      )}
      <br/>
      <h2 style={{color: "#ffff"}}>Booking Details</h2>
      <br/>
      <BookedVisitsTable />
    </div>
  );
};

export default AdminPage;
