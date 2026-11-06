import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, BadgeCheck, CalendarDays, Check, ChevronRight, Heart, Mail, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreeDPhotoCarousel, type CleaningPhoto } from "@/components/ui/3d-carousel";
import GlassyCarousel from "@/components/ui/glassy-coverflow-carousel";
import heroImage from "@/assets/wellswept-hero.jpg";
import livingImage from "@/assets/wellswept-living.jpg";
import kitchenImage from "@/assets/wellswept-kitchen.jpg";
import commercialImage from "@/assets/wellswept-commercial.jpg";
import bathImage from "@/assets/wellswept-bath.jpg";
import bedroomImage from "@/assets/wellswept-bedroom.jpg";
import beforeImage from "@/assets/wellswept-refresh-before.jpg";
import afterImage from "@/assets/wellswept-refresh-after.jpg";

const business = {
  name: "Well’ Swept Cleaning Solutions LLC",
  phone: "941-769-0965",
  email: "admin@wellsweptcleaningsolutions.com",
  tagline: "Clean Spaces • Happy Places",
  offer: "Bundle Deals & Holiday Discounts",
  serviceArea: "Ask about your location",
};

const photos: CleaningPhoto[] = [
  { src: livingImage, alt: "Bright, freshly cared-for coastal living room", title: "Living, renewed", subtitle: "Residential" },
  { src: kitchenImage, alt: "Polished marble kitchen with champagne fixtures", title: "A kitchen in its element", subtitle: "Residential" },
  { src: bathImage, alt: "Freshly cleaned marble bath and glass shower", title: "The quiet reset", subtitle: "Residential" },
  { src: commercialImage, alt: "Sunlit modern office reception", title: "A better first impression", subtitle: "Commercial" },
  { src: bedroomImage, alt: "Fresh linens in a serene bedroom", title: "Rest, beautifully", subtitle: "Residential" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Well’ Swept Cleaning Solutions LLC | Clean Spaces • Happy Places" },
      { name: "description", content: "Residential and commercial cleaning by Well’ Swept Cleaning Solutions LLC. Call or text Britney at 941-769-0965." },
      { property: "og:title", content: "Well’ Swept Cleaning Solutions LLC" },
      { property: "og:description", content: "Clean Spaces • Happy Places. Residential and commercial cleaning, with flexible scheduling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Showcase", "#showcase"], ["Contact", "#contact"],
  ];

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Well’ Swept home">
            <span className="flex size-10 items-center justify-center rounded-full border border-rose/35 text-rose"><Sparkles className="size-5" /></span>
            <span><span className="block font-display text-xl leading-none sm:text-2xl">Well’ Swept</span><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.17em] text-muted-foreground">Cleaning Solutions LLC</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {links.map(([label, href]) => <a key={label} href={href} className="text-xs font-semibold text-muted-foreground transition-colors hover:text-rose">{label}</a>)}
            <Button asChild size="sm" className="rounded-full px-5"><a href={`tel:${business.phone}`}><Phone /> Call Britney</a></Button>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && <nav className="grid gap-0 border-t border-border bg-background px-5 pb-3 md:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 text-sm">{label}</a>)}<a className="py-3 text-sm font-semibold text-rose" href={`tel:${business.phone}`}>Call/Text Britney · {business.phone}</a></nav>}
      </header>

      <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="grid min-h-[690px] lg:min-h-[720px] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:pl-[max(3rem,calc((100vw-1280px)/2))] lg:pr-8 lg:py-24">
            <p className="eyebrow mb-6 flex items-center gap-3 text-champagne"><span className="h-px w-8 bg-champagne" />Residential & Commercial Cleaning</p>
            <h1 className="editorial-title max-w-[610px] text-6xl sm:text-7xl xl:text-[88px]">More Than Cleaning, <span className="italic text-rose">It’s Peace of Mind.</span></h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-primary-foreground/75">Thoughtful care for the places where life happens—and the feeling of coming home to a little more ease.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-12 rounded-full bg-rose px-7 text-primary-foreground hover:bg-rose-deep"><a href={`tel:${business.phone}`}><Phone /> Call/Text Britney</a></Button>
              <a href={`tel:${business.phone}`} className="text-sm font-semibold text-primary-foreground">{business.phone}</a>
            </div>
            <div className="mt-12 inline-flex max-w-sm items-center gap-4 border-l border-champagne/70 pl-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-champagne"><Sparkles className="size-5" /></span>
              <span><span className="eyebrow block text-champagne">A little something extra</span><span className="mt-1 block font-display text-2xl">{business.offer}</span></span>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-full">
            <img src={heroImage} alt="Sunlit coastal home with pristine floors and an inviting ivory living room" width={1600} height={1104} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="hero-image-wash absolute inset-0" />
            <div className="absolute bottom-6 right-5 max-w-[230px] p-4 text-primary sm:bottom-9 sm:right-9 sm:max-w-[270px] sm:p-5 glass-panel">
              <p className="eyebrow text-rose-deep">A home, exhaled</p><p className="mt-2 font-display text-2xl leading-tight sm:text-3xl">The everyday, made lighter.</p>
            </div>
            <span className="absolute right-6 top-7 hidden rotate-90 origin-right eyebrow text-primary sm:block">Cared for, with intention</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-primary-foreground/15 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/70 sm:px-10 lg:px-12">
          <span>{business.tagline}</span><span className="hidden sm:block">Made for the way you live</span><a className="inline-flex items-center gap-2 hover:text-champagne" href="#about">Discover Well’ Swept <ArrowDownRight className="size-4" /></a>
        </div>
      </section>

      <section id="about" className="bg-background px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div><p className="eyebrow text-rose">01 — A thoughtful clean</p><h2 className="editorial-title mt-5 text-5xl sm:text-6xl">About<br />Well’ Swept</h2></div>
          <div className="max-w-3xl lg:justify-self-end"><p className="font-display text-3xl leading-snug sm:text-4xl">A clean space can change how a day feels.</p><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">Well’ Swept brings attentive residential and commercial cleaning to the spaces you count on. With flexible scheduling and a licensed and insured team, the details are cared for—so you can focus on everything else.</p><div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5 text-xs font-semibold"><span className="flex items-center gap-2"><BadgeCheck className="size-4 text-rose" /> Licensed & Insured</span><span className="flex items-center gap-2"><CalendarDays className="size-4 text-rose" /> Flexible Scheduling</span></div></div>
        </div>
      </section>

      <section id="services" className="bg-secondary/55 px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow text-rose">02 — The spaces we care for</p><h2 className="editorial-title mt-4 text-5xl sm:text-6xl">Room to feel at home.</h2></div><a href="#contact" className="inline-flex items-center gap-2 pb-1 text-sm font-semibold hover:text-rose">Talk through your needs <ArrowRight className="size-4" /></a></div>
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard number="01" title="Residential Cleaning" image={livingImage} alt="Bright residential living room" text="Thoughtful care for the spaces you call home." />
            <ServiceCard number="02" title="Commercial Cleaning" image={commercialImage} alt="Clean modern reception space" text="A fresh welcome for the people you work with." />
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-primary-foreground sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-11 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="eyebrow text-champagne">03 — The Well’ Swept difference</p><h2 className="editorial-title mt-5 text-5xl sm:text-6xl">Care in all<br />the right places.</h2><p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/70">Good cleaning is in the details—and in making the schedule work for you.</p></div>
          <div className="grid gap-0 sm:grid-cols-2 sm:border-l sm:border-primary-foreground/15">
            <Reason icon={<BadgeCheck />} title="Licensed & Insured" text="A detail you can feel good about." />
            <Reason icon={<CalendarDays />} title="Flexible Scheduling" text="Cleaning that fits around your life." />
            <Reason icon={<Heart />} title="Residential & Commercial" text="Thoughtful care for home and work." />
            <Reason icon={<Sparkles />} title="Clean Spaces • Happy Places" text="The little lift a fresh space brings." />
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden bg-blush md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-7 sm:p-12"><p className="eyebrow text-rose-deep">04 — Make room for more</p><h2 className="editorial-title mt-4 text-5xl sm:text-6xl">A little more<br />value, beautifully.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-primary/75">Bundle Deals & Holiday Discounts</p><Button asChild className="mt-7 h-12 rounded-full px-6"><a href={`tel:${business.phone}`}>Ask about current offers <ArrowRight /></a></Button></div>
          <div className="relative flex min-h-64 items-end bg-rose-deep p-7 text-primary-foreground sm:p-10"><img src={kitchenImage} alt="Sunlit clean kitchen" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply" /><div className="relative"><p className="eyebrow text-primary-foreground/80">Special occasions, everyday ease</p><p className="mt-3 max-w-xs font-display text-3xl sm:text-4xl">Ask Britney about a cleaning bundle that feels right for you.</p></div></div>
        </div>
      </section>

      <section id="showcase" className="bg-background px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center"><p className="eyebrow text-rose">05 — A little before & after</p><h2 className="editorial-title mt-4 text-5xl sm:text-6xl">The feeling of a fresh start.</h2><p className="mt-4 text-xs text-muted-foreground">Illustrative refresh imagery</p></div>
          <div className="grid gap-4 md:grid-cols-2">
            <BeforeAfter image={beforeImage} label="Before" alt="Illustrative living room before a refresh" />
            <BeforeAfter image={afterImage} label="After" alt="Illustrative refreshed living room" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-5"><div><p className="eyebrow text-rose">06 — Spaces, well kept</p><h2 className="editorial-title mt-4 text-5xl sm:text-6xl">A closer look.</h2></div><span className="hidden text-xs text-muted-foreground sm:block">A study in cared-for spaces</span></div>
          <div className="grid gap-4 sm:grid-cols-6 sm:grid-rows-2">
            <GalleryTile image={livingImage} alt="Coastal home living room" className="sm:col-span-3 sm:row-span-2" label="Living, renewed" />
            <GalleryTile image={kitchenImage} alt="Polished marble kitchen" className="sm:col-span-3" label="A kitchen in its element" />
            <GalleryTile image={bathImage} alt="Luxury bathroom with polished fixtures" className="sm:col-span-2" label="The quiet reset" />
            <GalleryTile image={bedroomImage} alt="Fresh bedroom linens" className="sm:col-span-1" label="Rest, beautifully" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-primary px-4 py-20 text-primary-foreground sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl"><div className="mb-8 text-center"><p className="eyebrow text-champagne">07 — Interactive 3D gallery</p><h2 className="editorial-title mt-4 text-5xl sm:text-6xl">Turn the page on clean.</h2><p className="mx-auto mt-4 max-w-lg text-sm text-primary-foreground/70">A few of the spaces that inspire a little exhale.</p></div><ThreeDPhotoCarousel photos={photos} /></div>
      </section>

      <section className="overflow-hidden bg-blush px-4 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl"><div className="mb-2 text-center"><p className="eyebrow text-rose-deep">08 — Glassy coverflow</p><h2 className="editorial-title mt-4 text-5xl text-primary sm:text-6xl">A portrait of fresh.</h2></div><GlassyCarousel items={photos} layout="poster" autoPlay={false} /></div>
      </section>

      <section className="bg-background px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-4xl border-y border-border py-12 text-center sm:py-16"><span className="mx-auto flex size-12 items-center justify-center rounded-full bg-blush text-rose"><Heart className="size-5" /></span><p className="eyebrow mt-5 text-rose">09 — Client notes</p><h2 className="editorial-title mt-4 text-4xl sm:text-5xl">A space for kind words.</h2><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground">Client testimonials will appear here when provided. We’re saving this space for real words, from real clients.</p></div>
      </section>

      <section id="contact" className="bg-primary px-6 py-20 text-primary-foreground sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="eyebrow text-champagne">10 — Let’s talk</p><h2 className="editorial-title mt-5 text-6xl sm:text-7xl">Your fresh<br />start begins here.</h2><p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/70">Tell us a little about the space you’d like cared for. Britney will be glad to hear from you.</p>
            <div className="mt-9 space-y-4 text-sm"><a href={`tel:${business.phone}`} className="flex items-center gap-3 hover:text-champagne"><Phone className="size-4 text-champagne" /> {business.phone} <span className="text-xs text-primary-foreground/60">Call / Text Britney</span></a><a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-champagne"><Mail className="size-4 text-champagne" /> {business.email}</a><p className="flex items-center gap-3"><MapPin className="size-4 text-champagne" /> Service area: {business.serviceArea}</p></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-primary px-6 pb-7 text-primary-foreground sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-7 border-t border-primary-foreground/20 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full border border-champagne/50 text-champagne"><Sparkles className="size-4" /></span><span><span className="block font-display text-xl">Well’ Swept</span><span className="eyebrow text-[8px] text-primary-foreground/60">Cleaning Solutions LLC</span></span></div>
          <p className="text-xs text-primary-foreground/60">{business.tagline}</p><a href="#top" className="inline-flex items-center gap-1 text-xs hover:text-champagne">Back to top <ChevronRight className="size-3 -rotate-90" /></a>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ number, title, image, alt, text }: { number: string; title: string; image: string; alt: string; text: string }) {
  return <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="group bg-background">
    <div className="photo-frame aspect-[1.55/1]"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" /></div>
    <div className="flex items-start justify-between gap-4 border-b border-border py-5"><div><span className="eyebrow text-rose">{number} / Service</span><h3 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></div><a href="#contact" aria-label={`Ask about ${title}`} className="mt-2 flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-rose group-hover:bg-rose group-hover:text-primary-foreground"><ArrowRight className="size-4" /></a></div>
  </motion.article>;
}

