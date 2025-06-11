const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function CircularSpinner({ size = "md", className }) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
        sizeClasses[size],
        className
      )}
    />
  );
}

export default function LoadingExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex items-center space-x-3">
        <span className="text-gray-600 text-lg">Loading...</span>
        <CircularSpinner />
      </div>
    </div>
  );
}
