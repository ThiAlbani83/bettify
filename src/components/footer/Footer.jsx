import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 mt-20">
      <div className="py-16 mx-5 sm:mx-10 md:mx-16 lg:mx-40 xl:mx-60">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <HiDesktopComputer className="text-3xl text-primary" />
              <h3 className="text-2xl font-bold text-white">Bettify</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Transformamos ideias em soluções digitais inovadoras.
              Desenvolvimento ágil, seguro e preparado para o futuro.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Desenvolvimento Mobile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Consultoria Técnica
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Arquitetura de Software
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Suporte e Manutenção
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdEmail className="text-primary text-xl" />
                <a
                  href="mailto:contato@bettify.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  contato@bettify.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-primary text-xl" />
                <a
                  href="tel:+5511999999999"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +55 (11) 99999-9999
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MdLocationOn className="text-primary text-xl mt-1" />
                <p className="text-gray-300">
                  São Paulo, SP
                  <br />
                  Brasil
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center sm:justify-start gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Cookies
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                FAQ
              </a>
            </div>

            <button className="bg-gradient-to-r from-primary via-primary to-secondary px-6 py-2 rounded-xl text-black font-semibold text-sm hover:shadow-lg transition-all duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bettify. Todos os direitos reservados.
            Desenvolvido com <span className="text-primary">♥</span> para
            transformar o futuro digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
