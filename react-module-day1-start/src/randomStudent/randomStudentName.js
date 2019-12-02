import React from "react";

export default class RandomStudentName extends React.Component {
    render() {
        const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        let names = ["Maria", "Soni", "Flor", "Estefi", "Laura"]

        return (
            <h1>Our student today is: {names[randomInt(0, names.length - 1)]}</h1>
        )
    }
}