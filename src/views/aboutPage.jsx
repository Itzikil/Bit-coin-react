import { useSelector } from "react-redux";

export const AboutPage = () => {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    return (
        <section>
            <h2>Hello {loggedInUser?.name}</h2>
            <br />
            <p>My name is Issac and i'm a junior full stack developer</p>
            <p>This site was built with React and Redux</p>
            <br />
            <p>I tried to deliver the feelng of a Bit / paybox app, you can transfer bitcoins to your contact with the latest exchange rate</p>
            <p>If you can't find your contact in the contact list you can add them by cilcking on the plus button</p>
            <p>If you ran out of Bit coins just deposite as many as you want</p>
            <p>For more projects <a href="https://github.com/Itzikil" target='_blank' rel="noreferrer">My Github page</a></p>
        </section>
    )
}