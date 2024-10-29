// eslint-disable-next-line react/prop-types
const ComingSoon = ({ message = "We are working hard to launch something amazing." }) => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Coming Soon</h1>
          <p className="mt-4 text-xl text-gray-600">{message}</p>
          <p className="mt-2 text-md text-gray-500">Stay tuned!</p>
        </div>
      </div>
    );
  };
  
  export default ComingSoon;
  