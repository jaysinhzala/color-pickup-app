function List(){
    const fruits = ['Apple','Orange','Kiwi','Watermelon'];
    const fruitList = fruits.map(fruit => <li>{fruit}</li>);
    return (<ul>{fruitList}</ul>);
}

export default List;