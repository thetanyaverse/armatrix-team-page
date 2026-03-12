"use client";

import { useState, useRef, useEffect } from "react";

import TeamCard from "./components/TeamCard";
import MemberForm from "./components/MemberForm";
import DeleteModal from "./components/DeleteModal";
import ProfileModal from "./components/ProfileModal";
import Cursor from "./components/Cursor";

const API = "https://armatrix-backend-pq45.onrender.com";

export default function Home() {

  const [team, setTeam] = useState([]);

  // UI STATES
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const formRef = useRef(null);


  // FETCH TEAM
  const fetchTeam = async () => {
    console.log("Fetching team from backend...");

    const res = await fetch(`${API}/team`);
    const data = await res.json();

    console.log("Team data:", data);

    setTeam(data);
  };

  useEffect(() => {
    fetchTeam();
  }, []);


  // ADD MEMBER
  const addMember = async (member) => {

    const payload = {
      name: member.name,
      role: member.role,
      bio: member.bio || "",
      photo_url: "",
      linkedin: member.linkedin || ""
    };

    await fetch(`${API}/team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    fetchTeam();
  };


  // UPDATE MEMBER
  const updateMember = async (updatedMember) => {

    const payload = {
      name: updatedMember.name,
      role: updatedMember.role,
      bio: updatedMember.bio || "",
      photo_url: "",
      linkedin: updatedMember.linkedin || ""
    };

    await fetch(`${API}/team/${updatedMember.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    fetchTeam();
    setEditingMember(null);
  };


  // START EDIT
  const startEdit = (member) => {
    setEditingMember(member);
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };


  // CONFIRM DELETE
  const confirmDelete = async (id) => {

    await fetch(`${API}/team/${id}`, {
      method: "DELETE",
    });

    fetchTeam();
    setMemberToDelete(null);
  };


  return (
    <main className="min-h-screen bg-black text-white">

      <Cursor />

      {/* HERO */}
      <section className="pt-30 pb-24 text-center hero-section">

        <h1 className="hero-title">
          Meet the Armatrix Team
        </h1>

        <p className="hero-subtitle">
          The minds designing intelligent robotic systems
        </p>

      </section>


      {/* TEAM GRID */}
      <section className="pb-10">

        {team.length === 0 && (
          <p className="text-gray-400 text-center mb-8">
            Looks like the team is still in stealth mode 👀
          </p>
        )}

        <div className="team-grid">

          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onEdit={startEdit}
              onDelete={setMemberToDelete}
              onOpen={setSelectedMember}
            />
          ))}

        </div>

      </section>


      {/* ADD MEMBER BUTTON */}
      <section className="text-center pb-24">

        <button
          className="add-btn"
          onClick={() => {
            setEditingMember(null);
            setShowForm(true);
          }}
        >
          Add Member
        </button>

      </section>


      {/* MEMBER FORM */}
      {showForm && (

        <section ref={formRef} className="pb-20">

          <MemberForm
            onAdd={addMember}
            onUpdate={updateMember}
            editingMember={editingMember}
            onClose={() => {
              setShowForm(false);
              setEditingMember(null);
            }}
          />

        </section>

      )}


      {/* DELETE MODAL */}
      <DeleteModal
        member={memberToDelete}
        onCancel={() => setMemberToDelete(null)}
        onConfirm={confirmDelete}
      />


      {/* PROFILE MODAL */}
      <ProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

    </main>
  );
}