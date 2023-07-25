import "./Avatar.scss";

const Avatar = (props) => {

  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width || '135px', height: props.width || '135px' }}
      />
    </div>
  );
};

export default Avatar;
 