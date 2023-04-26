import React from "react";
import "./modal.css";

const Modal = ({ show, children, onConfirm, onCancel }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content font-semibold">
				{children}
				<div className="modal-actions">
					<button className="p-2 bg-green-500 rounded" onClick={onConfirm}>
						Confirmar
					</button>
					<button className="p-2 bg-red-500 rounded" onClick={onCancel}>Cancelar</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
