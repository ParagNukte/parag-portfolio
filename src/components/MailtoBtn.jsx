
const MailtoButton = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={handleClick}>
      Send Email
    </button>
  );
};

export default MailtoButton;
