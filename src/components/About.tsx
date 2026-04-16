"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Sobre mí
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-sm">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">5+</p>
              <p className="text-sm text-muted">Años de experiencia</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">50+</p>
              <p className="text-sm text-muted">Proyectos completados</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">10+</p>
              <p className="text-sm text-muted">Empresas asesoradas</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">99%</p>
              <p className="text-sm text-muted">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
