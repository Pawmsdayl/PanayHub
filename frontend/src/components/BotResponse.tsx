
function BotResponse ({message}: {message: string}) {
    return (
        <div className={`self-start`}>
            <p className={`text-white self-start`}>
              {message}
            </p>
        </div>
    )
}

export default BotResponse;