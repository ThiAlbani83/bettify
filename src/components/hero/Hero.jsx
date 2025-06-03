import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px] flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('./bgimage.png')] bg-cover bg-center bg-no-repeat opacity-30 blur-xs" />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-bold">
              Onde{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent font-bold">
                tecnologia
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              encontra{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent font-bold">
                estratégia!
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center drop-shadow-lg leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed font-light">
              A inteligência por trás das grandes decisões.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Se é Bettify™, é{" "}
              <span className="text-primary font-semibold">confiável</span>. É{" "}
              <span className="text-primary font-semibold">disruptivo</span>. É{" "}
              <span className="text-primary font-semibold">agora</span>.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
