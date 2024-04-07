function Clock() {
    return (
        <div>
            <h1>25 + 5 Clock</h1>
            <div id="break-label">
                <h3>Break Length</h3>
                <button id="break-decrement"></button>
                <div id="break-length">5</div>
                <button id="break-increment"></button>
            </div>
            <div id="session-label">
                <h3>Break Length</h3>
                <button id="session-decrement"></button>
                <div id="session-length">25</div>
                <button id="session-increment"></button>
            </div>
            <div id="time-label">
                <h2>Session</h2>
                <div id="time-left">
                    mm:ss
                </div>
            </div>
        </div>
    );
}

export default Clock;