import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Route, 
  Handshake, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Globe,
  PlayCircle,
  ShieldCheck,
  Award
} from 'lucide-react';

type Language = 'en' | 'fr';

const translations = {
  en: {
    nav: {
      apply: "Apply Now",
      benefits: "Benefits",
      fleet: "Our Fleet",
      about: "About Us"
    },
    hero: {
      title: "Your Experience is Valued Here",
      subtitle: "Join Canada's most respectful and reliable fleet. We are actively hiring experienced Class 1 drivers for Quebec, Ontario, and Alberta.",
      cta: "Start Your Application",
    },
    benefits: {
      title: "Why Choose Nishan Transport?",
      subtitle: "We prioritize our drivers' well-being, safety, and professional growth.",
      items: [
        { title: "Top-Tier Pay", desc: "Competitive mileage rates and performance bonuses paid weekly." },
        { title: "Home Time", desc: "Predictable schedules designed to keep you close to your family." },
        { title: "New Equipment", desc: "2024 Volvos and Freightliners equipped with the latest tech." },
        { title: "24/7 Support", desc: "Our dispatchers are former drivers who understand the road." }
      ]
    },
    testimonials: {
      title: "Voices From The Road",
      subtitle: "See what our professional drivers have to say about their journey with Nishan Transport.",
      items: [
        { 
          name: "Michael R.", 
          role: "Long-Haul Driver", 
          quote: "The equipment is top-notch. I've never driven a truck as well-maintained as the one I have here. Dispatch really listens to you.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
        },
        { 
          name: "Sarah T.", 
          role: "Regional Specialist", 
          quote: "As a woman in this industry, respect is everything. Nishan treats me like a professional and always gets me home on time.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
        },
        { 
          name: "Jaspreet S.", 
          role: "Owner Operator", 
          quote: "The pay is transparent and consistent. No hidden fees, no surprises. It's the best partnership I've had in 10 years of driving.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
        }
      ]
    },
    fleet: {
      title: "The Nishan Fleet",
      desc: "Our equipment is our pride. We maintain a strict replacement cycle to ensure you stay on the road, not in the shop."
    },
    form: {
      title: "Driver Onboarding Portal",
      subtitle: "Pre-Qualification Application",
      steps: ["Contact", "Experience", "Equipment", "Safety", "Resume"],
      step1: {
        title: "Step 1: Contact Information",
        fullName: "Full Legal Name",
        phone: "Phone Number",
        email: "Email Address",
        city: "City & Province"
      },
      step2: {
        title: "Step 2: Experience & Region",
        license: "Do you hold a valid Canadian Class 1 License? *",
        exp: "Years of verifiable Class 1 experience? *",
        regions: "Preferred Running Regions *",
        select: "Select...",
        yes: "Yes, Class 1",
        no: "No",
        expOptions: ["Less than 1 year", "1 to 3 years", "3 to 5 years", "5+ years"],
        qc: "Quebec (Dorval Hub)",
        on: "Ontario",
        ab: "Alberta"
      },
      step3: {
        title: "Step 3: Equipment & Availability",
        truck: "Preferred Truck Type",
        truckOptions: ["Reefer", "Dry Van", "Flatbed"],
        startDate: "Available Start Date",
        asap: "As soon as possible",
        twoWeeks: "Within 2 weeks",
        thirtyDays: "30+ days"
      },
      step4: {
        title: "Step 4: Safety & Compliance",
        info: "Safety is our #1 priority. Please confirm your driving record status.",
        confirm1: "I confirm that I have a clean CVOR / Driver Abstract with no major infractions. *",
        confirm2: "I am willing to undergo a standard drug and alcohol screening. *",
      },
      step5: {
        title: "Step 5: Document Upload",
        dragDrop: "Drag & Drop your Resume here",
        click: "or click to browse files (PDF, DOCX)",
        browse: "Browse Files",
        optional: "* Optional: Upload recent driver logs or abstract if available.",
        submit: "Submit Application"
      },
      next: "Next Step",
      back: "Back"
    },
    footer: "© 2026 Nishan Transport Inc. All Rights Reserved."
  },
  fr: {
    nav: {
      apply: "Postuler maintenant",
      benefits: "Avantages",
      fleet: "Notre flotte",
      about: "À propos"
    },
    hero: {
      title: "Votre expérience compte",
      subtitle: "Rejoignez la flotte la plus respectueuse et la plus fiable du Canada. Nous recrutons activement des chauffeurs de classe 1 expérimentés pour le Québec, l'Ontario et l'Alberta.",
      cta: "Commencer votre candidature",
    },
    benefits: {
      title: "Pourquoi choisir Nishan Transport ?",
      subtitle: "Nous accordons la priorité au bien-être, à la sécurité et à la croissance professionnelle de nos conducteurs.",
      items: [
        { title: "Salaire de premier ordre", desc: "Taux de kilométrage compétitifs et primes de performance payés chaque semaine." },
        { title: "Temps à la maison", desc: "Horaires prévisibles conçus pour vous garder proche de votre famille." },
        { title: "Nouvel équipement", desc: "Volvos et Freightliners 2024 équipés des dernières technologies." },
        { title: "Support 24/7", desc: "Nos répartiteurs sont d'anciens conducteurs qui comprennent la route." }
      ]
    },
    testimonials: {
      title: "Paroles de nos conducteurs",
      subtitle: "Voyez ce que nos conducteurs professionnels disent de leur parcours avec Nishan Transport.",
      items: [
        { 
          name: "Michael R.", 
          role: "Conducteur longue distance", 
          quote: "L'équipement est de premier ordre. Je n'ai jamais conduit un camion aussi bien entretenu que celui que j'ai ici. La répartition est vraiment à l'écoute.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
        },
        { 
          name: "Sarah T.", 
          role: "Spécialiste régionale", 
          quote: "En tant que femme dans cette industrie, le respect est tout. Nishan me traite comme une professionnelle et me ramène toujours à la maison à temps.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
        },
        { 
          name: "Jaspreet S.", 
          role: "Propriétaire-exploitant", 
          quote: "La paie est transparente et constante. Pas de frais cachés, pas de surprises. C'est le meilleur partenariat que j'ai eu en 10 ans de conduite.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
        }
      ]
    },
    fleet: {
      title: "La flotte Nishan",
      desc: "Notre équipement est notre fierté. Nous maintenons un cycle de remplacement strict pour vous assurer de rester sur la route."
    },
    form: {
      title: "Portail d'intégration",
      subtitle: "Demande de pré-qualification",
      steps: ["Contact", "Expérience", "Équipement", "Sécurité", "CV"],
      step1: {
        title: "Étape 1 : Coordonnées",
        fullName: "Nom légal complet",
        phone: "Numéro de téléphone",
        email: "Adresse e-mail",
        city: "Ville et province"
      },
      step2: {
        title: "Étape 2 : Expérience et région",
        license: "Détenez-vous un permis de classe 1 canadien ? *",
        exp: "Années d'expérience vérifiables en classe 1 ? *",
        regions: "Régions de conduite préférées *",
        select: "Sélectionner...",
        yes: "Oui, Classe 1",
        no: "Non",
        expOptions: ["Moins d'un an", "1 à 3 ans", "3 à 5 ans", "5 ans et plus"],
        qc: "Québec (Hub de Dorval)",
        on: "Ontario",
        ab: "Alberta"
      },
      step3: {
        title: "Étape 3 : Équipement et disponibilité",
        truck: "Type de camion préféré",
        truckOptions: ["Frigorifique", "Fourgon", "Plate-forme"],
        startDate: "Date de début disponible",
        asap: "Dès que possible",
        twoWeeks: "Sous 2 semaines",
        thirtyDays: "30 jours et plus"
      },
      step4: {
        title: "Étape 4 : Sécurité et conformité",
        info: "La sécurité est notre priorité n°1. Veuillez confirmer l'état de votre dossier.",
        confirm1: "Je confirme avoir un dossier de conduite propre sans infractions majeures. *",
        confirm2: "Je suis prêt à subir un dépistage standard de drogues et d'alcool. *",
      },
      step5: {
        title: "Étape 5 : Téléchargement de documents",
        dragDrop: "Glissez votre CV ici",
        click: "ou cliquez pour parcourir (PDF, DOCX)",
        browse: "Parcourir les fichiers",
        optional: "* Facultatif : Téléchargez votre abstract si disponible.",
        submit: "Soumettre la candidature"
      },
      next: "Étape suivante",
      back: "Retour"
    },
    footer: "© 2026 Nishan Transport Inc. Tous droits réservés."
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    license: '',
    experience: '',
    regions: [] as string[],
    truckType: '',
    startDate: '',
    confirm1: false,
    confirm2: false,
    resume: null as File | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[lang];

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Required";
      if (!formData.phone.trim()) newErrors.phone = "Required";
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = "Valid email required";
    }

    if (currentStep === 2) {
      if (!formData.license) newErrors.license = lang === 'en' ? 'required' : 'requis';
      if (formData.license === 'no') newErrors.license = lang === 'en' ? 'Class 1 License mandatory' : 'Permis classe 1 obligatoire';
      if (!formData.experience || formData.experience === t.form.step2.select) newErrors.experience = lang === 'en' ? 'Select level' : 'Sélectionnez le niveau';
      if (formData.regions.length === 0) newErrors.regions = lang === 'en' ? 'Select region' : 'Sélectionnez une région';
    }

    if (currentStep === 3) {
      if (!formData.truckType) newErrors.truckType = "Required";
      if (!formData.startDate) newErrors.startDate = "Required";
    }

    if (currentStep === 4) {
      if (!formData.confirm1) newErrors.confirm1 = lang === 'en' ? 'required' : 'requis';
      if (!formData.confirm2) newErrors.confirm2 = lang === 'en' ? 'required' : 'requis';
    }

    if (currentStep === 5) {
      if (!formData.resume) newErrors.resume = lang === 'en' ? 'Upload required' : 'Téléchargement requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(s => Math.min(s + 1, 5));
    }
  };
  
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleRegionToggle = (region: string) => {
    setFormData(prev => ({
      ...prev,
      regions: prev.regions.includes(region) 
        ? prev.regions.filter(r => r !== region)
        : [...prev.regions, region]
    }));
    setErrors(prev => ({ ...prev, regions: '' }));
  };

  const handleSubmit = async () => {
    if (validateStep(5)) {
      setIsSubmitting(true);
      await new Promise(r => setTimeout(r, 2000));
      alert(lang === 'en' ? 'Application Submitted Successfully! Our recruiting team will contact you within 24 hours.' : 'Candidature soumise avec succès ! Notre équipe de recrutement vous contactera dans les 24 heures.');
      setIsSubmitting(false);
      setStep(1);
      setFormData({
        fullName: '', phone: '', email: '', city: '',
        license: '', experience: '', regions: [],
        truckType: '', startDate: '',
        confirm1: false, confirm2: false, resume: null
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/logo.png.png" alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>
        <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-[#0F2C59] uppercase tracking-wider">
          <a href="#benefits" className="hover:text-blue-600 transition-colors">{t.nav.benefits}</a>
          <a href="#fleet" className="hover:text-blue-600 transition-colors">{t.nav.fleet}</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">{t.nav.about}</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex bg-slate-100 rounded-full p-1">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-[10px] font-bold ${lang === 'en' ? 'bg-white shadow-sm' : 'text-slate-400'}`}>EN</button>
            <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full text-[10px] font-bold ${lang === 'fr' ? 'bg-white shadow-sm' : 'text-slate-400'}`}>FR</button>
          </div>
          <a href="#apply" className="bg-[#0F2C59] text-white px-5 py-2 rounded-full font-bold text-xs uppercase hover:bg-blue-900 transition-all shadow-md">
            {t.nav.apply}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="/banner.jpg.png" alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block bg-blue-100 text-[#0F2C59] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Recruiting Open QC, ON, AB
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F2C59] leading-[1.1] mb-6">
              {t.hero.title}.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="bg-[#0F2C59] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                {t.hero.cta}
              </a>
              <div className="flex items-center gap-3 px-6 py-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">NT</div>
                  <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">AS</div>
                </div>
                <div className="text-xs font-bold text-slate-700">500+ Drivers Joined Support</div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:ml-auto w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-2">
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-[#0F2C59]">{t.form.title}</h3>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1.5 w-4 rounded-full ${step >= i ? 'bg-[#0F2C59]' : 'bg-slate-200'}`} />)}
                  </div>
                </div>
                
                <div id="apply" className="min-h-[400px] flex flex-col">
                  {step === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.form.step1.fullName}</label>
                        <input value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className={`w-full bg-white border p-3 rounded-xl focus:ring-2 focus:ring-[#0F2C59]/10 outline-none transition-all hover:shadow-md ${errors.fullName ? 'border-red-400' : 'border-slate-200'}`} placeholder="John Doe" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.form.step1.phone}</label>
                          <input value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full bg-white border p-3 rounded-xl focus:ring-2 focus:ring-[#0F2C59]/10 outline-none transition-all hover:shadow-md ${errors.phone ? 'border-red-400' : 'border-slate-200'}`} placeholder="555-0199" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.form.step1.email}</label>
                          <input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full bg-white border p-3 rounded-xl focus:ring-2 focus:ring-[#0F2C59]/10 outline-none transition-all hover:shadow-md ${errors.email ? 'border-red-400' : 'border-slate-200'}`} placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="space-y-1 pt-2">
                         <button onClick={nextStep} className="w-full bg-[#0F2C59] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                          {t.form.next}
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">{t.form.step2.license}</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button onClick={() => setFormData({...formData, license: 'yes'})} className={`py-3 rounded-xl border-2 font-bold text-xs transition-all hover:shadow-md ${formData.license === 'yes' ? 'border-[#0F2C59] bg-blue-50 text-[#0F2C59]' : 'border-slate-100 bg-white text-slate-400 hover:border-slate-300 hover:bg-slate-50'}`}>YES</button>
                          <button onClick={() => setFormData({...formData, license: 'no'})} className={`py-3 rounded-xl border-2 font-bold text-xs transition-all hover:shadow-md ${formData.license === 'no' ? 'border-red-400 bg-red-50 text-red-500' : 'border-slate-100 bg-white text-slate-400 hover:border-slate-300 hover:bg-slate-50'}`}>NO</button>
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">{t.form.step2.exp}</label>
                        <select value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0F2C59]/10 outline-none text-sm transition-all hover:shadow-md hover:border-slate-300">
                          <option>{t.form.step2.select}</option>
                          {t.form.step2.expOptions.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                      </div>
                      <div className="pt-4 flex gap-2">
                         <button onClick={prevStep} className="w-1/3 border border-slate-200 py-4 rounded-xl font-bold text-slate-400 hover:bg-white transition-all">{t.form.back}</button>
                         <button onClick={nextStep} className="w-2/3 bg-[#0F2C59] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-900 transition-all">{t.form.next}</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                       <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">{t.form.step3.truck}</label>
                        <div className="grid grid-cols-1 gap-2">
                          {t.form.step3.truckOptions.map(opt => (
                            <button key={opt} onClick={() => setFormData({...formData, truckType: opt})} className={`p-4 rounded-xl border-2 text-left font-bold text-sm transition-all hover:shadow-md ${formData.truckType === opt ? 'border-[#0F2C59] bg-blue-50 text-[#0F2C59]' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 flex gap-2">
                         <button onClick={prevStep} className="w-1/3 border border-slate-200 py-4 rounded-xl font-bold text-slate-400 hover:bg-white transition-all">{t.form.back}</button>
                         <button onClick={nextStep} className="w-2/3 bg-[#0F2C59] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-all">{t.form.next}</button>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-[#0F2C59]">
                        <p className="text-[11px] text-[#0F2C59] leading-relaxed">{t.form.step4.info}</p>
                      </div>
                      <label className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 cursor-pointer transition-all hover:border-[#0F2C59]/30 hover:bg-blue-50/10 hover:shadow-md group">
                        <input type="checkbox" checked={formData.confirm1} onChange={e => setFormData({...formData, confirm1: e.target.checked})} className="mt-1 w-4 h-4 text-[#0F2C59]" />
                        <span className="text-[11px] text-slate-600 font-medium group-hover:text-[#0F2C59] transition-colors">{t.form.step4.confirm1}</span>
                      </label>
                      <label className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 cursor-pointer transition-all hover:border-[#0F2C59]/30 hover:bg-blue-50/10 hover:shadow-md group">
                        <input type="checkbox" checked={formData.confirm2} onChange={e => setFormData({...formData, confirm2: e.target.checked})} className="mt-1 w-4 h-4 text-[#0F2C59]" />
                        <span className="text-[11px] text-slate-600 font-medium group-hover:text-[#0F2C59] transition-colors">{t.form.step4.confirm2}</span>
                      </label>
                      <div className="pt-4 flex gap-2">
                         <button onClick={prevStep} className="w-1/3 border border-slate-200 py-4 rounded-xl font-bold text-slate-400 hover:bg-white transition-all">{t.form.back}</button>
                         <button onClick={nextStep} className="w-2/3 bg-[#0F2C59] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-900 transition-all">{t.form.next}</button>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer relative shadow-sm ${formData.resume ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-400 hover:shadow-lg'}`}>
                        <div className="text-4xl mb-2">{formData.resume ? '✅' : '📄'}</div>
                        <p className="text-sm font-bold text-[#0F2C59] truncate px-2">{formData.resume ? formData.resume.name : t.form.step5.dragDrop}</p>
                        <input type="file" onChange={e => setFormData({...formData, resume: e.target.files?.[0] || null})} className="absolute inset-0 opacity-0 cursor-pointer" />
                      </div>
                      <div className="pt-4 flex flex-col gap-2">
                         <button onClick={handleSubmit} disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-xl transition-all ${isSubmitting ? 'bg-slate-400' : 'bg-green-600 hover:bg-green-700'}`}>
                           {isSubmitting ? 'PROCCESSING...' : t.form.step5.submit}
                         </button>
                         <button onClick={prevStep} className="w-full text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-[#0F2C59] transition-colors">{t.form.back}</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F2C59] mb-4">{t.benefits.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t.benefits.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0F2C59] group-hover:text-white transition-all transform group-hover:rotate-6">
                  {i === 0 && <Award className="w-7 h-7" />}
                  {i === 1 && <Globe className="w-7 h-7" />}
                  {i === 2 && <ShieldCheck className="w-7 h-7" />}
                  {i === 3 && <PlayCircle className="w-7 h-7" />}
                </div>
                <h4 className="font-bold text-[#0F2C59] mb-3 text-lg">{benefit.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F2C59] mb-4">{t.testimonials.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[1, 2, 3, 4, 5].map(star => <div key={star}>★</div>)}
                  </div>
                  <p className="text-slate-600 italic mb-8 leading-relaxed">"{item.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-[#0F2C59] text-sm">{item.name}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {item.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-24 bg-[#0F2C59] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-500/10 text-blue-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Modern Equipment
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.fleet.title}.
            </h2>
            <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
              {t.fleet.desc}
            </p>
            <div className="space-y-4">
              {['Smartway certified fleet', 'Full in-house maintenance garage', 'Equipped with refrigerators and modern ELD'].map(item => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-medium text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl group-hover:bg-blue-500/30 transition-all opacity-50"></div>
             <img src="/banner.jpg.png" alt="Fleet" className="rounded-3xl shadow-2xl relative z-10 border border-white/10 group-hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Blue Trucks', value: '250+' },
            { label: 'Weekly Miles', value: '2.5k+' },
            { label: 'Cities Served', value: '80+' },
            { label: 'Years Active', value: '15+' }
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-[#0F2C59] mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <img src="/logo.png.png" alt="Logo" className="h-10 mb-8 grayscale brightness-0 invert opacity-60" />
              <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed">
                Nishan Transport Inc. is a leading logistics provider specializing in reliable freight transportation. We build partnerships on trust, safety, and performance.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><div className="w-5 h-5 bg-slate-400 rounded-sm" /></div>)}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Driver Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apply Online</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li className="flex items-center gap-3"><Globe className="w-4 h-4" /> Dorval, QC (Head Office)</li>
                <li>24/7 Dispatch Support</li>
                <li className="text-blue-400">recruiting@nishantransport.ca</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <div>{t.footer}</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
              <a href="#" className="hover:text-white transition-colors">ELD Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


