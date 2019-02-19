window.onload = function() {

    var link = document.createElement("link");
    link.href = "./src/css/chatbot.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);

    var chatFrame = document.createElement('div');
    chatFrame.className = "t38_frame";
    chatFrame.setAttribute('id', "t38_frame");

    var iframe = document.createElement('iframe');
    iframe.setAttribute('id', 't38_widget');
    iframe.setAttribute('name', 't38_widget');
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('title', 'ChatBot');

    iframe.src = "./src/index.html";
    
    chatFrame.appendChild(iframe);
    
    document.body.appendChild(chatFrame);
    
};