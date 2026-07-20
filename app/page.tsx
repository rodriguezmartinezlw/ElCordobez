'use client';

import { useEffect } from 'react';

// URLs de las imágenes desde un CDN público (usando imgix simulado con placeholders optimizados)
const heroImage = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop';

const proposalSections = [
  {
    id: 'restaurante',
    icon: 'restaurant',
    title: 'Restaurante de Origen',
    description:
      'Descubra la esencia de la Cocina Manchega. Nuestra carta rinde homenaje a los productos locales: desde la miel de La Alcarria hasta los vinos de la región, cada plato es un viaje sensorial por los sabores de Castilla-La Mancha.',
    bullets: ['Especialidad en asados tradicionales', 'Productos de proximidad (Km 0)', 'Bodega con selección de D.O. locales'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop',
    alt: 'Restaurante de Origen',
    reverse: true,
  },
  {
    id: 'bar',
    icon: 'local_bar',
    title: 'Bar & Terraza',
    description:
      'El lugar ideal para desconectar. Disfrute de atardeceres mágicos en nuestro patio rústico con una selección de coctelería de autor y aperitivos tradicionales en un ambiente relajado.',
    bullets: ['Terraza exterior con encanto', 'Coctelería clásica y creativa', 'Tapas y raciones de autor'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
    alt: 'Bar y Terraza',
  },
  {
    id: 'eventos',
    icon: 'groups',
    title: 'Salón de Eventos',
    description:
      'Un espacio versátil que se adapta a sus necesidades. Desde bodas exclusivas y celebraciones privadas hasta reuniones corporativas, nuestro salón ofrece la elegancia y tecnología necesaria para hacer memorable cualquier evento.',
    bullets: ['Capacidad modular para grandes grupos', 'Equipamiento audiovisual completo', 'Asesoramiento personalizado para eventos'],
    image: 'https://images.unsplash.com/photo-1519167758481-dc8986ba6c28?w=800&h=600&fit=crop',
    alt: 'Salón de Eventos',
    reverse: true,
  },
];

const services = [
  ['hotel', 'Alojamiento Cercano', 'Trabajamos con los mejores hoteles y casas rurales de Guadalajara para ofrecer tarifas especiales a vuestros invitados. Facilitamos el servicio de autobuses desde el aeropuerto.', 'Ver opciones'],
  ['event_available', 'Wedding Planner', 'Nuestro equipo de coordinación integral os acompañará desde el primer día. Diseño conceptual, búsqueda de proveedores, gestión de presupuesto y coordinación de todos los detalles.', 'Consultar'],
];

const gallery = [
  ['Detalle floral boda', 'https://images.unsplash.com/photo-1519735236340-6e0ee6b43999?w=600&h=600&fit=crop'],
  ['Novios en la naturaleza', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop'],
  ['Mesa decorada banquete', 'https://images.unsplash.com/photo-1519167758481-dc8986ba6c28?w=600&h=600&fit=crop'],
  ['Detalle banquete rústico', 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=600&fit=crop'],
  ['Tarta nupcial', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop'],
  ['Brindis novios', 'public/images/WhatsApp Image 2026-07-17 at 19.14.59 (4).jpeg'],
];

function Icon({ children, className = '' }: { children: string; className?: string }) {
  return <span className={`material-icons ${className}`}>{children}</span>;
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="fixed z-50 w-full border-b border-border-light bg-surface-light/90 backdrop-blur-md dark:border-border-dark dark:bg-surface-dark/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a className="flex flex-shrink-0 items-center gap-2" href="#inicio" aria-label="El Cordobés">
              <span className="font-display text-2xl font-bold text-primary">El Cordobés</span>
            </a>
            <nav className="hidden space-x-8 md:flex" aria-label="Principal">
              {['Restaurante', 'Bar', 'Eventos', 'Contacto'].map((item) => (
                <a key={item} className="font-medium transition-colors hover:text-primary" href={`#${item.toLowerCase()}`}>{item}</a>
              ))}
            </nav>
            <a className="hidden rounded-full bg-primary px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-opacity-90 md:flex" href="#contacto">Planificar mi Boda</a>
            <button className="flex items-center hover:text-primary focus:outline-none md:hidden" aria-label="Abrir menú">
              <Icon>menu</Icon>
            </button>
          </div>
        </div>
      </header>

      <section id="inicio" className="flex min-h-[921px] flex-col overflow-hidden bg-background-light pt-20 dark:bg-background-dark lg:flex-row">
        <div className="relative z-10 flex w-full items-center justify-center p-8 lg:w-1/2 lg:p-16 xl:p-24">
          <div className="max-w-2xl">
            <span className="mb-6 block text-sm font-bold uppercase tracking-wider text-primary">Finca El Cordobés · Hontoba</span>
            <h1 className="mb-8 font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Sabor, Brindis y <br /><span className="font-normal italic text-primary">Celebraciones Inolvidables</span></h1>
            <p className="mb-12 mt-4 text-lg font-light leading-relaxed text-muted-light dark:text-muted-dark md:text-xl">Una auténtica experiencia castellana en el corazón de Hontoba. Tradición, calidad y elegancia en cada detalle.</p>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-primary px-8 py-3 text-center font-medium text-white shadow-md transition-all hover:bg-opacity-90" href="#restaurante">Reservar Mesa</a>
              <a className="rounded-full bg-primary px-8 py-3 text-center font-medium text-white shadow-md transition-all hover:bg-opacity-90" href="#eventos">Eventos y Salones</a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[512px] w-full lg:min-h-screen lg:w-1/2">
          <img 
            alt="Boda romántica en finca" 
            className="absolute inset-0 h-full w-full object-cover animate-fade-in-scale" 
            src={heroImage}
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="border-t border-border-light bg-surface-light py-20 dark:border-border-dark dark:bg-surface-dark" id="espacios">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">Nuestra Propuesta</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-light dark:text-muted-dark">Desde una cena íntima con sabores de la tierra hasta grandes eventos corporativos, cada rincón de nuestra finca es un escenario perfecto.</p>
          </div>
          {proposalSections.map((section, index) => (
            <div key={section.id} className={`grid grid-cols-1 items-center gap-12 ${index < proposalSections.length - 1 ? 'mb-20' : ''} md:grid-cols-2 scroll-animate`} id={section.id}>
              <div className={`${section.reverse ? 'order-2 md:order-1' : 'md:order-2'} group relative`}>
                <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-lg transition duration-500 group-hover:bg-primary/30" />
                <img 
                  alt={section.alt} 
                  className="relative h-[400px] w-full rounded-xl object-cover shadow-2xl animate-fade-in-zoom" 
                  src={section.image}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={section.reverse ? 'order-1 md:order-2' : 'md:order-1'}>
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="rounded-full bg-primary/10 p-2 text-primary">{section.icon}</Icon>
                  <h3 className="font-display text-3xl font-bold">{section.title}</h3>
                </div>
                <p className="mb-6 text-lg text-muted-light dark:text-muted-dark">{section.description}</p>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => <li key={bullet} className="flex items-center"><Icon className="mr-2 text-sm text-primary">check_circle</Icon>{bullet}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background-light py-20 dark:bg-background-dark" id="servicios">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Servicios Exclusivos" subtitle="Para que no tengáis que preocuparos por nada." />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map(([icon, title, text, link]) => (
              <article key={title} className="scroll-animate flex h-full flex-col rounded-xl border border-border-light bg-surface-light p-8 shadow-md transition-colors hover:border-primary dark:border-border-dark dark:bg-surface-dark">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"><Icon className="text-3xl text-primary">{icon}</Icon></div>
                <h3 className="mb-4 font-display text-2xl font-bold">{title}</h3>
                <p className="mb-6 flex-grow text-muted-light dark:text-muted-dark">{text}</p>
                <a className="mt-auto flex items-center gap-1 font-medium text-primary hover:underline" href="#contacto">{link}<Icon className="text-sm">arrow_forward</Icon></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border-light bg-surface-light py-20 dark:border-border-dark dark:bg-surface-dark" id="galeria">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Eventos Reales" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map(([alt, src]) => (
              <img 
                key={src} 
                alt={alt} 
                className="scroll-animate h-48 w-full cursor-pointer rounded-lg object-cover shadow-sm transition-opacity hover:opacity-90" 
                src={src}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="rounded-full border-2 border-primary bg-transparent px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white">Ver toda la galería</button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 font-display text-4xl font-bold">{title}</h2>
      <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-light dark:text-muted-dark">{subtitle}</p>}
    </div>
  );
}

function ContactSection() {
  return (
    <section className="hero-pattern relative py-24" id="contacto">
      <div className="absolute inset-0 bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border-light bg-surface-light shadow-2xl dark:border-border-dark dark:bg-surface-dark">
          <div className="p-8 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-display text-4xl font-bold">Empecemos a planear</h2>
              <p className="text-muted-light dark:text-muted-dark">Cuéntanos sobre los detalles de tu evento y nos pondremos en contacto contigo en breve.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="nombre1" label="Nombre y Apellidos" placeholder="Ej. Ana García" />
                <Field id="nombre2" label="Nombre de tu pareja" placeholder="Ej. Juan Pérez" />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="email" label="Correo Electrónico" placeholder="correo@ejemplo.com" type="email" />
                <Field id="telefono" label="Teléfono" placeholder="+34 600 000 000" type="tel" />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="fecha" label="Fecha Estimada" type="date" />
                <div>
                  <Label id="tipo_consulta">Tipo de Reserva / Evento</Label>
                  <select id="tipo_consulta" className="w-full rounded-lg border border-border-light bg-background-light px-4 py-3 transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark">
                    <option>Boda</option>
                    <option>Celebración privada</option>
                    <option>Evento corporativo</option>
                    <option>Otra</option>
                  </select>
                </div>
              </div>
              <div>
                <Label id="mensaje">Cuéntanos más sobre vuestra idea</Label>
                <textarea id="mensaje" className="w-full rounded-lg border border-border-light bg-background-light px-4 py-3 transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark" rows={4} placeholder="Comparte detalles de tu evento..." />
              </div>
              <div className="flex items-start">
                <input id="privacidad" type="checkbox" className="mt-1 h-4 w-4 rounded border-border-light bg-background-light text-primary focus:ring-primary dark:border-border-dark dark:bg-background-dark" />
                <label htmlFor="privacidad" className="ml-3 text-sm text-muted-light dark:text-muted-dark">Acepto la política de privacidad y el tratamiento de mis datos.</label>
              </div>
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-opacity-90" type="submit">Solicitar presupuesto <Icon>arrow_forward</Icon></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return <label className="mb-2 block text-sm font-medium" htmlFor={id}>{children}</label>;
}

function Field({ id, label, type = 'text', placeholder = '' }: { id: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label id={id}>{label}</Label>
      <input id={id} type={type} className="w-full rounded-lg border border-border-light bg-background-light px-4 py-3 transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark" placeholder={placeholder} />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-light pb-8 pt-16 dark:border-border-dark dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          <div>
            <div className="mb-6 flex items-center justify-center gap-2 md:justify-start">
              <span className="font-display text-2xl font-bold text-primary">El Cordobés</span>
            </div>
            <p className="text-muted-light dark:text-muted-dark">Finca de eventos en Hontoba, Guadalajara. Restaurante, bar y salón de bodas.</p>
          </div>
          <div>
            <h4 className="mb-6 font-display text-xl font-bold">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start justify-center gap-3 text-muted-light dark:text-muted-dark md:justify-start">
                <Icon className="text-lg">phone</Icon>
                <a href="tel:+34949" className="hover:text-primary">+34 949 ...</a>
              </li>
              <li className="flex items-start justify-center gap-3 text-muted-light dark:text-muted-dark md:justify-start">
                <Icon className="text-lg">email</Icon>
                <a href="mailto:info@elcordobes.es" className="hover:text-primary">info@elcordobes.es</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-display text-xl font-bold">Síguenos</h4>
            <p className="mb-4 text-muted-light dark:text-muted-dark">Inspírate con nuestras últimas celebraciones.</p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <a href="#" className="transition-colors hover:text-primary">Instagram</a>
              <a href="#" className="transition-colors hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-border-light pt-8 text-sm text-muted-light dark:border-border-dark dark:text-muted-dark md:flex-row">
          <p>© 2024 Finca El Cordobés. Todos los derechos reservados.</p>
          <p>Hontoba, Guadalajara</p>
        </div>
      </div>
    </footer>
  );
}
