import React, { useEffect, useState } from "react";
import { getAllTrainers, deleteTrainer } from "../../api/trainerApi"; 
import { FaTrash } from "react-icons/fa";
import Heading from "../../components/ul/Heading";
import ActionsButton from "../../components/ul/Actionbutton";
import { Table, TableHead, TableRow, TableHeader, TableCell } from "../../components/ul/Table";

export default function TrainersProfile() {
  const [trainers, setTrainers] = useState([]);

  const loadTrainers = async () => {
    try {
      const { data } = await getAllTrainers(); 
      console.log("Trainers fetched:", data); 
      setTrainers(data.trainers || data || []); 
    } catch (err) {
      console.error("Failed to load trainers:", err);
    }
  };

  useEffect(() => {
    loadTrainers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this trainer?")) {
      await deleteTrainer(id);
      loadTrainers();
    }
  };

  return (
    <div className="md:p-6 p-0 space-y-6">
      <div>
        <Heading level="h2" align="start">
          Trainer <span className="text-[#2FB5C0]">Management</span>
        </Heading>
        <p className="text-gray-600">
          View and manage all registered trainers.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">All Trainers</h3>

        {trainers.length > 0 ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Profile</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Specialty</TableHeader>
                  <TableHeader>Plans</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <tbody>
                {trainers.map((t) => (
                  <TableRow key={t._id}>
                    <TableCell>
                      {t.profileImage && (
                        <img
                          src={
                            t.profileImage.startsWith("http")
                              ? t.profileImage
                              : `http://localhost:5000${t.profileImage}`
                          }
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{t.name}</TableCell>
                    <TableCell>{t.email}</TableCell>
                    <TableCell>{t.specialty}</TableCell>
                    <TableCell>{t.plans?.join(", ")}</TableCell>
                    <TableCell>
                      <ActionsButton onClick={() => handleDelete(t._id)}>
                        <FaTrash />
                      </ActionsButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p className="text-gray-500">No trainers found.</p>
        )}
      </div>
    </div>
  );
}
