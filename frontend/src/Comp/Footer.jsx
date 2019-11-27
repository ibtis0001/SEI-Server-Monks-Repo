import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{ position: "absolute",
                bottom: "0",
                width: "100%",
                height: "2.5rem",
                backgroundColor:'#DCDCDC' }}>
                <footer className="footer">
        <p>Copyright &copy; 2019, DesignersHub</p>

        {/* <p>Copyright &copy; {document.write(new Date().getFullYear())}, DesignersHub</p> */}
                </footer>
            </div>
        )
    }
}
