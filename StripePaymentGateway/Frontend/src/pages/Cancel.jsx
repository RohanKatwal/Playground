import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    style={{ marginBottom: 12 }}
                >
                    <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" />
                    <path d="M15 9L9 15M9 9l6 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <h1 style={styles.title}>Payment Cancelled</h1>
                <p style={styles.message}>
                    Your payment was cancelled. No charge was made. If this was a mistake,
                    you can try again or return to the home page.
                </p>

                <div style={styles.actions}>
                    <Link to="/" style={{ ...styles.button, ...styles.primary }}>
                        Return Home
                    </Link>
                    <Link to="/checkout" style={{ ...styles.button, ...styles.secondary }}>
                        Try Again
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "#f9fafb",
    },
    card: {
        maxWidth: 520,
        width: "100%",
        textAlign: "center",
        background: "#fff",
        padding: "32px 28px",
        borderRadius: 8,
        boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
    },
    title: {
        margin: 0,
        fontSize: 22,
        color: "#111827",
    },
    message: {
        color: "#6b7280",
        marginTop: 8,
        marginBottom: 20,
    },
    actions: {
        display: "flex",
        gap: 10,
        justifyContent: "center",
    },
    button: {
        padding: "10px 16px",
        borderRadius: 6,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 14,
    },
    primary: {
        background: "#111827",
        color: "#fff",
    },
    secondary: {
        background: "#fff",
        color: "#111827",
        border: "1px solid #e5e7eb",
    },
};

export default Cancel;