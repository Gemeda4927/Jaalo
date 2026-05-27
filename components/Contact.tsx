"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_ddftk0f";
const EMAILJS_TEMPLATE_ID = "template_vsl5of8";
const EMAILJS_PUBLIC_KEY  = "h7PUBGSHAtOjbLw7N";


const G  = "#22c55e";
const GD = "#16a34a";
const GL = "#f0fdf4";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/Gemeda4927",                       d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.912.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gemeda-tamiru-8863b635a", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
  { label: "Telegram", href: "https://t.me/Abbaabiyyaa2",                           d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.56-.46.7-.94.43l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.53.26l.19-2.67 4.84-4.37c.21-.19-.05-.29-.32-.1L7.39 14.4l-2.54-.79c-.55-.17-.56-.55.12-.82l9.91-3.82c.46-.17.86.11.76.83z" },
  { label: "Facebook", href: "https://web.facebook.com/gemada.tamiru.77",           d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter",  href: "https://twitter.com/GemedaTamiru",                    d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
];

const INFO = [
  { label: "Email",    value: "gemedat471@gmail.com",  copy: true,  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6" },
  { label: "Location", value: "Addis Ababa, Ethiopia", copy: false, d: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Timezone", value: "EAT — UTC +3",          copy: false, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const I = ({ d, s = 14 }: { d: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const SEND_D  = "M22 2L11 13 M22 2L15 22 9 13 2 9 22 2";
const ARR_D   = "M7 17L17 7 M7 7h10v10";
const X_D     = "M18 6L6 18 M6 6l12 12";
const COPY_D  = "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2 M8 4a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2h-4a2 2 0 01-2-2z";
const CHECK_D = "M20 6L9 17 4 12";
const WARN_D  = "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z";

export default function ContactComponent() {
  const [open,    setOpen]    = useState(false);
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);
  const [error,   setError]   = useState<string | null>(null);
  const [copied,  setCopied]  = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form,    setForm]    = useState({ name: "", email: "", subject: "", message: "" });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, to_email: "gemedat471@gmail.com", reply_to: form.email },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please email me directly at gemedat471@gmail.com");
    } finally {
      setSending(false);
    }
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => { setSent(false); setError(null); setForm({ name: "", email: "", subject: "", message: "" }); }, 300);
  };

  const reset = () => { setSent(false); setError(null); setForm({ name: "", email: "", subject: "", message: "" }); };

  const copyEmail = () => {
    navigator.clipboard.writeText("gemedat471@gmail.com").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .ct *, .ct *::before, .ct *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ct { font-family: 'Inter', sans-serif; }
        @keyframes ct-spin    { to { transform: rotate(360deg); } }
        @keyframes ct-drop    { from { opacity: 0; transform: translateY(14px) scale(.96); } to { opacity: 1; transform: none; } }
        @keyframes ct-fade    { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ct-pulse   { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
        @keyframes ct-pop     { 0% { transform: scale(.8); opacity: 0; } 60% { transform: scale(1.12); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes ct-bar     { from { width: 0; } to { width: 100%; } }
        .ct-backdrop { animation: ct-fade .2s ease; }
        .ct-modal    { animation: ct-drop .28s cubic-bezier(.22,1,.36,1); }
        .ct-icon-pop { animation: ct-pop .4s cubic-bezier(.22,1,.36,1) both; }
        .ct-social   { transition: background .15s, color .15s, transform .15s; }
        .ct-social:hover { background: ${G} !important; color: #fff !important; transform: translateY(-2px); }
        .ct-cta      { transition: background .15s, box-shadow .15s, transform .12s; }
        .ct-cta:hover { background: ${GD} !important; box-shadow: 0 8px 28px rgba(34,197,94,.3) !important; transform: translateY(-1px); }
        .ct-cta:active { transform: scale(.97); }
        .ct-send:hover:not(:disabled) { background: ${GD} !important; }
        .ct-close { transition: background .15s, color .15s; border-radius: 8px; }
        .ct-close:hover { background: #f3f4f6 !important; color: #374151 !important; }
        .ct-copy:hover { color: ${G} !important; }
        .ct-field input, .ct-field textarea { width: 100%; padding: 9px 0; font-size: 13px; color: #111827; background: transparent; border: none; border-bottom: 1.5px solid #e5e7eb; outline: none; font-family: inherit; transition: border-color .18s; }
        .ct-field input:focus, .ct-field textarea:focus { border-bottom-color: ${G}; }
        .ct-field textarea { resize: none; line-height: 1.7; }
        .ct-field input::placeholder, .ct-field textarea::placeholder { color: #d1d5db; }
        .ct-progress { height: 3px; background: ${G}; border-radius: 2px; animation: ct-bar 1.4s ease forwards; }
      `}</style>

      <section className="ct" id="contact" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>

          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: G, marginBottom: 12 }}>Contact</p>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: "#111827", letterSpacing: "-1.5px", lineHeight: 1.1, margin: 0 }}>
              Let's work{" "}
              <span style={{ color: G, textDecoration: "underline", textDecorationColor: G, textUnderlineOffset: "5px" }}>together.</span>
            </h2>
          </div>

          {/* PANEL */}
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 2px 24px rgba(0,0,0,.06)" }}>

            {/* LEFT */}
            <div style={{ background: "#f3f4f6", padding: "36px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32, borderRight: "1px solid #e5e7eb" }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>Contact info</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {INFO.map(row => (
                    <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 10px", borderRadius: 10, background: "rgba(255,255,255,.6)" }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: G }}>
                        <I d={row.d} s={13} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#9ca3af", marginBottom: 2 }}>{row.label}</p>
                        <p style={{ fontSize: 12, fontWeight: 500, color: "#111827", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.value}</p>
                      </div>
                      {row.copy && (
                        <button className="ct-copy" onClick={copyEmail}
                          style={{ background: "none", border: "none", cursor: "pointer", color: copied ? G : "#9ca3af", padding: 4, display: "flex", transition: "color .15s" }}>
                          <I d={copied ? CHECK_D : COPY_D} s={12} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 10 }}>Find me on</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="ct-social"
                      style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", textDecoration: "none" }}>
                      <I d={s.d} s={14} />
                    </a>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 13px", borderRadius: 10, background: "#fff", border: "1px solid #e5e7eb" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: G, flexShrink: 0, animation: "ct-pulse 2s infinite" }} />
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}>Available now</p>
                    <p style={{ fontSize: 10, color: "#9ca3af" }}>Open to freelance & full-time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ background: "#fff", padding: "60px 48px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, textAlign: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: GL, border: "1.5px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", color: G }}>
                <I d={SEND_D} s={24} />
              </div>
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#111827", letterSpacing: "-0.6px", marginBottom: 8 }}>Have a project in mind?</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, maxWidth: 280, margin: "0 auto" }}>
                  Drop me a message and let's build something great together. I usually respond within 24 hours.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                {["Fast reply", "24h response", "Open to collab"].map(label => (
                  <span key={label} style={{ padding: "5px 12px", borderRadius: 6, background: "#f9fafb", border: "1px solid #e5e7eb", fontSize: 11, color: "#6b7280", fontWeight: 500 }}>{label}</span>
                ))}
              </div>
              <button className="ct-cta" onClick={() => setOpen(true)}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px", borderRadius: 12, background: G, color: "#fff", fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(34,197,94,.25)" }}>
                <I d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6" s={15} />
                Contact me
                <I d={ARR_D} s={13} />
              </button>
              <p style={{ fontSize: 11, color: "#d1d5db" }}>Private & secure · No spam</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="ct ct-backdrop"
          onClick={e => { if (e.currentTarget === e.target) closeModal(); }}
          style={{ position: "fixed", inset: 0, background: "rgba(17,24,39,.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 20 }}>

          <div className="ct-modal"
            style={{ background: "#fff", borderRadius: 20, border: "1px solid #e5e7eb", width: "100%", maxWidth: 480, position: "relative", boxShadow: "0 24px 80px rgba(0,0,0,.14)", overflow: "hidden" }}>

            {/* Loading bar — only while sending */}
            {sending && (
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#f0fdf4" }}>
                <div className="ct-progress" />
              </div>
            )}

            {/* Header bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px 16px", borderBottom: "1px solid #f3f4f6" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: GL, border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", color: G, flexShrink: 0 }}>
                  <I d={sent ? CHECK_D : error ? WARN_D : SEND_D} s={14} />
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                    {sent ? "Message sent!" : error ? "Something went wrong" : "Send a message"}
                  </p>
                  <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
                    {sent ? "I'll get back to you within 24h" : error ? "See below for details" : "Goes directly to gemedat471@gmail.com"}
                  </p>
                </div>
              </div>
              <button className="ct-close" onClick={closeModal}
                style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer", color: "#9ca3af" }}>
                <I d={X_D} s={13} />
              </button>
            </div>

            <div style={{ padding: "24px 22px 22px" }}>

              {/* ── SUCCESS ── */}
              {sent && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "16px 0 8px", textAlign: "center" }}>
                  <div className="ct-icon-pop" style={{ width: 64, height: 64, borderRadius: "50%", background: GL, border: "2px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", color: G }}>
                    <I d={CHECK_D} s={28} />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Landed in my inbox</p>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, maxWidth: 260, margin: "0 auto" }}>
                      Expect a reply within 24 hours. Thanks for reaching out!
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    <button onClick={reset}
                      style={{ fontSize: 12, fontWeight: 600, color: GD, background: GL, border: "1px solid #bbf7d0", borderRadius: 8, padding: "9px 20px", cursor: "pointer" }}>
                      Send another
                    </button>
                    <button onClick={closeModal}
                      style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "9px 20px", cursor: "pointer" }}>
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* ── ERROR ── */}
              {error && !sent && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "16px 0 8px", textAlign: "center" }}>
                  <div className="ct-icon-pop" style={{ width: 64, height: 64, borderRadius: "50%", background: "#fef2f2", border: "2px solid #fecaca", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>
                    <I d={WARN_D} s={26} />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Couldn't send</p>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, maxWidth: 280, margin: "0 auto" }}>
                      {error}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    <button onClick={() => setError(null)}
                      style={{ fontSize: 12, fontWeight: 600, color: "#fff", background: "#ef4444", border: "none", borderRadius: 8, padding: "9px 20px", cursor: "pointer" }}>
                      Try again
                    </button>
                    <button onClick={closeModal}
                      style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "9px 20px", cursor: "pointer" }}>
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* ── FORM ── */}
              {!sent && !error && (
                <form onSubmit={submit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
                    {[
                      { id: "name",  label: "Full name", type: "text",  ph: "John Doe"         },
                      { id: "email", label: "Email",     type: "email", ph: "john@example.com" },
                    ].map(f => (
                      <div className="ct-field" key={f.id}>
                        <label style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: focused === f.id ? G : "#9ca3af", marginBottom: 6, transition: "color .15s" }}>{f.label}</label>
                        <input type={f.type} name={f.id} value={(form as any)[f.id]} onChange={change} required placeholder={f.ph}
                          onFocus={() => setFocused(f.id)} onBlur={() => setFocused(null)} />
                      </div>
                    ))}
                  </div>

                  <div className="ct-field" style={{ marginBottom: 18 }}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: focused === "subject" ? G : "#9ca3af", marginBottom: 6, transition: "color .15s" }}>Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={change} required placeholder="What's this about?"
                      onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
                  </div>

                  <div className="ct-field" style={{ marginBottom: 22 }}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: focused === "message" ? G : "#9ca3af", marginBottom: 6, transition: "color .15s" }}>Message</label>
                    <textarea name="message" value={form.message} onChange={change} required rows={4} placeholder="Tell me about your project or idea…"
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p style={{ fontSize: 10, color: "#d1d5db" }}>Private & secure</p>
                    <button type="submit" disabled={sending} className="ct-send"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", borderRadius: 10, background: sending ? "#86efac" : G, color: "#fff", fontSize: 12, fontWeight: 700, border: "none", cursor: sending ? "not-allowed" : "pointer", transition: "background .15s" }}>
                      {sending ? (
                        <>
                          <span style={{ width: 13, height: 13, border: "2px solid rgba(255,255,255,.35)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "ct-spin .7s linear infinite" }} />
                          Sending…
                        </>
                      ) : (
                        <>Send message <I d={ARR_D} s={13} /></>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}