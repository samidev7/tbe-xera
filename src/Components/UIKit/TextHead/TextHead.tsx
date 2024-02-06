// Styles
import Style from "./TextHead.module.css";

interface TextHeadProps {
  value: string;
  title: string;
}

const TextHead: React.FC<TextHeadProps> = ({ value, title }) => {
  return (
    <div className={Style.head}>
      {/* <h1>{value}</h1> */}
      <h1>{title}</h1>
    </div>
  );
};

export default TextHead;
