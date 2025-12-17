import React, { useEffect, useState, useContext } from "react";
import { fetchClasses } from "../../api/classApi";
import { AuthContext } from "../../context/AuthContext";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "../../components/ul/Table";

export default function ClassSchedule() {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ===== Load classes =====
  const loadClasses = async () => {
    try {
      const { data } = await fetchClasses(); 
      setClasses(data.classes || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load classes. Check your API or token.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClasses();
  }, []);

  if (loading) return <p>Loading classes...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>

      {classes.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Title</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Time</TableHeader>
                <TableHeader>Trainer</TableHeader>
                <TableHeader>Capacity</TableHeader>
                <TableHeader>Booked</TableHeader>
              </TableRow>
            </TableHead>

            <tbody>
              {classes.map((c) => (
                <TableRow key={c._id}>
                  <TableCell>{c.title}</TableCell>
                  <TableCell>{new Date(c.date).toLocaleDateString()}</TableCell>
                  <TableCell>{c.startTime} - {c.endTime}</TableCell>
                  <TableCell>{c.trainer?.name || c.trainer}</TableCell>
                  <TableCell>{c.capacity}</TableCell>
                  <TableCell>{c.attendees?.length || 0}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p className="text-gray-500">No classes available.</p>
      )}
    </div>
  );
}
