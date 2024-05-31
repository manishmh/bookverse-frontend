const HomeHeroGradient = () => {
  return (
    <>
      {/* top gradient */}
      <div className="w-full h-[20%] blur-xs absolute top-0  bg-gradient-to-b from-primary-light to-transparent"></div>
      <div className="w-full h-[30%] blur-md absolute top-0  bg-gradient-to-b from-primary-light to-transparent"></div>

      {/* bottom gradient */}
      <div className="w-full h-[20%] blur-md absolute bottom-0  bg-gradient-to-t from-primary-light to-transparent"></div>
      <div className="w-full h-[10%] blur-xs absolute bottom-0  bg-gradient-to-t from-primary-light to-transparent"></div>
      <div className="w-full h-[10%] blur-2xl absolute bottom-0  bg-gradient-to-t from-primary-light to-transparent"></div>

      {/* left graient */}
      <div className="w-1/3 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="w-1/3 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="w-1/3 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="w-1/3 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="w-1/3 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="w-1/3 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="md:w-1/2 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="md:w-1/2 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>
      <div className="md:w-1/2 h-full blur-lg absolute left-0  bg-gradient-to-r from-primary-light to-transparent"></div>

      {/* bottom gradient */}
      <div className="w-[10%] h-full blur-xl absolute right-0  bg-gradient-to-l from-primary-light o-transparent"></div>
      <div className="w-[2%] h-full blur-sm absolute right-0  bg-gradient-to-l from-primary-light o-transparent"></div>
      <div className="w-[3%] h-full blur-sm absolute right-0  bg-gradient-to-l from-primary-light o-transparent"></div>
    </>
  );
};

export default HomeHeroGradient;
