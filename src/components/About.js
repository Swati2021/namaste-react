import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>ABOUT</h1>
            <h2>This is namaste react web series.</h2>
            {/* <User name = {"Swati Sinha"} /> */}
            <UserClass name = {"Amit Prakash"} location = {"Banglore"} contact = {"amit@freshworks.com"} />
        </div>
        
    )
}

export default About