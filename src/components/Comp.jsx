import './../App.css'
export default function Comp({tasks}) {

    return (
        <>
            <div className="App1">
            <h3>Completed tasks</h3>
                <ul>
                {
                    tasks.map((item) => {
                    if(item.done)
                    return <li key={item.id}>{item.Title}</li>
                    })
                }
                </ul>
            </div>
        </>
    )

}