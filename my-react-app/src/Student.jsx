function Student(props){
    return(
        <div>
            <p>Student:{props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.student ? "Yes" : "No"}</p>
        </div>
    );
}
export default Student;