function Home() {
    return (
        <div className="Home">
            <h3>Instructions: </h3>
            <ol>
                <li>
                    Welcome to React Hooks Simplified by Piyush Jaiswal. You can find an easy explanation
                    and implementation to develop your understanding of react hooks in this small web app.
                </li>
                <li>
                    To start, go to App.js file. Uncomment the line for corresponding Hook you want to
                    implement.
                </li>
                <li>
                    In App.js file, replace Home component by the corresponding Hook component.
                </li>
                <li>
                    Now start the app by `npm start` command in terminal.
                </li>
                <li>
                    Detailed Explanation can be found <a href="https://dev.to/piyushjaiswal1610/react-hooks-simplified-295">here</a>.
                </li>
                <li>
                    Hope you find this interesting.
                </li>
            </ol>
            <a href="https://github.com/piyush-jaiswal-projects"> Github Profile </a> | 
            <a href="https://www.linkedin.com/in/piyushjaiswal1610/"> Linkedin </a> | 
            <a href="https://github.com/piyush-jaiswal-projects/react-hooks"> Github Repository </a> 
            <br />
            For more examples, refer official react documentation
            <a href="https://react.dev/reference/react"> here</a>
        </div>
    );
}

export default Home;