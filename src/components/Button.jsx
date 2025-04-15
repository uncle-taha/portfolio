const Button = ({ label, icon: Icon }) => {
  return (
    <button
      className="group flex items-center justify-center gap-2 rounded-full
  bg-gradient-to-r from-violet-500 via-pink-400 to-indigo-400 bg-size-200 animate-gradient-rightToLeft  
  font-medium text-white transition-all hover:shadow-lg cursor-pointer py-2 px-8"
    >
      {label}
      {Icon && (
        <Icon className="transition-transform duration-200 transform group-hover:translate-x-2 ease-linear" />
      )}
    </button>
  );
};

export default Button;
