export const StretchView = (props) => {
    const { display } = props;
  
    console.log(props);
  
    return (
      <div className="displayview">
        {display.map((item) => (
          <a className="dataItem" href={item.video} target="_blank">
            <p> {item.area} </p>
          </a>
        ))}
      </div>
    );
  };