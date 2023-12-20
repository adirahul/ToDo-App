export default function UnComp({tasks}){
    return (
        <>
            <div className="App1">
            <h3>UnCompleted tasks</h3>
                <ul>
                {
                    tasks.map((item) => {
                    if(!item.done)
                    return <li key={item.id}>{item.Title}</li>
                    })
                }
                </ul>
            </div>
        </>
    )
}