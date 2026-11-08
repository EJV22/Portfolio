import { useEffect, useRef, useState } from "react";

function Contact({ open, onClose }) {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);


  function handleClose() {
    setStatus("idle");
    formRef.current?.reset();
    onClose();
  }

  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) dialogRef.current.close();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    console.log(data);

    setStatus("sent");
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact"
      aria-labelledby="contact-title"
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <p className="contact-kicker">Contact</p>
        <h2 id="contact-title" className="contact-title">
          Let’s collaborate!
        </h2>

        <div className="contact-field">
          <label htmlFor="contact-name">Name:</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your name..."
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email:</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email..."
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Your message:</label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            placeholder="I am open to collabs, internships, and anything that allows me to make a difference :]"
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          Submit
        </button>

        {status === "sent" && (
          <p className="contact-status" role="status">
            Thanks, I’ll get back to you soon.
          </p>
        )}

        {/* Last in the DOM so the first field gets focus when the dialog opens */}
        <button
          type="button"
          className="contact-close"
          aria-label="Close contact form"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
      </form>
    </dialog>
  );
}

export default Contact;