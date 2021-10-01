const LargeInfoBox = (props) => {
    return(
        <div className="large-info-box">
            <div className="box-title">
                <h3>{props.title !== undefined && props.title !== "" ? props.title : <>Use prop title to set title</>}</h3>
            </div>
            <div className="cnt">
                {props.children}
            </div>
        </div>
    )   
}

export default LargeInfoBox;