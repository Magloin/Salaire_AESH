import Card from "../base/Card";
import Checkbox from "../base/Checkbox";

function etabRep () {
    return (<Card>
         <h2 className="text-lg text-center font-extrabold">En établissement REP</h2>
        <Checkbox leftValue={"Non"} rightValue={"Oui"} />
        <Checkbox leftValue={"Rep"} rightValue={"Rep+"} />
    </Card>)
}
export default etabRep