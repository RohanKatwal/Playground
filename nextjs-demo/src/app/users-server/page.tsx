type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();

    return (
        <div>
            <h1>Users (Server Side)</h1>
            <ul className="space-y-4 p-4">
                {users.map(user => (
                    <li key={user.id}
                     className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        <strong>{user.name}</strong> ({user.username})<br />
                        Email: {user.email}<br />
                        Phone: {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}