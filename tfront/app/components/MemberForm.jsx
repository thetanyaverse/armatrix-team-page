"use client";

import { useState, useEffect } from "react";

export default function MemberForm({
  onAdd,
  onUpdate,
  editingMember,
  onClose
}) {

  const [form, setForm] = useState({
    name: "",
    role: "",
    bio: "",
    linkedin: "",
  });

  useEffect(() => {
    if (editingMember) {
      setForm(editingMember);
    }
  }, [editingMember]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.role) return;

    if (editingMember) {
      onUpdate(form);
    } else {
      onAdd(form);
    }

    setForm({
      name: "",
      role: "",
      bio: "",
      linkedin: "",
    });

    onClose();
  };

  return (
    <div className="form-container">

      <h2 className="form-title">
        {editingMember ? "Edit Member" : "Add Member"}
      </h2>

      <form onSubmit={handleSubmit} className="member-form">

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Role"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        />

        <input
          placeholder="LinkedIn"
          value={form.linkedin}
          onChange={(e) =>
            setForm({ ...form, linkedin: e.target.value })
          }
        />

        <textarea
          placeholder="Bio"
          value={form.bio}
          onChange={(e) =>
            setForm({ ...form, bio: e.target.value })
          }
        />

        <div className="form-buttons">

          <button type="submit" className="add-btn">
            {editingMember ? "Save Changes" : "Add Member"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}