function Reason({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="border-b border-primary-foreground/15 py-5 sm:border-l sm:px-7"><span className="text-champagne">{icon}</span><h3 className="mt-3 font-display text-2xl">{title}</h3><p className="mt-2 text-xs leading-6 text-primary-foreground/65">{text}</p></div>;
}

function BeforeAfter({ image, label, alt }: { image: string; label: string; alt: string }) {
  return <figure className="relative overflow-hidden"><img src={image} alt={alt} loading="lazy" className="aspect-[1.35/1] w-full object-cover" /><figcaption className="absolute bottom-4 left-4 glass-panel px-4 py-2"><span className="eyebrow text-primary">{label}</span></figcaption></figure>;
}

function GalleryTile({ image, alt, label, className }: { image: string; alt: string; label: string; className: string }) {
  return <figure className={`group relative overflow-hidden ${className}`}><img src={image} alt={alt} loading="lazy" className="h-full min-h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-0" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/75 to-transparent px-4 pb-4 pt-12 font-display text-2xl text-primary-foreground">{label}</figcaption></figure>;
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Cleaning inquiry from ${String(data.get("name") ?? "Website visitor")}`);
    const body = encodeURIComponent(`Name: ${String(data.get("name") ?? "")}\nEmail: ${String(data.get("email") ?? "")}\nService: ${String(data.get("service") ?? "")}\n\n${String(data.get("message") ?? "")}`);
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const field = "w-full border-0 border-b border-primary-foreground/25 bg-transparent px-0 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/50 focus:border-champagne focus:ring-0";
  return <form onSubmit={handleSubmit} className="bg-primary-foreground/5 p-6 sm:p-9">
    <p className="eyebrow text-champagne">A few details, please</p><h3 className="mt-3 font-display text-3xl">Request a booking</h3>
    <div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="sr-only" htmlFor="contact-name">Your name</label><input id="contact-name" name="name" required placeholder="Your name" autoComplete="name" className={field} /><label className="sr-only" htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" required placeholder="Email address" autoComplete="email" className={field} /></div>
    <label className="sr-only" htmlFor="contact-service">Cleaning service</label><select id="contact-service" name="service" defaultValue="" required className={`${field} mt-4 appearance-none`}><option value="" disabled className="text-primary">What would you like cleaned?</option><option className="text-primary">Residential Cleaning</option><option className="text-primary">Commercial Cleaning</option><option className="text-primary">Not sure yet</option></select>
    <label className="sr-only" htmlFor="contact-message">A note about your space</label><textarea id="contact-message" name="message" rows={3} placeholder="A note about your space or timing" className={`${field} mt-4 resize-y`} />
    <Button type="submit" className="mt-6 h-12 rounded-full bg-rose px-6 text-primary-foreground hover:bg-rose-deep">Compose email request <ArrowRight /></Button>
    <p aria-live="polite" className="mt-3 text-xs text-primary-foreground/65">{sent ? "Your email app is opening with your inquiry." : "Your email app will open with the details you provide."}</p>
  </form>;
}
