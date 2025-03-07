const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <div className="text-red-500 text-5xl">⚠️</div>
        <p className="mt-4 text-lg font-semibold text-gray-900">
          Oops! Something went wrong.
        </p>
        <p className="mt-2 text-gray-600 font-semibold">{errorMessage}</p>
      </div>
    </div>
  );
};
export default ErrorPage;
