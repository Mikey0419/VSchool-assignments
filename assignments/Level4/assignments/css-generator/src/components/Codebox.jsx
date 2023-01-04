import './codebox.css'

function Codebox(props) {
    const codeChunk = props.colors.map((item, index) => {
        if(index !== props.colors.length - 1) {
            return(
                <><span className="value">{item}</span><span className="selector">, </span></>
        )} else {
            return(
                <><span className="value">{item}</span></>
            )}
    })

    return(
            <code
                className="codebox"
                onClick={() => {
                    let code = document.querySelector("code").innerText;
                    console.log(code);
                    navigator.clipboard.writeText(code);
                }}>
            <span className="selector">background: </span> 
            <span className="gradient-type">linear-gradient(</span>
            <span className="value">{props.angle}deg</span>
                <span className="selector">, </span> 
                {codeChunk}
                <span className="gradient-type">)</span><br /><br />

                <span className="selector">-moz-background: </span> <span className="gradient-type">linear-gradient(</span>
                <span className="value">{props.angle}deg</span>
                <span className="selector">, </span> 
                {codeChunk}
                <span className="gradient-type">)</span><br /><br />

                <span className="selector">-webkit: </span> <span className="gradient-type">linear-gradient(</span>
                <span className="value">{props.angle}deg</span>
                <span className="selector">, </span> 
                {codeChunk}
                <span className="gradient-type">)</span><br />

            </code>
    )
}

export default Codebox