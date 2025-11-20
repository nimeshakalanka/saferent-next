export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  );
}