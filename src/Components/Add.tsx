import React from "react";
import {API, graphqlOperation} from "aws-amplify";
import {createTodo} from "../graphql/mutations";

const AddItem = () => {
    const[item, setItem] = React.useState<string>();

    const save = async () => {
        const data = {name: item};
        try {
            await API.graphql(graphqlOperation(createTodo, {input: data}));
            console.log("Success!");
        } catch(e){
            console.log("Error!");

        }
    };

    return(
        <div>
            <input onChange = {e => setItem(e.target.value)}></input>
            <button onClick = {() => save()}>SAVE</button>button
        </div>
    );
};

export default AddItem;