import React from 'react'

const Intro = () => ( 
    <div>
        <p>You have 3 doors in front of you</p>
        <p>Behind one, you'll find $50,000</p>
        <p>Behind the others...dissapointment</p>
        <p>Choose wisely grasshopper</p>
    </div>
)


const SecondChoice = () => (
    <div>
        <p>Ok, we are down to two doors</p>
        <p>You can stay with your decision...</p>
        <p>...Or change</p>
    </div>
)

const GameOver = (props) => (
    <div>
        {props.success ? (
            <div>
                <p>Winner, Winner, Chicken dinner</p>
            </div>
        ) : (
            <div>
                <p>Nope, no luck there</p>
            </div>
        )}
    </div>
)

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openDoor: false,
            gameOver: false,
            success: false
        }
    }

    openDoor(other_ids, id){
        if (this.state.openDoor) {
            return this.lastDoor(id)
        }
        this.setState({openDoor: true})
        let door = other_ids[Math.floor(Math.random()*2)]
        alert(`You have selected ${id}. We can now get rid of ${door}`)
        let img = document.getElementsByClassName(door)
        img[0].style.display = 'none'
    }

    lastDoor(id){
        let result = [true, false]
        let money = result[Math.floor(Math.random()*2)]
        this.setState({
            gameOver: true,
            success: money
        })
    }

    render() {
        return(
            <div>
                <div>
                    {this.state.gameOver ? <GameOver success={this.state.success} /> : (
                        <div>
                            <div>
                                {this.state.openDoor ? <SecondChoice /> : <Intro /> }
                            </div>
                            <div className="doors">
                                <img src="/assets/door1.jpg" className="door-img door-1" onClick={() => this.openDoor(["door-2", "door-3"], "Door 1")} />
                                <img src="/assets/door2.jpg" className="door-img door-2" onClick={() => this.openDoor(["door-1", "door-3"], "Door 2")} />
                                <img src="/assets/door3.jpg" className="door-img door-3" onClick={() => this.openDoor(["door-1", "door-2"], "Door 3")} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default App