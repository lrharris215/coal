import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleActive = this.toggleActive.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.timerId = null;
    }

    toggleActive() {
        this.setState({
            active: !this.state.active,
        });
    }

    handleMouseEnter() {
        if (this.props.hasHover) {
            if (this.timerId) {
                clearTimeout(this.timerId);
                this.timerId = null;
            }
            this.setState({
                active: true,
            });
        }
    }

    handleMouseLeave() {
        if (this.props.hasHover) {
            this.timerId = setTimeout(() => {
                this.setState({
                    active: false,
                });
            }, 155);
        }
    }

    render() {
        const activeClass = this.state.active ? 'active' : 'hidden';
        return (
            <div
                className={this.props.klassName}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                <div onClick={this.toggleActive} className={this.props.buttonName}>
                    {this.props.titleItem}
                </div>
                <div id={this.props.dropdownId} className={activeClass}>
                    <ul>
                        {this.props.listItems.map((item, idx) => {
                            return <li key={`${item}-${idx}`}>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dropdown;
