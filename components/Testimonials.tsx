// /components/Testimonials.jsx
"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Image from "next/image";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTestimonials(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-gray-500 uppercase tracking-wider">O que dizem nossos clientes</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">Depoimentos</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, message, image }, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              {image && (
                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                  <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
                </div>
              )}
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="mt-3 text-gray-600">{message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
