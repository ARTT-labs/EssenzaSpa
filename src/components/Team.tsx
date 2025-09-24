import React from "react";

const team = [
  {
    name: "Michael Kim",
    title: "Senior Esthetician",
    img: "/images/team-1.jpg",
  },
  {
    name: "Sophia Chen",
    title: "Skin Health Consultant",
    img: "/images/team-2.jpg",
  },
  {
    name: "Ava Martinez",
    title: "Anti-Aging Specialist",
    img: "/images/team-3.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif">Meet our skincare experts</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white p-6 rounded-lg shadow">
              <img
                src={m.img}
                alt={m.name}
                className="w-36 h-36 object-cover rounded-full mx-auto"
              />
              <div className="mt-4 font-semibold">{m.name}</div>
              <div className="text-sm text-slate-600">{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
