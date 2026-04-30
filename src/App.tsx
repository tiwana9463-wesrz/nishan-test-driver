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
    },
    hero: {
      title: "Your Experience is Valued Here",
      subtitle: "Join Canada's most respectful and reliable fleet. We are actively hiring experienced Class 1 drivers for Quebec, Ontario, and Alberta.",
      cta: "Start Your Application",
    },
    valueProps: {
      title: "Why Drive With Nishan Transport?",
      fleet: {
        title: "Well-Maintained Fleet",
        desc: "Drive late-model, fully equipped blue trucks designed for safety and your comfort on the road."
      },
      work: {
        title: "Stable, Consistent Work",
        desc: "Reliable routes across QC, ON, and AB. We respect your time and guarantee consistent mileage."
      },
      team: {
        title: "Respectful Team Environment",
        desc: "You are not just a truck number here. We treat our drivers like family with 24/7 dispatch support."
      }
    },
    management: {
      title: "A Message from Management",
      quote: "\"At Nishan Transport, we know that our company is only as good as the drivers behind the wheel. We are looking for experienced professionals who take pride in their work and prioritize safety.\"",
      team: "- The Nishan Transport Team"
    },
    form: {
      title: "Driver Onboarding Portal",
      subtitle: "Pre-Qualification Application",
      steps: ["Qualifications", "Safety", "Resume"],
      step1: {
        title: "Step 1: Experience & Region",
        license: "Do you hold a valid Canadian Class 1 License? *",
        exp: "Years of verifiable Class 1 experience? *",
        regions: "Preferred Running Regions *",
        select: "Select...",
        yes: "Yes, Class 1",
        no: "No",
        expOptions: ["Less than 1 year", "1 to 3 years", "3+ years"],
        qc: "Quebec (Dorval Hub)",
        on: "Ontario",
        ab: "Alberta"
      },
      step2: {
        title: "Step 2: Safety & Compliance",
        info: "Safety is our #1 priority. Please confirm your driving record status.",
        confirm1: "I confirm that I have a clean CVOR / Driver Abstract with no major infractions in the last 3 years. *",
        confirm2: "I am willing to undergo a standard pre-employment drug and alcohol screening. *",
      },
      step3: {
        title: "Step 3: Document Upload",
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
    },
    hero: {
      title: "Votre expérience compte",
      subtitle: "Rejoignez la flotte la plus respectueuse et la plus fiable du Canada. Nous recrutons activement des chauffeurs de classe 1 expérimentés pour le Québec, l'Ontario et l'Alberta.",
      cta: "Commencer votre candidature",
    },
    valueProps: {
      title: "Pourquoi conduire avec Nishan Transport ?",
      fleet: {
        title: "Flotte bien entretenue",
        desc: "Conduisez des camions bleus récents et entièrement équipés, conçus pour la sécurité et votre confort sur la route."
      },
      work: {
        title: "Travail stable et régulier",
        desc: "Itinéraires fiables à travers le QC, l'ON et l'AB. Nous respectons votre temps et garantissons un kilométrage constant."
      },
      team: {
        title: "Environnement d'équipe respectueux",
        desc: "Vous n'êtes pas seulement un numéro de camion ici. Nous traitons nos chauffeurs comme de la famille avec un support de répartition 24/7."
      }
    },
    management: {
      title: "Un message de la direction",
      quote: "\"Chez Nishan Transport, nous savons que notre entreprise ne vaut que par les conducteurs qui sont au volant. Nous recherchons des professionnels expérimentés qui sont fiers de leur travail et privilégient la sécurité.\"",
      team: "- L'équipe Nishan Transport"
    },
    form: {
      title: "Portail d'intégration des conducteurs",
      subtitle: "Demande de pré-qualification",
      steps: ["Qualifications", "Sécurité", "Résumé"],
      step1: {
        title: "Étape 1 : Expérience et région",
        license: "Détenez-vous un permis de classe 1 canadien valide ? *",
        exp: "Années d'expérience vérifiables en classe 1 ? *",
        regions: "Régions de conduite préférées *",
        select: "Sélectionner...",
        yes: "Oui, Classe 1",
        no: "Non",
        expOptions: ["Moins d'un an", "1 à 3 ans", "3 ans et plus"],
        qc: "Québec (Hub de Dorval)",
        on: "Ontario",
        ab: "Alberta"
      },
      step2: {
        title: "Étape 2 : Sécurité et conformité",
        info: "La sécurité est notre priorité n°1. Veuillez confirmer l'état de votre dossier de conduite.",
        confirm1: "Je confirme que j'ai un dossier de conduite / abstract propre sans infractions majeures au cours des 3 dernières années. *",
        confirm2: "Je suis prêt à subir un dépistage standard de drogues et d'alcool avant l'embauche. *",
      },
      step3: {
        title: "Étape 3 : Téléchargement de documents",
        dragDrop: "Glissez et déposez votre CV ici",
        click: "ou cliquez pour parcourir les fichiers (PDF, DOCX)",
        browse: "Parcourir les fichiers",
        optional: "* Facultatif : Téléchargez les journaux de bord récents ou l'abstract si disponible.",
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
  const t = translations[lang];

  const toggleLang = () => setLang(l => l === 'en' ? 'fr' : 'en');

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img 
            src="/logo.png.png" 
            alt="Nishan Transport Inc. Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex bg-slate-100 rounded-full p-1">
            <button 
              onClick={() => setLang('en')}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-[#0F2C59] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('fr')}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${lang === 'fr' ? 'bg-white text-[#0F2C59] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              FR
            </button>
          </div>
          <button className="hidden md:block text-[#0F2C59] font-semibold text-sm hover:underline">{lang === 'en' ? 'Contact Dispatch' : 'Contacter Dispatch'}</button>
          <a href="#apply" className="bg-[#0F2C59] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-900 transition-all shadow-md active:scale-95">
            {t.nav.apply}
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden lg:h-[calc(100vh-64px-48px)]">
        {/* Left Panel: Brand & Hero */}
        <div className="w-full lg:w-3/5 p-6 lg:p-10 flex flex-col justify-between relative overflow-y-auto">
          {/* Background Image Accent */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <img 
              src="/banner.jpg.png" 
              alt="Truck Background" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-blue-100 text-[#0F2C59] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              {lang === 'en' ? 'Now Hiring Class 1 Drivers' : 'Nous recrutons des chauffeurs classe 1'}
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2C59] leading-tight">
              {t.hero.title}.<br/>
              <span className="text-slate-400 font-light">
                {lang === 'en' ? translations.fr.hero.title : translations.en.hero.title}.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Truck, title: t.valueProps.fleet.title, sub: lang === 'en' ? "2024 Blue Volvos" : "Volvos bleus 2024" },
                { icon: Route, title: t.valueProps.work.title, sub: lang === 'en' ? "Consistent Mileage" : "Kilométrage constant" },
                { icon: Handshake, title: t.valueProps.team.title, sub: lang === 'en' ? "Dorval Dispatch" : "Dispatch de Dorval" }
              ].map((prop, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center mb-2">
                    <prop.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm text-[#0F2C59]">{prop.title}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">{prop.sub}</div>
                </div>
              ))}
            </div>

            {/* Management Video Box */}
            <div className="bg-[#0F2C59] rounded-2xl p-6 flex items-center space-x-6 lg:mr-10 shadow-xl">
              <div className="relative w-32 h-20 bg-slate-800 rounded-lg overflow-hidden border border-slate-600 group cursor-pointer flex-shrink-0">
                <img 
                  src="/banner.jpg.png" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" 
                  alt="Management Video"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-white border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-sm lg:text-base">{t.management.title}</h4>
                <p className="text-blue-200 text-[10px] lg:text-xs mt-1 italic leading-tight">{t.management.quote}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Application Form Card */}
        <div className="w-full lg:w-2/5 p-6 lg:p-8 bg-slate-100/50">
          <div id="apply" className="h-full bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col min-h-[500px]">
            <div className="bg-[#0F2C59] p-6 lg:p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-bold tracking-wide uppercase text-sm">{t.form.title}</h3>
                <span className="bg-blue-800 text-blue-200 text-[10px] px-2 py-1 rounded-md uppercase font-bold">
                  Step {step} of 3
                </span>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-white' : 'bg-white/20'}`} />
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-10 flex-1 flex flex-col overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  {step === 1 && (
                    <div className="space-y-6 flex-1">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-wider">{t.form.step1.license}</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button className="border-2 border-blue-600 bg-blue-50 py-3 rounded-xl text-sm font-bold text-blue-700 transition-all hover:bg-blue-100">
                            {t.form.step1.yes}
                          </button>
                          <button className="border-2 border-slate-50 py-3 rounded-xl text-sm font-bold text-slate-400 transition-all hover:bg-slate-100">
                            {t.form.step1.no}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-wider">{t.form.step1.exp}</label>
                        <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-slate-700 focus:outline-none focus:border-blue-600 transition-all hover:border-slate-300">
                          <option>{t.form.step1.select}</option>
                          {t.form.step1.expOptions.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-wider">{t.form.step1.regions}</label>
                        <div className="space-y-2">
                          {[t.form.step1.qc, t.form.step1.on, t.form.step1.ab].map((region, idx) => (
                            <label key={idx} className="flex items-center p-3 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-blue-50 transition-all group">
                              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                              <span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-[#0F2C59]">{region}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-6 flex flex-col">
                        <p className="text-[10px] text-slate-400 text-center mb-4 italic">
                          {lang === 'en' ? 'By continuing, you confirm compliance with MTO/SAAQ safety standards.' : 'En continuant, vous confirmez votre conformité aux normes de sécurité MTO/SAAQ.'}
                        </p>
                        <button 
                          onClick={nextStep}
                          className="w-full bg-[#0F2C59] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-all active:scale-[0.98]"
                        >
                          {t.form.next}
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 flex-1">
                      <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600 mb-4">
                        <p className="text-xs text-blue-800 font-medium">{t.form.step2.info}</p>
                      </div>
                      
                      <div className="space-y-3">
                        {[t.form.step2.confirm1, t.form.step2.confirm2].map((confirm, idx) => (
                          <label key={idx} className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-blue-50 transition-all group">
                            <input type="checkbox" className="w-5 h-5 text-blue-600 rounded mt-0.5 border-slate-300 focus:ring-blue-500" />
                            <span className="ml-3 text-xs font-medium text-slate-700 group-hover:text-[#0F2C59] transition-colors">{confirm}</span>
                          </label>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 flex flex-col gap-3">
                        <button 
                          onClick={prevStep}
                          className="w-full text-slate-400 py-2 text-xs font-bold uppercase tracking-widest hover:text-[#0F2C59] transition-colors"
                        >
                          {t.form.back}
                        </button>
                        <button 
                          onClick={nextStep}
                          className="w-full bg-[#0F2C59] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-all active:scale-[0.98]"
                        >
                          {t.form.next}
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 flex-1">
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-all cursor-pointer group">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                          <Upload className="w-8 h-8" />
                        </div>
                        <p className="text-base font-bold text-[#0F2C59] mb-1">{t.form.step3.dragDrop}</p>
                        <p className="text-[10px] text-slate-400 mb-4">{t.form.step3.click}</p>
                        <button className="bg-white border-2 border-[#0F2C59] text-[#0F2C59] px-6 py-2 rounded-xl text-xs font-bold hover:bg-[#0F2C59] hover:text-white transition-all">
                          {t.form.step3.browse}
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 italic">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        {t.form.step3.optional}
                      </div>

                      <div className="mt-auto pt-6 flex flex-col gap-3">
                        <button 
                          onClick={prevStep}
                          className="w-full text-slate-400 py-2 text-xs font-bold uppercase tracking-widest hover:text-[#0F2C59] transition-colors"
                        >
                          {t.form.back}
                        </button>
                        <button 
                          className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all active:scale-[0.98]"
                        >
                          {t.form.step3.submit}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 px-6 lg:px-10 py-3 flex flex-col sm:flex-row justify-between items-center text-[10px] lg:text-[11px] text-slate-500 border-t border-slate-200 gap-2">
        <div className="flex flex-wrap justify-center gap-4">
          <span>&copy; 2026 Nishan Transport Inc.</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <a href="#" className="hover:text-slate-900 transition-colors uppercase font-bold tracking-tighter">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors uppercase font-bold tracking-tighter">Privacy Policy</a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium">{lang === 'en' ? 'System Live: Dorval Hub Active' : 'Système en ligne : Hub Dorval actif'}</span>
        </div>
      </footer>
    </div>
  );
}

