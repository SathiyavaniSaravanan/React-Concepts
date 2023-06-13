
const EventsComp = () => {
    const handleClick = (x) => {
        console.log(`hello...${x}`);
    }
    return ( 
        <div className="eventComp">
            <button onClick={()=>handleClick("Welcome")}>Click</button>
        </div>
     );
}
 
export default EventsComp;
