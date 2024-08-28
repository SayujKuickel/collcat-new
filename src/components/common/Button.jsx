const Button = ({ children, styles, type = "secondary" }) => {
  const primaryStyles =
    "bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded-full";
  const secondaryStyles =
    "border-2 border-primary-500 px-3 py-1 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all";
  const tertiaryStyles = "";

  return (
    <div
      className={`${
        type === "primary"
          ? primaryStyles
          : type === "secondary"
          ? secondaryStyles
          : tertiaryStyles
      } ${styles} cursor-pointer font-semibold `}
    >
      {children}
    </div>
  );
};

export default Button;
