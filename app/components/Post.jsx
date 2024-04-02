import DeletePostButton from "./DeletePostButton";

export default function Post({id, title, age, content}){
    return (
        <div style={{border: '1px solid white', padding: '15px', margin: '10px 0px'}}>
            <h3>Животное: {title}</h3>
            <h4>Возраст: {age}</h4>
            <p>Приметы: {content}</p>
            <DeletePostButton postId={id} />
        </div>
    )
}