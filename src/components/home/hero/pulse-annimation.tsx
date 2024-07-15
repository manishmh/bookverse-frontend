const PulseAnnimation = () => {
  return (
    <div className="w-full h-[40vh] md:h-auto md:min-h-[70vh] xl:min-h-[80vh] 3xl:min-h-[900px] flex flex-col justify-end px-3 gap-4 pb-16">
      <div className="bg-gray-600 w-20 h-4 animate-pulse"></div>
      <div className="bg-gray-600 w-full md:w-1/2 h-12 animate-pulse"></div>
      <div className="w-72 h-4 bg-gray-600 animate-pulse"></div>
      <div className="w-1/2 h-20 bg-gray-600 animate-pulse"></div>
      <div className="w-32 h-10 bg-gray-600 animate-pulse"></div>
    </div>
  );
};

export default PulseAnnimation;
