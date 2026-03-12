"use client";

import { Linkedin, Pencil, Trash2 } from "lucide-react";

export default function TeamCard({ member, onEdit, onDelete, onOpen }) {

  const avatar =
    `https://api.dicebear.com/7.x/bottts/svg?seed=${member.name}`;

  return (
   <div
  className="team-card"
  onClick={() => onOpen(member)}
 onMouseMove={(e) => {

  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 8;
  const rotateY = (centerX - x) / 8;

  card.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "rotateX(0deg) rotateY(0deg) scale(1)";
}}
>

      <img
        src={avatar}
        alt={member.name}
        className="avatar"
      />

      <h3 className="member-name">
        {member.name}
      </h3>

      <p className="member-role">
        {member.role}
      </p>

      <p className="member-bio">
        {member.bio}
      </p>

      <div className="card-actions">

        <a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="icon-button"
  onClick={(e) => e.stopPropagation()}
>
  <Linkedin size={18} />
</a>

       <button
  className="icon-button"
  onClick={(e) => {
    e.stopPropagation();
    onEdit(member);
  }}
>
  <Pencil size={18} />
</button>

       <button
  className="icon-button delete"
  onClick={(e) => {
    e.stopPropagation();
    onDelete(member);
  }}
>
  <Trash2 size={18} />
</button>
      </div>

    </div>
  );
}