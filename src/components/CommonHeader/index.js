import React, {Component} from 'react'
import './index.less'

export default class CommonHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <h2>react-form-editor</h2>
            </div>
        )
    }
}
