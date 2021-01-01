import React, { Component } from 'react'
import './card.css'


class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '',
            range: '',
            shadow: '',
            bordercolor: '',
            wid: '',
            hig: '',
            rad: '',
            head: '',
            fontCol: '',
            fnumber: '',
            trans: '',
            c_date: '',
            c_time: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
        if (this.state.fnumber >= 50) {
            this.setState({ fnumber: '0' })
        }
        if (this.state.head.length >= 400) {
            this.setState({ head: '' })
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.getDate();
        }, 1000)
    }

    getDate() {
        let today = new Date()

        this.setState({
            c_date: today.toLocaleDateString(),
            c_time: today.toLocaleTimeString()
        })
    }

    render() {
        const { color, range, shadow, bordercolor, wid, hig, rad, head, fontCol, fnumber, trans, c_date, c_time } = this.state

        const selector = ['capitalize', 'lowercase', 'uppercase']
        return (
            <div  className="card">
                <div className="card-input">
                    <label>Card color Picker: </label>
                    <input type="color" name="color" onChange={(e) => this.handleChange(e)} />
                    <span className="code">ColorCode: {color}</span><br /><br />
                    <div className="divider">
                        <div className="value_1">

                            <label>Border Color :</label><br /><br />
                            <input type="color" name="bordercolor" onChange={(e) => this.handleChange(e)} /><br /><br />
                            <label>Border Size :</label><br /><br />
                            <input type="range" min="0" max="10" value={range} name="range" onChange={(e) => this.handleChange(e)} />
                            <span>{range}</span><br /><br />
                            <label>Box-Shadow:</label><br /><br />
                            <input type="range" min="0" max="50" value={shadow} name="shadow" onChange={(e) => this.handleChange(e)} />
                            <span>{shadow}</span><br /><br />
                            <label>Radius :</label><br /><br />
                            <input type="range" min="0" max="50" value={rad} name="rad" onChange={(e) => this.handleChange(e)} />
                            <span>{rad}</span>
                        </div>
                        <div className="value_2">
                            <label>Width :</label><br /><br />
                            <input type="range" min="50" max="300" step="50" value={wid} name="wid" onChange={(e) => this.handleChange(e)} />
                            <span>{wid}</span><br /><br />
                            <label>Height :</label><br /><br />
                            <input type="range" min="50" max="300" step="50" defaultValue="10" value={hig} name="hig" onChange={(e) => this.handleChange(e)} />
                            <span>{hig}</span><br /><br />
                        </div>
                    </div>
                    <div className="text-style">
                        <div className="text_1">
                            <label>CardText:</label><br />
                            <small> wordCount: {head.length}</small><br />
                            <textarea placeholder="Enter the Card Content" type="text" cols="20" rows="4" name="head" value={head} onChange={(e) => this.handleChange(e)} /><br />
                            <small style={{ color: "gray" }} >characters up to 50 letters</small><br /><br />
                            <label>FontColor: </label>
                            <input type="color" value={fontCol} name='fontCol' onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div className="text_2">
                            <label>FontSize: </label><br /><br />
                            <input type="number" value={fnumber} name='fnumber' onChange={(e => this.handleChange(e))} /><br />
                            <small style={{ color: "gray" }} >Fontsize limit up to 50px</small><br /><br />
                            <label>Text-transform: </label>
                            <select name="trans" value={trans} onChange={(e => this.handleChange(e))} >
                                <option selected>Text-transform</option>
                                {selector.map((e) => {
                                    return (
                                        <>
                                            <option> {e} </option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>

                    </div>
                </div>

                <div className="out">

                    <div className="top_new">
                        <div className="date_new">
                            <h2>Date: <span> {c_date} </span></h2>
                        </div>
                        <div className="time_new">
                            <h2>Time: <span> {c_time} </span> </h2>
                        </div>
                    </div>

                    <div style={{
                        background: `${color}`,
                        boxShadow: `0 0 ${shadow}px ${color}`,
                        border: `${range}px solid ${bordercolor}`,
                        width: `${wid}px`,
                        height: `${hig}px`,
                        borderRadius: `${rad}%`

                    }} className="card-output">
                        <div className="text">
                            <p style={{ color: `${fontCol}`, fontSize: `${fnumber}px`, textTransform: `${trans}` }} >{head}</p>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Card
