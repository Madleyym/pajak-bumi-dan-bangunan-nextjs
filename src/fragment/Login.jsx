const LoginPage = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        if (username === "admin" && password === "admin") {
            window.location.href = "/beranda";
        } else {
            alert("Username atau password salah");
        }
    }
    return (
        <div className="w-ful min-h-screen flex items-center justify-center bg-[#E8F5FC]">
            <form onSubmit={handleLogin} className="flex flex-col gap-10 bg-white border border-solid border-[#568CDD] p-10 shadow-3xl" id="login-form">
                {/* Login */}
                <h2 className="text-3xl font-bold text-[#568CDD] text-center">LOGIN</h2>
                <div className="username">
                    <input
                        className="py-2 px-4 bg-[#E8F5FC] border border-solid border-b-[#568CDD] text-red"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                    />
                </div>
                <div className="password">
                    <input
                        className="py-2 px-4 bg-[#E8F5FC] border border-solid border-b-[#568CDD] text-black"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                </div>

                <button type="submit" className="bg-[#568CDD] py-2 px-4">LOGIN</button>
            </form>
        </div>
    )
}

export default LoginPage;