const playerFactory = (name, type) => {
    this.name = name

    if(type === "player"){
        // stuff
    }else if (type === "cpu"){
        // ai stuff
    }

    return { name }
}

export default playerFactory