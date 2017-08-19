import React from 'react'

class Timer extends React.Component {
  constructor() {
    super()
    this.state = { active: 0 }
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState(prevState => {
          if (prevState.active === 7) return { active: 0 }
          else return { active: ++prevState.active }
        }),
      500
    )
  }
  render() {
    return (
      <div className="instrument">
        <span className="name" />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((note, index) => {
          return index === this.state.active
            ? <span key={index} className="note active dot">•</span>
            : <span key={index} className="note dot">•</span>
        })}
      </div>
    )
  }
}

export default Timer
