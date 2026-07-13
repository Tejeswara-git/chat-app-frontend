function Message({ message }) {

    const time = new Date(message.createdAt)
        .toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
        });

    return (

        <div className="message">

            <h4>{message.username}</h4>

            <p>{message.text}</p>

            <small>{time}</small>

        </div>

    );
}

export default Message;