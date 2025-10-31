// app/depoimentos/page.tsx
"use client";

import Testimonials from "../../components/Testimonials";
import TestimonialForm from "../../components/TestimonialForm";

export default function DepoimentosPage() {
  return (
    <main className="pt-32 bg-gray-50 min-h-screen">
      {/* Container principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Testimonials />
        <TestimonialForm />
      </div>
    </main>
  );
}
