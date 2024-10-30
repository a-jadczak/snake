const listenToPlayer = () =>
{
    document.addEventListener("keydown", function(e)
    {
        console.log(e.key)
    });

}

export default listenToPlayer;