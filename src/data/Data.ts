import InputData from "./InputData";
import LineData from "./LineData";
import OutputData from "./OutputData";


class Data {
    input = new InputData()
    output = new OutputData()
    lines: LineData[] = []

    constructor(input: InputData = new InputData(), output: OutputData = new OutputData(), lines: LineData[] = []) {
        this.input = input
        this.output = output
        this.lines = lines
    }
}

export default Data;