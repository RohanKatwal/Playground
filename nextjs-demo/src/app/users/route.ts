export const users=[
    {id:1,name:"Hon Doe"},
    {id:2,name:"rojHon Doe"}

]

export async function GET(){
    return Response.json(users)
}
export async function POST(request: Request) {
    const body = await request.json();
    const newUser = {
        id: users.length + 1,
        name: body.name
    };
    users.push(newUser);
    return Response.json(newUser, { status: 201 });
}