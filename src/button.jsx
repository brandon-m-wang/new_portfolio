export const Button = ({ text, onClick, additionalStyles }) => {
  const highlightColor = "#ffc296";
  return (
    <div
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.color = highlightColor;
        e.target.style.border = "solid " + highlightColor;
        e.target.style.borderWidth = "2px";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "#597788";
        e.target.style.border = "solid #597788";
        e.target.style.borderWidth = "2px";
      }}
      className={
        "rounded-full font-futura sm:w-16 w-auto px-2 cursor-pointer select-none text-center text-sm text-primary font-regular border-2 border-primary" +
        " " +
        additionalStyles
      }
    >
      {text}
    </div>
  );
};
