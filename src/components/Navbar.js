function Navbar() {
    return (
        <div style={{ display: 'flex', backgroundColor: 'blue', flexDirection: 'row', padding: 10 }}>
            <p style={{ color: 'white', fontSize: 15, flex: 1, fontWeight: 600, justifyContent: "center" }}>Movies</p>
            <div style={{ position: 'relative' }}>
                <input placeholder='Search Movies...'>
                </input>
                <button >Submit</button>

            </div>
        </div >
    );
}

export default Navbar;
