import { Activity } from "lucide-react";

import React from "react";
import {
  ChevronRight,
  Wallet,
  ShoppingBag,
  Truck,
  Utensils,
} from "lucide-react";

function App() {
  const socialLinks = [
    {
      icon: (
        <img src="img/linkedin-logo.png" alt="LinkedIn" className="w-5 h-5 " />
      ),
      text: "LinkedIn",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      url: "https://www.linkedin.com/in/bruna-zunzarren-98694a204/",
      bgImage: "img/linkedin.png",
    },
    {
      icon: <img src="img/adobe-logo.png" alt="Resume" className="w-5 h-5" />,
      text: "Resume",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      url: "/resume.pdf",
      bgImage: "img/resume-bg.png",
    },
    {
      icon: <img src="img/github-logo.png" alt="Github" className="w-5 h-5" />,
      text: "Github",
      color: "bg-gradient-to-br from-gray-600 to-gray-700",
      url: "https://github.com/bzunzarren",
      bgImage: "img/github-bg.png",
    },
    {
      icon: <img src="img/calend.png" alt="Calendar" className="w-5 h-5" />,
      text: "Calendar",
      color: "bg-gradient-to-br from-sky-400 to-sky-500",
      url: "https://calendar.google.com",
    },
    {
      icon: <img src="img/email-logo.png" alt="Email" className="w-5 h-5" />,
      text: "Email",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      url: "mailto:zunzarren2014@icloud.com",
    },
    {
      icon: (
        <img src="img/website-logo.png" alt="Website" className="w-5 h-5" />
      ),
      text: "Website",
      color: "bg-gradient-to-br from-indigo-400 to-indigo-500",
      url: "https://br.com",
    },
  ];

  const projects = [
    {
      id: "datechatai",
      name: "Site Moissanite",
      date: "Apr 2023 - Dec 2023",
      url: "https://github.com/bzunzarren/RomuloMoissanite.git",
      icon: <img src="img/rm.png" alt="Logo" className="w-15 h-15" />,
      description:
        "Site de ecommerce desenvolvido com PHP e MySQL, hospedado em servidor dedicado. Sistema completo de gerenciamento de produtos e vendas.",
      image: "img/siteromulo.png",
      bgColor: "bg-purple-100",
    },
    {
      id: "baseball",
      name: "Blog de Notícias Automático",
      date: "Jan 2023 - Mar 2023",
      url: "/projects/baseball",
      icon: <Activity className="w-15 h-15 text-red-500" />, // Substituindo pelo ícone Activity
      description:
        "Sistema automatizado de geração de notícias utilizando IA, desenvolvido com Node.js e MongoDB. Integração com APIs de notícias.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000",
      bgColor: "bg-red-100",
    },
    {
      id: "proanimals",
      name: "Sistema Da Cabeça ao Pé",
      date: "Jun 2023 - Aug 2023",
      url: "https://github.com/bzunzarren/SistemaDaCabe-aaoPe.git",
      icon: <img src="img/cbap.png" alt="Logo" className="w-15 h-15" />,
      description:
        "Sistema de gestão para controle de cliente, fornecedores, estoque e financeiro. Desenvolvido com php e MySQL.",
      image: "img/siteloja.png",
      bgColor: "bg-pink-100",
    },
    {
      id: "citroen",
      name: "Sistema de Gestão Automotiva",
      date: "Sep 2023 - Nov 2023",
      url: "/projects/citroen",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description:
        "Plataforma completa para gestão de oficina mecânica com controle de serviços, peças e agendamentos. Desenvolvido com React e Node.js.",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000",
      bgColor: "bg-blue-100",
    },
    {
      id: "cashews",
      name: "Sistema Financeiro",
      date: "Feb 2023 - Apr 2023",
      url: "/projects/cashews",
      icon: <Wallet className="w-5 h-5 text-emerald-500" />,
      description:
        "Aplicação para controle financeiro pessoal e empresarial com relatórios e análises. Desenvolvido com Vue.js e Firebase.",
      image:
        "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1000",
      bgColor: "bg-emerald-100",
    },
    {
      id: "pedidofacil",
      name: "Sistema de Pedidos Online",
      date: "May 2023 - Jul 2023",
      url: "/projects/pedidofacil",
      icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
      description:
        "Plataforma de pedidos online para restaurantes e estabelecimentos comerciais. Desenvolvido com Next.js e PostgreSQL.",
      image:
        "https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=1000",
      bgColor: "bg-orange-100",
    },
    {
      id: "enviofacil",
      name: "Sistema de Logística",
      date: "Oct 2023 - Dec 2023",
      url: "/projects/enviofacil",
      icon: <Truck className="w-5 h-5 text-indigo-500" />,
      description:
        "Sistema de gestão logística com rastreamento de entregas e roteirização. Desenvolvido com Angular e Node.js.",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1000",
      bgColor: "bg-indigo-100",
    },
    {
      id: "sushiboo",
      name: "Delivery de Comida Japonesa",
      date: "Mar 2023 - May 2023",
      url: "/projects/sushiboo",
      icon: <Utensils className="w-5 h-5 text-pink-500" />,
      description:
        "Aplicativo de delivery especializado em comida japonesa com sistema de pedidos e pagamentos. Desenvolvido com React Native e Firebase.",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000",
      bgColor: "bg-pink-100",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleSocialLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSlideChange = () => {
    const maxSlides = socialLinks.length - 3;
    setCurrentSlide((current) => (current + 1) % maxSlides);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Brunafolio</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 flex gap-8 pl-6">
        {/* Left Sidebar */}
        <div className="w-72 fixed left-0 top-16 h-full shadow-md p-6">
          {/* Profile */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="img/bruna.png"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <span className="font-medium text-lg text-gray-900">
              Bruna Zunzarren
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 mb-8">
            {socialLinks.map((link) => (
              <button
                key={link.text}
                onClick={() => handleSocialLinkClick(link.url)}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 text-lg py-1 w-full text-left transition-colors"
              >
                <div className="w-8 h-8">{link.icon}</div>
                <span>{link.text}</span>
              </button>
            ))}
          </nav>

          {/* Latest Projects */}
          <div>
            <h2 className="text-lg font-medium text-gray-500 mb-4">
              Meus Projetos
            </h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.url)}
                  className="flex items-center gap-4 text-gray-700 hover:text-gray-900 w-full text-left transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${project.bgColor} flex items-center justify-center`}
                  >
                    {project.icon}
                  </div>
                  <span className="text-lg">{project.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[800px] mx-auto">
          {/* Social Cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
            {socialLinks.slice(currentSlide, currentSlide + 3).map((link) => (
              <button
                key={link.text}
                onClick={() => handleSocialLinkClick(link.url)}
                className="relative w-36 h-64 rounded-2xl p-4 text-white flex flex-col justify-between shadow-lg hover:opacity-90 transition-opacity overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110"
                  style={{ backgroundImage: `url(${link.bgImage})` }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 flex flex-col justify-between h-full p-4">
                  {link.icon}
                  <span className="text-lg font-semibold">{link.text}</span>
                </div>
              </button>
            ))}
            <button
              onClick={handleSlideChange}
              className="flex items-center justify-center w-10 h-32 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Show more"
            >
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* About Section */}
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl p-6 mb-8`}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="img/bruna.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="font-medium">Quem é, Bruna?</h2>
            </div>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              Sou uma desenvolvedora Full Stack com sólida experiência na
              construção e otimização de sistemas web completos. Tenho expertise
              no desenvolvimento de soluções robustas utilizando Node.js, PHP,
              Bootstrap, MySQL, Tailwind, Java entre outras tecnologias, com
              foco em qualidade de código e performance.
            </p>
          </div>

          {/* Projects Showcase */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl p-6 mb-8`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${project.bgColor} flex items-center justify-center`}
                >
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {project.date}
                  </p>
                </div>
              </div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                {project.description}
              </p>
              <div className="mt-4 aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
