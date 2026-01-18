import React from "react";

const Highlights = () => {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
          <p className="text-xl text-gray-400">
            cada detalhe foi criado para melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/titanium-design.jpg"
              alt="Iphone Titanium"
            />
            <h3 className="font-bold mb-2 text-3xl">Titanio Premium</h3>
            <p className="text-gray-300">
              Estrurura em titânio de graus aeroespacial. O shmartphone mais
              leve
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/ios-features.jpg"
              alt="ios 2025"
            />
            <h3 className="font-bold mb-2 text-3xl">Ios 19</h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado do mundo com IA integrada
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="text-gray-300 mb-6">
            O chip mais poderoso em um smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../../public/img/chip-a18-pro.jpg"
            alt="chip a18"
          />

          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% mais rápida</li>
            <li>GPU 35% mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracing acelerado por hadware</li>
          </ul>
        </div>

        <div id="camera" className="text-center">
          <h3 className="text-4xl font-bold mb-10">
            Sistema de Camera Pro Avançado
          </h3>

          <div className="grid grid-col-3 gap-6">
            <div className="border-x-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
              <h4 className="text-xl font-semibold mb-2">Principal</h4>
              <p className="text-gray-400">
                Sensor quad-pixel com foco automático
              </p>
            </div>

            <div className="border-x-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-4">
                12MP
              </div>
              <h4 className="text-xl font-semibold mb-2">Ultrawide</h4>
              <p className="text-gray-400">Campo de visão de 120 noturno</p>
            </div>

            <div className="border-x-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
              <h4 className="text-xl font-semibold mb-2">telefone 5x</h4>
              <p className="text-gray-400">
                Zoom óptico de 5x com estabilização
              </p>
            </div>

          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Highlights;
