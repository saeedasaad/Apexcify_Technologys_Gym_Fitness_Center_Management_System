import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchClasses, createClass, updateClass, deleteClass } from "../../api/classApi";
import Button from "../../components/ul/Button";
import Heading from "../../components/ul/Heading";
import { FaPlus, FaTrash } from "react-icons/fa";
import ActionsButton from "../../components/ul/Actionbutton";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "../../components/ul/Table";

export default function AdminClasses() {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    trainer: "",
    date: "",
    startTime: "",
    endTime: "",
    capacity: 10,
  });

  const load = async () => {
    const { data } = await fetchClasses();
    setClasses(data.classes || []);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.title || !form.trainer || !form.date || !form.startTime || !form.endTime || !form.capacity) {
      return alert("Fill all required fields");
    }
    await createClass(form);
    setForm({ title: "", description: "", trainer: "", date: "", startTime: "", endTime: "", capacity: 10 });
    load();
  };

  const handleUpdate = async (id, updates) => {
    await updateClass(id, updates);
    load();
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this class?")) {
      await deleteClass(id);
      load();
    }
  };

  return (
    <div className="flex-1 md:p-6 p-0 space-y-8">
      <Heading level="h2" align="start">Classes <span className="text-[#2fb5c0]">Management</span></Heading>
      <p className="text-gray-600">Here admin can create, view, update, and delete all classes.</p>

      {/* Create Class Form */}
      <div className="bg-white rounded shadow p-6">
        <Heading level="h3" align="start">Create New Class</Heading>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            className="border rounded p-2"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            className="border rounded p-2"
            placeholder="Trainer ID"
            value={form.trainer}
            onChange={(e) => setForm({ ...form, trainer: e.target.value })}
          />
          <input
            type="date"
            className="border rounded p-2"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <input
            className="border rounded p-2"
            placeholder="Start Time (HH:MM)"
            value={form.startTime}
            onChange={(e) => setForm({ ...form, startTime: e.target.value })}
          />
          <input
            className="border rounded p-2"
            placeholder="End Time (HH:MM)"
            value={form.endTime}
            onChange={(e) => setForm({ ...form, endTime: e.target.value })}
          />
          <input
            type="number"
            className="border rounded p-2"
            placeholder="Capacity"
            value={form.capacity}
            onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
          />
          <textarea
            className="border rounded p-2 md:col-span-2"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <div className="md:col-span-2 flex justify-end">
            <Button type="submit">Create Class</Button>
          </div>
        </form>
      </div>

      {/* Classes Table */}
      <div className="bg-white rounded shadow p-6">
        <h3 className="text-xl font-semibold mb-4">All Classes</h3>
        {classes.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Title</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Time</TableHeader>
                <TableHeader>Trainer</TableHeader>
                <TableHeader>Capacity</TableHeader>
                <TableHeader>Booked</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {classes.map((c) => (
                <TableRow key={c._id}>
                  <TableCell>{c.title}</TableCell>
                  <TableCell>{new Date(c.date).toLocaleDateString()}</TableCell>
                  <TableCell>{c.startTime}–{c.endTime}</TableCell>
                  <TableCell>{c.trainer?.name || c.trainer}</TableCell>
                  <TableCell>{c.capacity}</TableCell>
                  <TableCell>{c.attendees?.length || 0}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <ActionsButton onClick={() => handleUpdate(c._id, { /* example updates */ })}>
                        <FaPlus />
                      </ActionsButton>
                      <ActionsButton onClick={() => handleDelete(c._id)}>
                        <FaTrash />
                      </ActionsButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-gray-500 mt-2">No classes yet.</p>
        )}
      </div>
    </div>
  );
}
