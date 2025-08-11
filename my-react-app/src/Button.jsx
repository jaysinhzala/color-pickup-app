function Button(){
    let count = 1;
    const clickHandler = (name) => {
        if(count <= 3){
            console.log(`${name}, You clicked me ${count} times`);
            count++;
        }
        else{
            console.log(`${name}, Stop clicking me!`);
        }
    }
    return(<button onClick={() => clickHandler('Jay')}>Click me</button>);
}

export default Button;