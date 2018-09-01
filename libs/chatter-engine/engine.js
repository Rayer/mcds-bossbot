let user_context_info_list = [];
function get_user_context(identifier, context, output_source) {
    //lookup identifier, if have this, return new context with scenario.

    //if found, return;
    for(info in context_info) {
        if(info.id === identifier)
            return info;
    }

    //if not found, let's create one
    //Format is id, user_context, dialog_context
    let context_info = new require('./user_context');
    context_info_list.push(context_info);
    return context_info;
}

function input(user_context, input) {

}

