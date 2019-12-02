import React from "react"

export default class FlowerComponent  extends React.Component {
    render() {
        let flowerData = {
            src: "https://images.unsplash.com/photo-1524303676975-5989d34c6854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }
    
        let theFlower = <img height="100" src={flowerData.src} alt="" />
        return (
            <div>
                <h5>I love flowers</h5>
                {theFlower}
            </div>
        )
    }
}