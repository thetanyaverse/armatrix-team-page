"use client";

export default function DeleteModal({ member, onCancel, onConfirm }) {

  if (!member) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2 className="modal-title">
          Delete Member
        </h2>

        <p className="modal-text">
          Are you sure you want to remove <b>{member.name}</b> from the team?
        </p>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={() => onConfirm(member.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}