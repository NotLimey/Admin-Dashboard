const MediumInfoBox = (props) => {
    return(
        <div className="medium-info-box">
            <div className="box-title">
                <h3>{props.title !== undefined && props.title !== "" ? props.title : <>Use prop title to set title</>}</h3>
            </div>
            <div className="cnt">
                {props.children}
            </div>
        </div>
    )   
}

export default MediumInfoBox;