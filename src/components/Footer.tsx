export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white py-8 mt-12">
      <div className="w-full mx-auto px-8 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-serif text-xl">Essenza</h4>
          <p className="text-sm mt-2 text-white/80">
            Entregamos soluções de skincare personalizadas.
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-sm">
          <div>Contato: +55 (11) 91234-5678</div>
          <div className="mt-2">Email: hello@essenza.example</div>
        </div>
      </div>
    </footer>
  );
}
