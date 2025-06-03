import React, { useState } from "react";
import Title from "../Title";

const Contact = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    consentimentoLGPD: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-10 mx-5 sm:mx-10 md:mx-16 lg:mx-40 xl:mx-60 rounded-2xl flex flex-col gap-10">
      <Title title={"Entre em Contato"} />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Form Section - Left Column */}
        <div className="flex-1 bg-gray-900/50 p-6 md:p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Nome Completo */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nomeCompleto"
                className="text-base md:text-lg text-gray-300 font-medium"
              >
                Nome Completo *
              </label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Digite seu nome completo"
              />
            </div>

            {/* E-mail and Telefone - Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label
                  htmlFor="email"
                  className="text-base md:text-lg text-gray-300 font-medium"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label
                  htmlFor="telefone"
                  className="text-base md:text-lg text-gray-300 font-medium"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Digite seu telefone"
                />
              </div>
            </div>

            {/* Assunto */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="assunto"
                className="text-base md:text-lg text-gray-300 font-medium"
              >
                Assunto *
              </label>
              <select
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">Selecione um assunto</option>
                <option value="desenvolvimento-web">Desenvolvimento Web</option>
                <option value="desenvolvimento-mobile">
                  Desenvolvimento Mobile
                </option>
                <option value="consultoria">Consultoria Técnica</option>
                <option value="suporte">Suporte</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mensagem"
                className="text-base md:text-lg text-gray-300 font-medium"
              >
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="4"
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-vertical"
                placeholder="Descreva seu projeto ou dúvida"
              />
            </div>

            {/* Consentimento LGPD */}
            <div className="flex gap-3 items-start">
              <input
                type="checkbox"
                id="consentimentoLGPD"
                name="consentimentoLGPD"
                checked={formData.consentimentoLGPD}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-primary bg-gray-800 border-gray-700 rounded focus:ring-primary focus:ring-2"
              />
              <label
                htmlFor="consentimentoLGPD"
                className="text-sm text-gray-300"
              >
                Concordo com o tratamento dos meus dados pessoais de acordo com
                a{" "}
                <span className="text-primary underline cursor-pointer">
                  Política de Privacidade
                </span>{" "}
                e autorizo o contato para fins comerciais. *
              </label>
            </div>

            {/* Botão Submit */}
            <button
              type="submit"
              disabled={!formData.consentimentoLGPD}
              className="bg-gradient-to-r from-primary via-primary to-secondary px-6 py-3 rounded-2xl text-black font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        {/* Effect Phrase Section - Right Column */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white leading-tight">
              Vamos transformar sua{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ideia
              </span>{" "}
              em realidade
            </h3>

            <p className="text-base md:text-lg xl:text-xl text-gray-300 leading-relaxed">
              Cada projeto é único, assim como cada solução que desenvolvemos.
              Conte-nos sobre seu desafio e vamos criar algo incrível juntos.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-300">Resposta em até 24 horas</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-300">Consultoria gratuita</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-300">Orçamento personalizado</p>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block relative">
            <div className="w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
