const SmallInfoBox = (props) => {
    return(
        <div data-aos="fade-up" className="small-info-box">
            <ion-icon name={props.icon}></ion-icon>
            <div>
                <h5>{props.title}</h5>
                <p>{props.number}</p>
            </div>
        </div>
    )
}

export default SmallInfoBox;