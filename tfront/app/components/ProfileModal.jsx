"use client";

export default function ProfileModal({ member, onClose }) {

  if (!member) return null;

  const avatar =
    `https://api.dicebear.com/7.x/bottts/svg?seed=${member.name}`;

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <img
          src={avatar}
          className="avatar"
          alt={member.name}
        />

        <h2 className="member-name mt-4">
          {member.name}
        </h2>

        <p className="member-role">
          {member.role}
        </p>

        <p className="member-bio mt-3">
          {member.bio}
        </p>

        <a
          href={member.linkedin}
          target="_blank"
          className="add-btn mt-4 inline-block"
        >
          LinkedIn
        </a>

        <div className="mt-4">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}