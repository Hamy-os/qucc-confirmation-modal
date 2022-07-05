import { useSpring, animated } from 'react-spring'

function Dialog({ status, message, onDialog, nameProduct }) {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: status,
    delay: 200
  })
    return (
      <animated.div style={props}>
        <div 
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={() => onDialog(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "white",
            transform: "translate(-50%,-50%)",
            background: "black",
            padding: "20px",
            borderRadius: "10px",
            borderColor: "black"
          }}
        >
          <h3 stlye={{ color: "#111", fontSize: "16px" }}>{message}</h3>
          <p stlye={{ color: "#111", fontSize: "6px" }}>This can't be undone.</p>
          <h1 style={{ color: "blue", fontSize: "24px" }}>{nameProduct}</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => onDialog(true)}
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                marginRight: "4px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Yes
            </button>
            <button
              onClick={() => onDialog(false)}
              style={{
                background: "green",
                color: "white",
                padding: "10px",
                marginLeft: "4px",
                border: "none",
                cursor: "pointer"
              }}
            >
              No
            </button>
          </div>
        </div>
        </div>
        </animated.div>
    );
  }
  export default Dialog;
  