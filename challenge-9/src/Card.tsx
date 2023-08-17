
function Card(props) {
    console.log(props)
    // return (<div>{JSON.stringify(props)}</div>)
    const tags = [...props.languages]
    tags.push(props.role)
    tags.push(props.level)
    return (
        <div className="card">
            <div className="content">
                <span>{props.company}&nbsp;</span>
                <span className="card__new">{props.new && "new!"}&nbsp;</span>
                <span className="card__featured">{props.featured && "featured"}&nbsp;</span>
                <p className="card__position">{props.position}</p>
                <div className="card__opts">
                    <span>{props.postedAt}&nbsp;</span>
                    <span>{props.contract}&nbsp;</span>
                    <span>{props.location}&nbsp;</span>

                </div>
            </div>
            <div className="tags">
                {tags.map((tag, idx) => (
                    <span key={idx} onClick={() => props.setter(tag)}>{tag}&nbsp;</span>
                ))}
            </div>
        </div>
    )
}

export default Card