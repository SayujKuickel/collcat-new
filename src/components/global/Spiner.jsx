const Spiner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white/30 backdrop-blur-md z-[1100]">
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center gap-3 animate-heart">
          <img
            src={`/assets/logo.png`}
            alt="spinner"
            className="w-32 h-32 object-contain"
          />
          <h3 className="text-4xl font-serif text-center font-bold text-primary-800">
            COLLCAT
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
