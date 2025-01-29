export default async function TypeName ( 
    { params }: { params: Promise<{ typeName: string }> } 
){
    const typeName = (await params).typeName;

    return (
        <div>
            <label>Hola {typeName}</label>
        </div>
    );
};