import * as React from "react";

export interface Props {
  name: string,
  enthusiasmLevel?: number
}

interface State {
  currentEnthusiasm: number
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: typeof props.enthusiasmLevel === "number" ?  props.enthusiasmLevel : 1
    }
  }
  getExclamationMarks = (numCharts: number) => {
    return Array(numCharts + 1).join('!');
  }
  onIncrement = () => {
    const { currentEnthusiasm } = this.state;
    this.updateEnthusiasm(currentEnthusiasm + 1)
  }
  onDecrement = () => {
    const { currentEnthusiasm } = this.state;
    this.updateEnthusiasm(currentEnthusiasm - 1)
  }
  updateEnthusiasm = (currentEnthusiasm: number) => {
    this.setState({
      currentEnthusiasm
    })
  }
  render() {
    const { name } = this.props;
    const { currentEnthusiasm } = this.state;
    if (currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic, :D")
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {`${name}${this.getExclamationMarks(currentEnthusiasm)}`}
        </div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Hello;