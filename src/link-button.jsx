export const LinkButton = ({ text, link }) => {
  const highlightColor = "#ffc296";
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
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
        className="rounded-full w-24 cursor-pointer select-none text-center text-primary font-futura sm:text-sm text-xs font-regular border-2 border-primary"
      >
        {text}
      </div>
    </a>
  );
};
