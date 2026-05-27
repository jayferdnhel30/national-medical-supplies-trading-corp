import { useState } from "react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "40px 20px",
          marginBottom: "30px",
        }}
      >
        <h1>We'd Love Your Feedback</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Help us improve by sharing your thoughts, suggestions, or concerns.
        </p>
      </div>

      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        {submitted ? (
          <div
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "15px",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          >
            <strong>Thank you!</strong> Your feedback has been received. We
            appreciate your input.
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="subject"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
