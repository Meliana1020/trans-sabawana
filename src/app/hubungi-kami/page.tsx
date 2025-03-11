// "use client";
// import { useState } from 'react';

// export default function ContactPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('');

//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, message }),
//     });

//     try {
//       if (res.ok) {
//         setStatus('Message sent successfully!');
//       } else {
//         const data = await res.json();
//         setStatus(data.message);
//       }
//     } catch (err) {
//       setStatus('Failed to send message. Please try again later.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center text-zinc-900">Contact Us</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {status && <p className="text-center">{status}</p>}
//           <label htmlFor="name" className="text-black">Name</label>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="text-black w-full px-4 py-2 rounded border-2 border-black"
//             required
//           />
//           <label htmlFor="email" className="text-black">Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="text-black w-full px-4 py-2 rounded border-2 border-black"
//             required
//           />
//           <label htmlFor="message" className="text-black">Message</label>
//           <textarea
//             placeholder="Your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="text-black w-full px-4 py-2 rounded border-2 border-black"
//             required
//           />
//           <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Hubungi Kami</h2>

      <div className="w-full max-w-lg flex flex-col gap-6">
        {/* WhatsApp */}
        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-emerald-500 p-4 rounded-xl shadow-md hover:bg-emerald-700 transition"
        >
          <FaWhatsapp className="text-3xl" />
          <span className="text-lg font-medium">WhatsApp: +62 812-3456-7890</span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://instagram.com/trans_sabawana"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-amber-500 p-4 rounded-xl shadow-md hover:bg-amber-700 transition"
        >
          <FaInstagram className="text-3xl" />
          <span className="text-lg font-medium">@trans_sabawana</span>
        </Link>

        {/* Email */}
        <Link
          href="mailto:info@transsabawana.com"
          className="flex items-center gap-4 bg-blue-500 p-4 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <FaEnvelope className="text-3xl" />
          <span className="text-lg font-medium">info@transsabawana.com</span>
        </Link>

        {/* Lokasi */}
        <Link
          href="https://goo.gl/maps/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-red-600 p-4 rounded-xl shadow-md hover:bg-red-700 transition"
        >
          <FaMapMarkerAlt className="text-3xl" />
          <span className="text-lg font-medium">Wonosobo, Jawa Tengah</span>
        </Link>
      </div>
    </div>
  );
}
