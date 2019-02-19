

window.onload = function() {


    function openChatBox() {
        // console.log(parent.document.getElementById('t38_frame').className);
        parent.document.getElementById('t38_frame').className = "t38_frame open";
        document.getElementById('t38_chat_parent').className = "widget_open";
    }

    function closeChatBox() {
        // console.log(parent.document.getElementById('t38_frame').className);
        parent.document.getElementById('t38_frame').className = "t38_frame";
        document.getElementById('t38_chat_parent').className = "";
    }

    function expandChatBox() {
        // console.log(parent.document.getElementById('t38_frame').className);
        parent.document.getElementById('t38_frame').className = "t38_frame open expand";
        document.getElementById('t38_chat_parent').className = "widget_open widget_expand";
    }

    var chatBtn = document.getElementById('t38_chat_button');
    chatBtn.addEventListener('click', openChatBox);

    var chatCloseBtn = document.getElementById('t38_widget_close');
    chatCloseBtn.addEventListener('click', closeChatBox);

    var chatExpandBtn = document.getElementById('t38_widget_expand');
    chatExpandBtn.addEventListener('click', expandChatBox);

    var chatCompressBtn = document.getElementById('t38_widget_compress');
    chatCompressBtn.addEventListener('click', openChatBox);
}