import React, { Component } from 'react'


export default class Btn extends Component {
    constructor (props) {
        super(props)
    }

    getClassNames (data) {
        let classNames = ['btn']
        let arr = ['size', 'theme']
        arr.forEach((item) => {
            data[item].value && classNames.push(data[item].value)
        })
        return classNames.join(' ')
    }
    
    render () {
        let { data } = this.props
        let classNames = this.getClassNames(data)
        return (
            <div className="module-box">
                <button type="button" className={classNames}
                    onClick={this.onClick}>
                    {data.content.value}
                </button>
            </div>
        )
    }
}
