import "./HeroStyles.css";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HeroImg" className="heroimg1" src={props.heroImg} />
                <div className={props.cName2}><h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        </>
    )
}

export default Hero;