const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
    </div>
  </div>
);

export default Loader;
