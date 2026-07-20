const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD8qVzSKq4Bpy8oCwVA--3Zwv4s-d800GVM13JF4Gi-CNrWkRaFLa1Dlvlc9VJ2Iguu6yCj4rc6OAY2qJ4R_wXkyLpLikhDn6ow_rKhu0i2ypMziMHleDdPAsPgLtd2cawGcxARBzAEpQSy...';

const proposalSections = [
  {
    id: 'restaurante',
    icon: 'restaurant',
    title: 'Restaurante de Origen',
    description:
      'Descubra la esencia de la Cocina Manchega. Nuestra carta rinde homenaje a los productos locales: desde la miel de La Alcarria hasta los vinos de la región, cada plato es un viaje sensorial...',
    bullets: ['Especialidad en asados tradicionales', 'Productos de proximidad (Km 0)', 'Bodega con selección de D.O. locales'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKqv9i1BPLFJPe63z57-KpZFYR33lWZxxke76hUf_PSTjnPyEBZ6M32v7KTYMoPG2_SI_rCH_FqYsWl1qSnqABzBDcwXVG_5LuVcpqS5wDLl7HKq3f_N7xOgEszoVAMvMT4uK4LiO...',
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
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDr-Fq5PWvv8RpebFtVihvr1ORXD_HRmVMes7b78Jko9yGoHQ4CeAUuE0Duq5VvHycznXVo0As9wrU7cgLrDnlouVUt6Lh9xMi2QfiFGRNzs0tmC59oDUVwGYAr0zrzzJ501b88CZW...',
    alt: 'Bar y Terraza',
  },
  {
    id: 'eventos',
    icon: 'groups',
    title: 'Salón de Eventos',
    description:
      'Un espacio versátil que se adapta a sus necesidades. Desde bodas exclusivas y celebraciones privadas hasta reuniones corporativas, nuestro salón ofrece la elegancia y tecnología necesaria...',
    bullets: ['Capacidad modular para grandes grupos', 'Equipamiento audiovisual completo', 'Asesoramiento personalizado para eventos'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCj8HkKlK2GRlWCY4k3tQssNAOocgVlSYKs7O0427mOmBC2GCtV8EhztYCpzidlf2J9s2kM1SJXN2c-vJmmIirn8HyUGRlkO2iZKTPLRLQIGDBi3cB6J6MwVJ9r6rDH3JRjfzbA7TQ...',
    alt: 'Salón de Eventos',
    reverse: true,
  },
];

const services = [
  ['hotel', 'Alojamiento Cercano', 'Trabajamos con los mejores hoteles y casas rurales de Guadalajara para ofrecer tarifas especiales a vuestros invitados. Facilitamos el servicio de autobuses...'],
  ['event_available', 'Wedding Planner', 'Nuestro equipo de coordinación integral os acompañará desde el primer día. Diseño conceptual, búsqueda de proveedores, gestión de presupuesto y coordinación...'],
];

const gallery = [
  ['Detalle floral boda', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHCj1dJ3lKknW32VdODwrX7fa7tV7jorwUzYDAFr0ZI75oCPU6tu2X2m5s0tOIY8i5tYKPPypqoII5FyJlNUxwTSZTWRd-06fP4EjhILsYNYaAP6XvIWE...'],
  ['Novios en la naturaleza', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgCqsUbDtEW6P4doGauXOG9hPhJYT7t57uvVd0_wTkrjd-H24-VLn4WQ27nsbX_Qwb11mWV_EeEHWNiqmviJ5jB8uXVdz-5qE0xui4GVH8PJ33K9y...'],
  ['Mesa decorada banquete', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgi294C0tE5fugJjT9Tufwnnh3o1MWRDShrDJIvzeXvzrLlTE9WMlkvorTbgiCgoQj3ECJxB4G3fK2H99ZgysICfP9m0b4nxd4b_m8CxeF7hdkNW5M...'],
  ['Detalle banquete rústico', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoyOI_fir9zS_6cgubCSTpPkIzTZzHcblc-NiCkK9HLB15UP4JKXRtvLpjtycmAfhDGXtW5okJQgZ8ysOxXIZVmES2EF6jTwCnf8afE1SkVdWod...'],
  ['Tarta nupcial', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY8RGO9kt9h2GTbTWl9N9lXbenkcYhIj1MO4RG_nY0eG3IsvsErtuP9TVq1cjJl8-cVy8uxVJmyPiqEcE6SrK7v7pNDKd3u_SbGv1PG8w4A5lBAnNb37VMMgbwN...'],
  ['Brindis novios', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvJ_Vbwi2bR89O2vMFGTODfTiB940H_UnC0UrTj-klxbtlB8x9Nw2CgRMIF83v1IvP9qffyY2jyLPocewMXu7EyY9xM0xYwodXvf3_Pb-KOnTcp8hcZHDrOasH...'],
];

function Icon({ children, className = '' }: { children: string; className?: string }) {
  return <span className={`material-icons ${className}`}>{children}</span>;
}

export default function Home() {
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
          <img alt="Boda romántica en finca" className="absolute inset-0 h-full w-full object-cover animate-fade-in-scale" src={heroImage} />
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
            <div key={section.id} className={`grid grid-cols-1 items-center gap-12 ${index < proposalSections.length - 1 ? 'mb-20' : ''} md:grid-cols-2`} id={section.id}>
              <div className={`${section.reverse ? 'order-2 md:order-1' : 'md:order-2'} group relative`}>
                <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-lg transition duration-500 group-hover:bg-primary/30" />
                <img alt={section.alt} className="relative h-[400px] w-full rounded-xl object-cover shadow-2xl animate-fade-in-zoom" src={section.image} />
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
            {services.map(([icon, title, text]) => (
              <article key={title} className="flex h-full flex-col rounded-xl border border-border-light bg-surface-light p-8 shadow-md transition-colors hover:border-primary dark:border-border-dark dark:bg-surface-dark animate-fade-in-up">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"><Icon className="text-3xl text-primary">{icon}</Icon></div>
                <h3 className="mb-4 font-display text-2xl font-bold">{title}</h3>
                <p className="mb-6 flex-grow text-muted-light dark:text-muted-dark">{text}</p>
                <a className="mt-auto flex items-center gap-1 font-medium text-primary hover:underline" href="#contacto">Saber más<Icon className="text-sm">arrow_forward</Icon></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border-light bg-surface-light py-20 dark:border-border-dark dark:bg-surface-dark" id="galeria">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Eventos Reales" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map(([alt, src]) => <img key={src} alt={alt} className="h-48 w-full cursor-pointer rounded-lg object-cover shadow-sm transition-opacity hover:opacity-90 animate-fade-in-up" src={src} />)}
          </div>
          <div className="mt-10 text-center"><button className="rounded-full border-2 border-primary bg-transparent px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white">Ver toda la galería</button></div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div className="mb-12 text-center"><h2 className="mb-4 font-display text-4xl font-bold">{title}</h2><div className="mx-auto h-1 w-24 rounded-full bg-primary" />{subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-light dark:text-muted-dark">{subtitle}</p>}</div>;
}

function ContactSection() {
  return (
    <section className="hero-pattern relative py-24" id="contacto">
      <div className="absolute inset-0 bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border-light bg-surface-light shadow-2xl dark:border-border-dark dark:bg-surface-dark">
          <div className="p-8 md:p-12">
            <div className="mb-10 text-center"><h2 className="mb-4 font-display text-4xl font-bold">Empecemos a planear</h2><p className="text-muted-light dark:text-muted-dark">Cuéntanos sobre los detalles de tu evento y nos pondremos en contacto contigo en breve.</p></div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2"><Field id="nombre1" label="Nombre y Apellidos" placeholder="Ej. Ana García" /><Field id="nombre2" label="Nombre de tu pareja" placeholder="Ej. Juan Pérez" /></div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2"><Field id="email" label="Correo Electrónico" placeholder="correo@ejemplo.com" type="email" /><Field id="telefono" label="Teléfono" placeholder="+34 600 000 000" type="tel" /></div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2"><Field id="fecha" label="Fecha Estimada" type="date" /><div><Label id="tipo_consulta">Tipo de Reserva / Evento</Label><select id="tipo_consulta" className="w-full rounded-lg border border-border-light bg-background-light px-4 py-3 transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark"><option>Boda</option><option>Celebración privada</option><option>Evento corporativo</option><option>Otra</option></select></div></div>
              <div><Label id="mensaje">Cuéntanos más sobre vuestra idea</Label><textarea id="mensaje" className="w-full rounded-lg border border-border-light bg-background-light px-4 py-3 transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark" rows={4} placeholder="Comparte detalles de tu evento..." /></div>
              <div className="flex items-start"><input id="privacidad" type="checkbox" className="mt-1 h-4 w-4 rounded border-border-light bg-background-light text-primary focus:ring-primary dark:border-border-dark dark:bg-background-dark" /><label htmlFor="privacidad" className="ml-3 text-sm text-muted-light dark:text-muted-dark">Acepto la política de privacidad y el tratamiento de mis datos.</label></div>
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
  return <div><Label id={id}>{label}</Label><input id={id} type={type} className="w-full rounded-lg border border-border-light bg-background-light px-4 py-3 transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark" placeholder={placeholder} /></div>;
}

function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-light pb-8 pt-16 dark:border-border-dark dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          <div><div className="mb-6 flex items-center justify-center gap-2 md:justify-start"><span className="font-display text-2xl font-bold text-primary">El Cordobés</span></div><p className="text-muted-light dark:text-muted-dark">Finca de eventos en Hontoba, Guadalajara. Restaurante, bar y salón de bodas.</p></div>
          <div><h4 className="mb-6 font-display text-xl font-bold">Contacto</h4><ul className="space-y-4"><li className="flex items-start justify-center gap-3 text-muted-light dark:text-muted-dark md:justify-start"><Icon className="text-lg">phone</Icon><a href="tel:+34949...">+34 949 ...</a></li><li className="flex items-start justify-center gap-3 text-muted-light dark:text-muted-dark md:justify-start"><Icon className="text-lg">email</Icon><a href="mailto:info@elcordobes.es">info@elcordobes.es</a></li></ul></div>
          <div><h4 className="mb-6 font-display text-xl font-bold">Síguenos</h4><p className="mb-4 text-muted-light dark:text-muted-dark">Inspírate con nuestras últimas celebraciones.</p><div className="flex items-center justify-center gap-4 md:justify-start"><a href="#" className="transition-colors hover:text-primary">Instagram</a><a href="#" className="transition-colors hover:text-primary">Facebook</a></div></div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-border-light pt-8 text-sm text-muted-light dark:border-border-dark dark:text-muted-dark md:flex-row"><p>© 2024 Finca El Cordobés. Todos los derechos reservados.</p><p>Hontoba, Guadalajara</p></div>
      </div>
    </footer>
  );
}
