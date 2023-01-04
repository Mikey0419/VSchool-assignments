import './codebox.css'

function Codebox(props) {
    const text = `background: linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})
    -moz-background: linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})
    -webkit: linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`

    return(
            <code
                className="codebox"
                onClick={() => {
                    console.log(text);
                    navigator.clipboard.writeText("");
                    navigator.clipboard.writeText(text);
                    alert('Copied to clipboard!');
                }}>
            <span className="selector">background:</span> <span className="gradient-type">linear-gradient(</span>
                <span className="value">{props.angle}deg</span>
                <span className="selector">, </span> 
                <span className="value">{props.colors[0]}</span>
                <span className="selector">, </span>
                <span className="value">{props.colors[1]}</span>
                <span className="gradient-type">)</span><br />

                <span className="selector">-moz-background:</span> <span className="gradient-type">linear-gradient(</span>
                <span className="value">{props.angle}deg</span>
                <span className="selector">, </span> 
                <span className="value">{props.colors[0]}</span>
                <span className="selector">, </span>
                <span className="value">{props.colors[1]}</span>
                <span className="gradient-type">)</span><br />

                <span className="selector">-webkit:</span> <span className="gradient-type">linear-gradient(</span>
                <span className="value">{props.angle}deg</span>
                <span className="selector">, </span> 
                <span className="value">{props.colors[0]}</span>
                <span className="selector">, </span>
                <span className="value">{props.colors[1]}</span>
                <span className="gradient-type">)</span><br />

            </code>
    )
}

export default Codebox