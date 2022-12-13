

function toggleDetail(e){
    const target = $(e.target)
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
    
    console.log($(item).children(1))
}

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const messages = $("#inp_messages")
    // console.log($(subject).val())
    if(!$(email).val()){
        alert("Email is required")
        
    } else if(!$(subject).val()){
        alert("subject is required")
    }
    else if (!$(messages)){
        alert("messages is required")
    } else{
        alert("form submitted")
        $(email).val("")
        $(subject).val("")
        $(messages).val("")

    }
}