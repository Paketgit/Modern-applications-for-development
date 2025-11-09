function OnClickButton(el){
    switch (el){
        case "vscode":
            location ='./vscode/vscode.html'
            break
        case "visualstudio":
            location = './visualstudio/visualstudio.html'
            break
        default:
            open(el, '_blank').focus()
            break
    }
    
}