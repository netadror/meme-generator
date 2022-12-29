
function Project(props) {
    // console.log('props', props)
    let badgeText
    if (props.text === 'cool') {
        badgeText = 'Cool!'
    } else if (props.text === 'exciting') {
        badgeText = 'Exciting!'
    } else if (props.text === 'wow') {
        badgeText = 'Wow!'
    }

    return (
        <div className="skill-box">
            {badgeText && <div className="skill-badge">{badgeText}</div>}
            <img className="skill-img" src={props.img} />
            <h4 className="skill-name">{props.skill}</h4>
            <p className="skill-years">{props.years} years</p>
        </div>
    )
}
export default Project;
