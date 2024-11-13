import CarenceOutputData from "./CarenceOutputData";
import InputData from "./InputData";
import LineData from "./LineData";
import SalaryOutputData from "./SalaryOutputData";


class Data {
    input = new InputData()

    salaryOutput = new SalaryOutputData()
    carenceOutput = new CarenceOutputData()

    lines: LineData[] = []

    constructor(
        input: InputData = new InputData(), 
        salaryOutput: SalaryOutputData = new SalaryOutputData(),
        carenceOutput: CarenceOutputData = new CarenceOutputData(),
        lines: LineData[] = []
    ) {
        this.input = input
        this.salaryOutput = salaryOutput
        this.carenceOutput = carenceOutput
        this.lines = lines
    }
}

export default Data;