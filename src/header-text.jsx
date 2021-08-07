export const HeaderText = ({ text, justifyEnd = false }) => {
  const classNames = justifyEnd ? "justify-self-end mr-28" : "";
  return (
    <i className={classNames}>
      <h2 className="text-primary font-futura text-5xl font-medium">{text}</h2>
    </i>
  );
};
