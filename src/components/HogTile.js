import React from 'react'

class HogTile extends React.Component {

    state = {
        detailedView: false
    }

    switchToDetailedView = () => {
        this.setState({
            detailedView: !this.state.detailedView
        })
    }
        
    
    render () {

        let hogImgSrc = '/hog-imgs/' + this.props.name.toLowerCase().split(" ").join("_") + '.jpg'

        return (
    
            <div onClick={this.switchToDetailedView} className="pigTile">
               <h3>{this.props.name}</h3>
               <img src={hogImgSrc} alt="hog"></img>
                {this.state.detailedView && <div>
                    <p> Specialty: {this.props.specialty}</p>
                    <p>{this.props.greased ? "Greased" : "Not Greased"}</p>
                    <p> Weight: {this.props.weight}</p>
                    <p> Highest Honor: {this.props["highest medal achieved"]}</p>
                </div>
                }
            </div>
        )
    }
}

export default HogTile