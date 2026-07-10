const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-lg p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          Your inquiry has been submitted successfully.
          Our team will contact you shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;