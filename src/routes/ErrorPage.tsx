const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)]">
      <h1 className="text-3xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
