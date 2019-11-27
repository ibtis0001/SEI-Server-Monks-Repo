import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
        <p>Copyright &copy; 2019, DesignersHub</p>

        {/* <p>Copyright &copy; {document.write(new Date().getFullYear())}, DesignersHub</p> */}
                </footer>
            </div>
        )
    }
}
