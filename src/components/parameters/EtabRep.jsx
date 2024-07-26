import Card from "../base/Card";
import Checkbox from "../base/Checkbox";

function etabRep () {
    return (<Card>
         <h1 className="text-lg text-center font-extrabold">En établissement REP</h1>
        <Checkbox leftValue={"Non"} rightValue={"Oui"} />
        <Checkbox leftValue={"Rep"} rightValue={"Rep+"} />
    </Card>)
}
export default etabRep