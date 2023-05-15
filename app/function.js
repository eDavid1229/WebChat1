var messages = document.querySelector("ul.messages");

function addMessage(sender, message)
{
    var li = document.createElement("li");
    li.classList.add("hidden");
    li.innerHTML = `<div>
                        <strong>${sender}</strong>
                        <p>${message}</p>
                    </div>`;
    messages.append(li);
    setTimeout(() =>
    {
        li.classList.remove("hidden");
        scrollDown();
    },
    0);
}
function scrollDown()
{
    messages.scrollTo(0, messages.scrollHeight);
}
function onNewMessage(method)
{
    document.querySelector("button").onclick = function(evt)
    {
        evt.preventDefault();

        var name = document.getElementById("name").value;
        var message = document.getElementById("message").value;

        if(name && message)
        {
            document.getElementById("message").value = "";

            method(name,message);
        }
    };
}