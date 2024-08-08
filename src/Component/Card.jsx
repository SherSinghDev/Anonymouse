export default function Card({cardData}) {
    return (
        <>
            <div className="col-md-4">
                <div className="card text-center py-3 pb-2">
                    <div className="card-icon"><i className={cardData.icon}></i></div>
                    <div className="card-body">
                        <h5 className="card-title my-3">{cardData.cardTitle}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}