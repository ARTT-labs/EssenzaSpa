const items = [
  {
    q: "O que é a terapia de hidratação?",
    a: "É um tratamento facial que devolve a umidade natural da pele, melhora a elasticidade e traz um aspecto saudável e iluminado.",
  },
  {
    q: "Os procedimentos são indicados para todos os tipos de pele?",
    a: "Sim. Todos os protocolos são personalizados conforme as necessidades do cliente.",
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Em média, de 45 a 60 minutos, dependendo do tratamento escolhido.",
  },
  {
    q: "Em quanto tempo vejo os resultados?",
    a: "Alguns resultados são imediatos, outros aparecem progressivamente conforme a evolução das sessões.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-serif text-center">
          Perguntas frequentes
        </h3>
        <div className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <details key={idx} className="bg-[var(--rose)] p-4 rounded-xl">
              <summary className="cursor-pointer font-medium">{it.q}</summary>
              <p className="mt-2 text-base text-slate-700">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
