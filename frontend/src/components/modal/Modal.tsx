import "./Modal.scss";
import React from "react";

export type ModalProps = {
    visible: boolean;
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export const Modal: React.FC<ModalProps> = ({text, visible, onConfirm, onCancel}) => {
    return (
        <div className={visible ? "modal-container visible" : "modal-container"}>
            <div className="modal-card">
                <h3 className={"modal-card__title"}>{text}</h3>
                <div className="modal-card-buttons">
                    <button onClick={onCancel}>Назад</button>
                    <button onClick={onConfirm}>Так</button>
                </div>
            </div>
        </div>
    )
}