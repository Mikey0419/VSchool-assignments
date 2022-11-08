import './card.css'

/*

props.item.place
props.item.price
props.item.timeToGo

<div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ">
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>A blue bird</h3>
    <div>
      This a demo experiment to skew image container. It looks good.
  </div>
</div>

*/

function Card(props) {
    return(
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={props.item.imgUrl} />
                        </div>
                    </div>
                </div>
            <div className="text-container">
                <h3>{props.item.place}</h3>
                <div>
                    Price: <span className="icon-dollar"></span><span className="icon-dollar"></span>
                    Time to go: {props.item.timeToGo}
                </div>
            </div>
            </div>
    )
}

export default Card