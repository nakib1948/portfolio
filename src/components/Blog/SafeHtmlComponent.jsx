
const SafeHtmlComponent = ({ htmlString }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default SafeHtmlComponent;
