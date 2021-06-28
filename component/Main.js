export default function Home() {
    return (
        <nav>
            <form>
                <label>location</label>
                <input name="location" type="text" placeholder= "Barcelona"/> <br/>
                <label>Minimum Customers Per Hour </label>
                <input name="min-CST" type="text" placeholder= "2"/>
                <label>Maximum Customers Per Hour </label>
                <input name="max-CST" type="text" placeholder= "4" />
                <label>Average Customers Per Sale </label>
                <input name="avg-CST" type="text"  placeholder= "2.5" /> 
                <button name="Create" type = "submit">Create</button>
            </form>

            <style jsx>{`
            a{
                margin-right:5px;
                color:green;
            }`}
            </style>
        </nav>
    )
  }
  