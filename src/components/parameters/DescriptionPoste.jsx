function DescriptionPoste ({ salaireBrut }) {
    return (<div>
        <h2 className="text-xl bg-zinc-300 border-solid border-4 border-gray-600 mx-2 mt-3 h-auto pl-2 rounded-tr-md w-3/5">
            <p>Vous êtes <span className="font-bold">Echelon 2</span></p>
            <p>Votre coefficient est de  <span className="font-bold"> 375</span> soit en ETP un salaire de <span className="font-bold">{salaireBrut} 1846,04 € BRUT</span></p>
            <p>Votre temps de service est de  <span className="font-bold">62%</span> </p>
            <p><span className="font-bold">24h </span>d'accompagnement soit un salaire de <span className="font-bold">1144,55 € BRUT</span></p>
            <p>Vous êtes affecté dans une établissement en zone <span className="font-bold">REP</span></p>
      </h2>
    </div>)
}

export default DescriptionPoste