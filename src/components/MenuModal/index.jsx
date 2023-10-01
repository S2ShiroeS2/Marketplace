import React from "react";
import { createPortal } from "react-dom";
import "./style.css";
import MenuIcon from "../MenuIcon";
import useModal from "../../hooks/useModal";

const MenuModal = ({ isShowing, hide, dataModal, mode, label }) => {
	return isShowing
		? createPortal(
				<>
					<div className="modal-overlay" />
					<div
						className="modal-wrapper"
						aria-modal
						aria-hidden
						tabIndex={-1}
						role="dialog"
						onClick={hide}
					>
						<div className="modal">
							<div className="modal-header">
								<p>{label}</p>
							</div>
							<div className="modal-body">
								{dataModal.map((icon, index) => (
									<div key={index} className="modal-header__icon-component">
										<div className="modal-header__icon-wrapper">
											<MenuIcon
												mode={mode}
												icon={icon.component}
												isMenuModal={true}
											/>
										</div>
										<p>{icon.label}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</>,
				document.body
		  )
		: null;
};

export default MenuModal;
