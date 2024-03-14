import React from "react";

const Modal = ({ isOpen, onClose, align, h, w, p, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: align || 'center',
                justifyContent: "center",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "white",
                    height: h || 150,
                    width: w || 240,
                    // margin: "auto",
                    padding: p,
                    // border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    top: align === 'top' ? 0 : 'auto',
                    margin: align === 'top' ? 0 : 'auto',
                    marginTop: align === 'top' ? '3rem' : 'auto',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;