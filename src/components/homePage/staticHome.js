import React, { Component } from 'react'
import theme from '../../util/theme'
import PropTypes from 'prop-types'
//We'll use this as a place holder when logging in instead of having it display the you are not login text
const styles = (theme) => ({
    ...theme.spreadThis
})
export class staticHome extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default staticHome
