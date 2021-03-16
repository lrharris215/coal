import React from 'react';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            active: false,
        }
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive() {
        debugger
        this.setState({
            active: !this.state.active,
        })
    }

    render() {
        const activeClass = (this.state.active) ? "active" : "hidden";
        return (
            <div className={this.props.klassName}>
                <div onClick={this.toggleActive}>{this.props.titleItem}</div>
                <div className={activeClass}>
                    <ul>
                        {this.props.listItems.map((item) => {
                            return (
                                <li>{item}</li>
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dropdown;