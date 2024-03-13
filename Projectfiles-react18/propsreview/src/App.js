import Child from './Child.jsx'
import Child2 from './Child2.jsx'
function App()
{
    let name = "React",name1 = "Front-end Development",name2 = "React18"
    let age = 7,age1 = 10,age2 =11;
    // <div>This is {name}</div> -- written in return
    //let name = "Book1",name1 = "Book2",name2 = "Book3",name3 = "BookList"
    // Take a parent&child components and take an array of names in parent and print in child
    let names = ["Sita","Gita","Meera"]
    let ages = [80,90,100]
    return(
    <>
        <div>
        <Child na={name} age={age}/>
        <Child na={name1} age={age1}/>
        <Child na={name2} age={age2}/>
        </div>
        <div>
            {names.map((names,index) =>
                (
                    <Child2 namelist ={names} ageList={ages[index]} key = {index} />
                )
            )}
        </div>
    </>
    )
}
export default App;