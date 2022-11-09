import './card.css'

/*

props.item.place
props.item.price
props.item.timeToGo

function getPrice() {
    return(
        <div>
        <span className="icon-dollar"></span>
    </div>
    )
}

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
    {price}
</div>

*/

function Card(props) {

    function getPrice() {
        if (props.item.price < 500) {
            return(
                <div>
                    <span className="icon-dollar"></span>
                </div>
            )
        } else if ((props.item.price > 500) && (props.item.price < 1000)) {
            return(
                <div>
                    <span className="icon-dollar"></span><span className="icon-dollar"></span>
                </div>
            )
        } else {
            return(
                <div>
                    <span className="icon-dollar"></span><span className="icon-dollar"></span><span className="icon-dollar"></span>
                </div>
            )
        }
    }

    function getCardColor() {

        const price = getPrice();
        
        if (props.item.timeToGo === 'Winter') {
            return(
                <div className="text-container winter">
                    <h3>{props.item.place}</h3>
                    {price}
                </div>
            )
        } else if (props.item.timeToGo === 'Spring') {
            return(
                <div className="text-container spring">
                    <h3>{props.item.place}</h3>
                    {price}
                </div>
            )
        } else if (props.item.timeToGo === 'Summer') {
            return(
                <div className="text-container summer">
                    <h3>{props.item.place}</h3>
                    {price}
                </div>
            )
        } else {
            return(
                <div className="text-container fall">
                    <h3>{props.item.place}</h3>
                    {price}
                </div>
            )
        }
    }

    const cardSeason = getCardColor();

    return(
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={props.item.imgUrl} />
                        </div>
                    </div>
                </div>
                {cardSeason}
            </div>
    )
}

export default Card