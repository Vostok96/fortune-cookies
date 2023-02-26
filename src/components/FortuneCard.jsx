const FortuneCard = ({phrasesData}) => {
 return (
    <div>
        <h1 className="title">餅 幸 Galletas de la Fortuna 幸 餅</h1>
        <div className="papper">
            <p className="phrase">{phrasesData.phrase}</p>
            <p className="author">{phrasesData.author}</p>
        </div>

    </div>
 )
    
}

export default FortuneCard