import ComponentCall from "./ComponentCall";


function ComponentApply(props){
    return (
        <ul id = 'concepts'>
        <ComponentCall  image = {props.concepts[0].image} title = {props.concepts[0].title} description = {props.concepts[0].description}></ComponentCall>
        <ComponentCall  image = {props.concepts[1].image} title = {props.concepts[1].title} description = {props.concepts[1].description}></ComponentCall>
        <ComponentCall  image = {props.concepts[2].image} title = {props.concepts[2].title} description = {props.concepts[2].description}></ComponentCall>
        </ul>
    );

}

export default ComponentApply;